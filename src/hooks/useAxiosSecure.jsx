import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://pet-server-pi.vercel.app/'
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;