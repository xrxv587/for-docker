import axios from 'axios';

const instance = axios.create({
	withCredentials: true
});
instance.interceptors.response.use(resp => resp.data);

export default instance;