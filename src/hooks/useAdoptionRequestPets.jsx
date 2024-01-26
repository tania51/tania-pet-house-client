import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useAdoptionRequestPets = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();

    const {refetch, data: adoptedRequestPets=[]} = useQuery({
        queryKey: ['adopted-pets'],
        queryFn: async () => {
            const res = await axiosPublic.get(`http://localhost:5008/adoptedPet/${user?.email}`)
            // console.log(res.data);
            return res.data
        }
    })

    return [adoptedRequestPets, refetch]
};

export default useAdoptionRequestPets;