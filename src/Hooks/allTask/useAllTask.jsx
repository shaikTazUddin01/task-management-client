import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../axiosSecure/useAxiosSecure';
import useAuth from '../useAuth/useAuth';

const useAllTask = () => {
    const {user,loading}=useAuth()
    const email=user?.email
    console.log("Emial",email)
    const axiosSecure = useAxiosSecure()
    const { data,isPending ,refetch} = useQuery({
        queryKey: ['allTask'],
        enabled:!loading,
        queryFn: async () => {
            const res = await axiosSecure(`/createTask?email=${email}`)
            return res.data
        }
    })

    return [data,isPending,refetch]
};

export default useAllTask;