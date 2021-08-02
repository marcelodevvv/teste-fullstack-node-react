import axios from 'axios';

const baseURL =
	typeof window === 'undefined'
		? process.env.API_URL
		: process.env.NEXT_PUBLIC_API_URL;

export const api = axios.create({
	baseURL: baseURL,
});
