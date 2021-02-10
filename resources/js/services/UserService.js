import api from "./API";
const baseUrl = "/auth"

class TestdataServiceClass{

    async createUser(payload = {}){
        try{
            const {data} = await api.post(baseUrl + "/createUser",payload)
            return data
        }catch (e) {
            await Promise.reject(e)
        }
    }
}

const TestdataService = new TestdataServiceClass()
export default TestdataService
