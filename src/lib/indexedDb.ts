import { importCryptoKey} from "./cryption";
import {
    connected,
    deleteDatabaseError,
    deleteDatabaseSuccess,
    error,
    success,
} from "./strings/alerts";
export const dbName = "CryptionKey";
export const dbVersion = 1;
export const objectStoreName = "Encryption_Decryption_Key";
const fileExtension = ".jwk";
let db: IDBDatabase;
export async function openDB() {
    const request = window.indexedDB.open(dbName, dbVersion);
    request.onerror = (event) => {
        alert(`Error ❌
              \nIndexedDB: \n${request.error}`);
    }

    request.onupgradeneeded = (event) => {
        db = (event.target as IDBRequest).result;

        const cryptionKeyObjectStore = db
            .createObjectStore(objectStoreName, {keyPath: "fileName"});
        alert(`${success}
              \nIndexedDB database: ${db.name} \nUpgraded to version: ${db.version}`);
    }

    request.onsuccess = (event) => {
        db = (event.target as IDBRequest).result;
        alert(`${success}
              \n${connected}
              \nDatabase: ${db.name} \nVersion: ${db.version}`);
    }
};

export function deleteFromIndexedDB(fileName: string) {
    const request = window.indexedDB.open(dbName, dbVersion);
    request.onerror = (event) => {
        alert(`${error}
              \nCould not delete ${fileName}
              \nDatabase: ${dbName} \nVersion: ${dbVersion}`)
    }
    request.onsuccess = (event) => {
        db = (event.target as IDBRequest).result;
        const request = db
            .transaction(objectStoreName, "readwrite")
            .objectStore(objectStoreName)
            .delete(fileName);
            request.onsuccess = (event) => {
                alert(`${success}
                      \nRemoved ${fileName} from IndexedDB.
                      \n${dbName} \n{dbVersion}`);
            }
    }
};

export function deleteDB() {
    const DBDeleteRequest = window.indexedDB.deleteDatabase(dbName);
    DBDeleteRequest.onerror = (event) => {
        alert(`${error}
              \n${deleteDatabaseError}`)
    }
    DBDeleteRequest.onsuccess = (event) => {
        alert(`${success}
              \n${deleteDatabaseSuccess}`)
    }
};

export async function addToDb(file: File) {
    const cryptionKey = await importCryptoKey(JSON.parse(await file.text()));
    const key = {
        fileName: file.name,
        key: cryptionKey
    }
    const request = window.indexedDB.open(dbName, dbVersion);
    request.onerror = (event) => {
        alert(`Error adding data to IndexedDB: \n\t${request.error}`);
    }
    request.onsuccess = (event) => {
        db = (event.target as IDBRequest).result;
        const transaction = db.transaction(objectStoreName, "readwrite");
        transaction.onerror = (event) => {
            console.log(`Transaction Error: \n\t${transaction.error}`);
        }
        transaction.oncomplete = (event) => {
          alert(`IndexedDB transaction complete.
                \nYou got this 😀`);
        }
        const objectStore = transaction.objectStore(objectStoreName);
        const request = objectStore.put(key)
        request.onsuccess = (event) => {
            alert(`Success ✔
                  \nAdded: ${file.name}
                  \nto IndexedDB: ${transaction.db.name} \nVersion: ${transaction.db.version}`);
        }
        request.onerror = (event) => {
            alert(`Error ❌
                  \n${file.name} not added to IndexedDB.
                  \n${request.error}
                  \nPlease try again.`);
        }
    }
};

export async function existingKeys() {
    const request = window.indexedDB.open(dbName, dbVersion);
    request.onerror = (event) => {
        alert(`@existingKeys: ${request.error}`);
    }
    request.onsuccess = (event) => {
        db = (event.target as IDBRequest).result;
        if (db.objectStoreNames.length == 0) {
            alert("There are no object stores");
        } else {
            const transaction = db.transaction(objectStoreName);
            transaction.onerror = (event) => {
                alert(`Error opening cursor ${request.error}`)
            }
            const objectStore = transaction.objectStore(objectStoreName);

            const objectStoreCount = objectStore.count();
            objectStoreCount.onerror = (event) => {
                alert(`Error getting the number of keys`);
            }
            objectStoreCount.onsuccess = (event) => {
                const result = (event.target as IDBRequest).result;
                alert(`Number of keys: ${result}`)
            }
            if (Number.parseInt(objectStore.count().toString()) == 0) {
                alert("No Cryption Keys exist");
            } else {
                objectStore.openCursor().onsuccess = (event) => {
                    const cursor = (event.target as IDBRequest).result;
                    if (cursor) {
                        console.log(`The key for file: ${cursor.key} is  ${cursor.value}`);
                        cursor.continue();
                    } else {
                        console.log("No more entries!");
                    }
                }
            }
            objectStore.openCursor().onerror = (event) => {
                alert(`Error opening cursor ${request.error}`)
            }
        }
    }
};

export async function getKey(fileName: string) {
    const request = window.indexedDB.open(dbName, dbVersion);
    let cryptionKey: CryptoKey | undefined;
    request.onerror = (event) => {
        alert(`@getKey: ${request.error}`);
    }
    request.onsuccess = async (event) => {
        db = await (event.target as IDBRequest).result;
        const transaction = db.transaction(objectStoreName);
        transaction.oncomplete =  (event) => {
            alert("Transaction Complete");
            console.log(cryptionKey);
            return cryptionKey
        }
        const objectStore = transaction.objectStore(objectStoreName);
        const request = objectStore.get(fileName);
        request.onerror = (event) => {
            alert(`Error getting ${fileName}'s key.`)
        }
        request.onsuccess = async (event) => {
            const result = await (event.target as IDBRequest).result;
            alert(`Successfully got ${fileName} from the database.`)
            console.log(result);
            console.log(result.key);
            cryptionKey = result.key;
        }
    }
    if (cryptionKey) {
        console.log(cryptionKey);
        return cryptionKey;
    }
};
