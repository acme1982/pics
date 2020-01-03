import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization:
			'Client-ID b070997e9eeec4d5874fac68ae9604a20327f376f87ce5cf7eb7bac0e1e17f00'
	}
});
