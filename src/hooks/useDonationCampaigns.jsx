import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";


// donated information

const useDonationCampaigns = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();

    const {isLoading, refetch, data: donationCampaigns=[]} = useQuery({
        queryKey: ['donation-campaigns'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/donation-campaigns/${user?.email}`)
            // console.log(res.data);
            return res.data
        }
    })

    return [donationCampaigns, refetch, isLoading]
};

export default useDonationCampaigns;