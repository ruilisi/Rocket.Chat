import { Base } from './_Base';

export class Replys extends Base {
	insertReply(_id, data) {
		const record = {
			_id: `reply_${ _id }`,
			data,
		};
		return this.insert(record);
	}

	updateReply(_id, data) {
		const record = {
			data,
		};
		return this.update({ _id: `reply_${ _id }` }, record);
	}

	findReply(_id) {
		const query = { _id: `reply_${ _id }` };
		return this.findOne(query);
	}
}

export default new Replys('replys');
