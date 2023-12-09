import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useAdoptionRequestPets = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();

    const {refetch, data: adoptedRequestPets=[]} = useQuery({
        queryKey: ['adopted-pets'],
        queryFn: async () => {
            const res = await axiosPublic.get(`https://pet-server-pi.vercel.app/adoptedPet/${user?.email}`)
            // console.log(res.data);
            return res.data
        }
    })

    return [adoptedRequestPets, refetch]
};

export default useAdoptionRequestPets;