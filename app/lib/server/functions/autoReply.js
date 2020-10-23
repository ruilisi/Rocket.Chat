const tables = { test_department_id: [['how are you', 'fine thank you and you']] };

export const autoReply = function(message, department_id) {
	if (tables.hasOwnProperty(department_id)) {
		for (let i = 0; i < tables[department_id].length; i++) {
			if (message === tables[department_id][i][0]) {
				return {
					ok: true,
					res: tables[department_id][i][1],
				};
			}
		}
	}
	return {
		ok: false,
	};
};
