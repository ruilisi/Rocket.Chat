import { Replys } from '../../../models/server';
import { API } from '../api';

API.v1.addRoute('replys.set', { authRequired: false }, {
	post() {
		if (Replys.updateReply(this.bodyParams.department_id, this.bodyParams.replys) === 0) {
			Replys.insertReply(this.bodyParams.department_id, this.bodyParams.replys);
		}
		return API.v1.success();
	},
});
