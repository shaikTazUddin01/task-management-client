import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../axiosSecure/useAxiosSecure';

const useAllTask = () => {
    const axiosSecure = useAxiosSecure()
    const { data,isPending ,refetch} = useQuery({
        queryKey: ['allTask'],
        queryFn: async () => {
            const res = await axiosSecure('/createTask')
            return res.data
        }
    })

    return [data,isPending,refetch]
};

export default useAllTask;