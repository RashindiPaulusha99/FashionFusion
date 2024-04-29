import axios from "../data/axios";

class UserService{

    saveUser = async (data) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.post('/user/register',data)
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    userLogin = async (email,password) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.get('/user/login/'+email+'/'+password)
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    getUser = async (id) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.get('/user/get/'+id)
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    getAllUser = async () =>{
        const promise = new Promise((resolve, reject) =>{
            axios.get('/user/getAll')
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    deleteUser = async (id) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.delete('/user/delete/'+id)
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }
}

export default new UserService();