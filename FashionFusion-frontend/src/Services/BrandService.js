import axios from "../data/axios";

class BrandService {

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
}

export default new BrandService();