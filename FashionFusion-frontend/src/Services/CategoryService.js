import axios from "../data/axios";

class CategoryService {
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

}

export default new CategoryService();