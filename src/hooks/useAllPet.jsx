import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

// import { useEffect } from "react";
// import { useState } from "react";


const useAllPet = () => {
    // const [allPet, setAllPet] = useState([])
    // const [loading, setLoading] = useState(true)

    // useEffect( () => {
    //     fetch('http://localhost:5008/all-pets')
    //     .then(res => res.json())
    //     .then(data => {
    //         setAllPet(data)
    //         setLoading(false)
    //     })
    // }, [])

    // return [allPet]



    const axiosPublic = useAxiosPublic();

    const {refetch, data: allPet=[]} = useQuery({
        queryKey: ['all-pet'],
        queryFn: async () => {
            const res = await axiosPublic.get('/all-pets')
            // console.log(res.data);
            return res.data
        }
    })

    return [allPet, refetch]

    // const {data: allPet =[], isPending: loading, refetch} = useQuery({
    //     queryKey: ['pets'],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get('/all-pets')
    //         return res.data;
    //     }
    // })
    
    // return [allPet, loading, refetch]
};

export default useAllPet;