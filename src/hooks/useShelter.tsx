import { UseQueryOptions, UseQueryResult, useQuery } from '@tanstack/react-query'
import { getShelter } from '../services/shelter/getShelter'
import { ISheltert } from '../interfaces/shelter'

export function useShelter(options?: Partial<UseQueryOptions<ISheltert, Error>>): UseQueryResult<ISheltert, Error> {
    const result = useQuery({
        staleTime:Infinity,
        ...options,
        queryKey: ['get-shelter'],
        queryFn: () => getShelter(),
    })

    return result
}