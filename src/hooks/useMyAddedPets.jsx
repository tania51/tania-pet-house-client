import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useMyAddedPets = () => {
    
    const axiosPublic = useAxiosPublic();

    const {refetch, data: myAddPet=[]} = useQuery({
        queryKey: ['my-add-pet'],
        queryFn: async () => {
            const res = await axiosPublic.get('/my-added-pets')
            // console.log(res.data);
            return res.data
        }
    })

    return [myAddPet, refetch]
};

export default useMyAddedPets;