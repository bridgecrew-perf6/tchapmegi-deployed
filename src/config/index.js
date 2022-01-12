export let backendHost

const hostname = window && window.location && window.location.hostname

// https://tchapmeji-server.herokuapp.com/

// if (hostname === 'localhost') {
// 	backendHost = 'http://localhost:3000'
// } else {
// 	backendHost = 'http://ec2-3-14-85-63.us-east-2.compute.amazonaws.com:3000'
// }

// backendHost = 'http://localhost:3000'
backendHost = 'https://tchapmeji-server.herokuapp.com'
export const getAPIRoot = (endpoint, apiVersion) => `${backendHost}/api/${endpoint}/${apiVersion}`
