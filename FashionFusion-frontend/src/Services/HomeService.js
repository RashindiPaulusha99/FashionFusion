import axios from "../data/axios";

class HomeService {

    fetchBrand = async () =>{
        const promise = new Promise((resolve, reject) =>{

            axios.get('brand/getAll')
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    saveBrand = async (data) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.post('/brand/save',data)
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    deleteBrand = async (id) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.delete('/brand/delete/'+id)
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    fetchAllBrands = async ()=>{

        const promise = new Promise((resolve, reject) =>{

            axios.get('/brand/getAll/brands',{
            })
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    fetchABrand = async (id)=>{

        const promise = new Promise((resolve, reject) =>{

            axios.get('/brand/get/'+id,{
            })
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    updateBrand = async (id,data) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.put(`/brand/update/${id}`,data)
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    saveCategory = async (data) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.post('/category/save',data)
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    fetchCategory = async ()=>{

        const promise = new Promise((resolve, reject) =>{

            axios.get('/category/getAll',{
            })
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    fetchAllCategories = async ()=>{

        const promise = new Promise((resolve, reject) =>{

            axios.get('/category/getAll/categories',{
            })
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    fetchACategory = async (id)=>{

        const promise = new Promise((resolve, reject) =>{

            axios.get('/category/get/'+id,{
            })
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    updateCategory = async (id,data) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.put(`/category/update/${id}`,data)
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }

    deleteCategory = async (id) =>{
        const promise = new Promise((resolve, reject) =>{
            axios.delete('/category/delete/'+id)
                .then((res) =>{
                    return resolve(res)
                }).catch((error) =>{
                return resolve(error)
            })
        })
        return await promise
    }
    
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

export default new HomeService();