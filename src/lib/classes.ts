export class AccessPayload {
	_id: string | undefined;
	firstName: string | undefined;
	username: string | undefined;

	constructor(
		_id: string | undefined,
		firstName: string | undefined,
		username: string | undefined,
	) {
		this._id = _id;
		this.firstName = firstName;
		this.username = username;
	}
};
