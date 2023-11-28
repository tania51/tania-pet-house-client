import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

const useAddPets = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();

    const {refetch, data: addPets=[]} = useQuery({
        queryKey: ['add-pets'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/all-pets/${user?.email}`)
            // console.log(res.data);
            return res.data
        }
    })

    return [addPets, refetch]
};

export default useAddPets;