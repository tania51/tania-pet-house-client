import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useSortAllPet = (des) => {
    
    const axiosPublic = useAxiosPublic();

    const {refetch, data: allSortPet=[]} = useQuery({
        queryKey: ['all-sort-pet'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all-sort-pets?sort=${des && 'des'}`)
            // console.log(res.data);
            return res.data
        }
    })

    return [allSortPet, refetch]
};

export default useSortAllPet;