import axios from 'axios';


const useAxiosSecure = () => {
    const axiosSecure=axios.create({
        baseURL:'https://task-management-ten-zeta.vercel.app'
    })
    return axiosSecure
};

export default useAxiosSecure;