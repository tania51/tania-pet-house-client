import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";



const useAllDonation = () => {
    
    const axiosPublic = useAxiosPublic();

    const {refetch, data: allDonation=[]} = useQuery({
        queryKey: ['all-donation'],
        queryFn: async () => {
            const res = await axiosPublic.get('/my-donation-campaigns')
            // console.log(res.data);
            return res.data
        }
    })

    return [allDonation, refetch]
};

export default useAllDonation;