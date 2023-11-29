import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useUsers = () => {
    
    const axiosPublic = useAxiosPublic();

    const {refetch, data: users=[]} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosPublic.get('/users')
            // console.log(res.data);
            return res.data
        }
    })

    return [users, refetch]
};

export default useUsers;