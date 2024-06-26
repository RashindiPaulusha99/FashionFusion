import axios from "../data/axios";

class HomeService {

    saveCart = async (data) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.post('/cart/save',data)
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    updateCart = async (id,data) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.put(`/cart/update/${id}`,data)
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    getCart = async (id) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.get('/cart/get/userBy/'+id)
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    getACart = async (id) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.get('/cart/get/'+id,{
            })
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    deleteCart = async (id) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.delete('/cart/delete/'+id,{
            })
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    savePayment = async (data) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.post('/payment/save',data)
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    getAllPayments = async () =>{
        const promise = new Promise((resolve, reject) =>{
            axios.get('/payment/getAll')
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    virtualTryOn = async (data) => {

        const promise = new Promise((resolve, reject) =>{
            axios.post('/cart/try',data)
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }


}

export default new HomeService();