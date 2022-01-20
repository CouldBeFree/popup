import axiosFactory from 'axios'

const host = process.env["VUE_APP_GATEWAY_API"]
console.log(process.env)

export default axiosFactory.create({
	baseURL: host
})
