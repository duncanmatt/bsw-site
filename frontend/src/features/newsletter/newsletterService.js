import axios from 'axios';

const EMAIL_URL = '/api/newsletters';

const subscribe = async subData => {
	const response = await axios.post(EMAIL_URL, subData);

	if (response.data) {
		localStorage.setItem('subscription', JSON.stringify(response.data));
	}
	return response.data;
};

const subService = {
	subscribe,
};

export default subService;
