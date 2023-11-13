import { useQuery } from "@tanstack/react-query";
import http2 from "../../utils/http2";
import { API_ENDPOINT } from "../../utils/api-endpoint";



const fetchUserData = async ({ queryKey }) => {
    const [_key] = queryKey;
    const [ data ] = await http2.get(_key).then((value)=>{
        // Apa yang ada  di dalam then adalah respon dari API yang berhasil
        // didalam then kita dapat memanipulasi data yang ingin kita sampaikan
        // let DataHasil = {
        //     user : value.data.data.name,
        //     email : value.data.data.email
        // }

        // return { data : DataHasil }

    }).catch((err)=>{
        // akan dijalankan jika terjadi error pada API
        if (err.response.status === 401){
            window.location.href = "/login"
        }
    })
    return data
}

// Untuk dinamis handle

const useGetDataUsers = (options)=>{
    return useQuery([API_ENDPOINT.GET_USER, options], fetchUserData)
}

export {fetchUserData, useGetDataUsers}