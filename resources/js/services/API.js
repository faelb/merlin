import axios, {AxiosInstance} from 'axios'

export const BASE = '/'

class Api {
    constructor(config) {
        if (!config) {
            config = {
                headers: {
                    'Cache-Control': 'no-cache',
                    CacheControl: 'no-cache',
                    Pragma: 'no-cache'
                }
            }
        }

        const instance = axios.create(config)

        instance.defaults.baseURL = BASE
        instance.defaults.withCredentials = false

        instance.interceptors.request.use(
            function (request) {
                // const token = store.getters['client/getToken']
                // request.headers.Authorization = 'Bearer ' + token

                return request
            }
        )


        instance.interceptors.response.use((response) => {
                if (response.status === 200) {
                    //(this.$swal("200 bro");
                    return response
                }else if (response.status === 401) {
                    console.info('401 error')
                } else if (response.status === 500) {
                    console.info('500 error')
                } else if (response.status === 204) {
                    console.info('204 Status Handling')
                    return response
                } else if (response.status === 201) {
                    console.info('201 Status Handling')
                    return response
                }
                return response
            },
            (error) => {
                console.log('er',error)
                if (error.response.status === 401) {
                    console.info('401 error')
                } else if (error.response.status === 400) {
                    console.info(error.response.data)
                    //.errors for more detailed messages
                    return Promise.reject(error.response.data)
                } else if (error.response.status === 422) {
                    console.info(error.response.data)
                    return Promise.reject(error.response.data)
                } else if (error.response.status === 404) {
                    //console.warn('route ' + error.response.config.url + ' not available')
                } else if (error.response.status === 403) {
                    console.info('403 error')
                }
                return Promise.reject(error)
            })

        return instance
    }
}


const api = new Api()
export default api
