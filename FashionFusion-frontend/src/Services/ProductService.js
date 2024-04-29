import axios from "../data/axios";

class ProductService {

    fetchItems = async (status)=>{

        const promise = new Promise((resolve, reject) =>{

            axios.get('/item/getAll/'+status,{
            })
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    fetchItem = async (id) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.get('/item/get/'+id,{
            })
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    fetchItemsByOrder = async (status,order) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.get('/item/getOrder/'+status+'/'+order,{
            })
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    deleteItem = async (id) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.delete('/item/delete/'+id)
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    saveItem = async (data) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.post('/item/save',data)
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    updateQty = async (id,body)=>{

        const promise = new Promise((resolve, reject) =>{

            axios.put('/item/updateQty/'+id,body)
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    updateItem = async (id,data) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.put(`/item/update/${id}`,data)
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }
}

export default new ProductService();