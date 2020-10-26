import { Replys } from '../../../models/server';

export const autoReply = function(message, department_id) {
	const data = Replys.findReply(department_id);
	if (data) {
		const table = data.data;
		for (let i = 0; i < table.length; i++) {
			if (message === table[i][0]) {
				return {
					ok: true,
					res: table[i][1],
				};
			}
		}
	}
	return {
		ok: false,
	};
};
