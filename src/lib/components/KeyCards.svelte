<script lang="ts">
  import KeyCard from "$lib/components/cardTemplates/KeyCard.svelte";
  import {onMount} from "svelte";
  let db: IDBDatabase;
  const dbName = "CryptionKey";
  const dbVersion = 1;
  const objectStoreName = "Encryption_Decryption_Key";

  let existingKeys: string[] = [];

  onMount(async() => {
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
                        existingKeys.push(cursor.key);
                        cursor.continue();
                    }
                }
                existingKeys = existingKeys;
            }
            objectStore.openCursor().onerror = (event) => {
                alert(`Error opening cursor ${request.error}`)
            }
        }
    }
  })

  $: keys = existingKeys;
</script>

<section class="cards-section">
{#if existingKeys.length > 0}
  {#each keys as fileName (fileName)}
    <KeyCard {fileName} />
  {/each}
{:else}
  <h3>
    There are no uploaded keys
  </h3>
{/if}
</section>


<style>
  .cards-section {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 0.25rem;
  }
</style>

