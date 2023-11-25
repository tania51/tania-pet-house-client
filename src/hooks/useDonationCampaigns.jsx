import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";


const useDonationCampaigns = () => {
    const axiosPublic = useAxiosPublic();
    const {user} = useAuth();

    const {refetch, data: donationCampaigns=[]} = useQuery({
        queryKey: ['donation-campaigns'],
        queryFn: async () => {
            const res = await axiosPublic.get(`http://localhost:5008/donation-campaigns/${user?.email}`)
            // console.log(res.data);
            return res.data
        }
    })

    return [donationCampaigns, refetch]
};

export default useDonationCampaigns;