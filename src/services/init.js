import axios from 'axios'
import ls from './ls'
import Ls from './ls'

/**
 * We'll register a HTTP interceptor to attach the "CSRF" header to each of
 * the outgoing requests issued by this application. The CSRF middleware
 * included with Laravel will automatically verify the header's value.
 */

window.axios = require('axios');

window.axios.defaults.headers.common = {
    'X-Requested-With': 'XMLHttpRequest'
};


/**
 * Interceptors
 */
axios.interceptors.request.use(function (config) {
	// Do something before request is sent
	
    const AUTH_TOKEN = Ls.get('auth.token');

    if(AUTH_TOKEN){
        config.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`
	}	
	
	return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

