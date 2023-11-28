import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useDonationCampaignsPet = () => {
    const axiosPublic = useAxiosPublic();

    const {refetch, data: campaignPet=[]} = useQuery({
        queryKey: ['all-pet'],
        queryFn: async () => {
            const res = await axiosPublic.get('/donation-campaign')
            // console.log(res.data);
            return res.data
        }
    })

    return [campaignPet, refetch]
};

export default useDonationCampaignsPet;