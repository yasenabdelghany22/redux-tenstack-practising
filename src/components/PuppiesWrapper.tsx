import { useEffect, useState} from "react";
import SearchForm from "./SearchForm";
import ShortList from "./ShortList";
import PuppiesList from "./PuppiesList";
import PuppyForm from "./PuppyForm";
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch} from "../store.ts";
import {fetchPuppies, selectPuppies} from "../features/puppies/puppySlice.ts";

const queryClient = new QueryClient()
export default function PuppiesWrapper() {

    const dispatch = useDispatch<AppDispatch>()
    const puppiesList = useSelector(selectPuppies)
    useEffect(() => { dispatch(fetchPuppies()) }, [dispatch])

    const [filter, setFilter] = useState<string>("");
    return (
        <main className="mx-auto grid max-w-304 gap-[clamp(2.5rem,6vw,4.5rem)] px-4 pt-[clamp(1.5rem,4vw,3rem)] pb-20">
            <SearchForm filter={filter} setFilter={setFilter} />
            <ShortList puppies={puppiesList} />
            <PuppiesList puppies={puppiesList} filter={filter} />
            <QueryClientProvider client={queryClient}>
                <PuppyForm />
                <ReactQueryDevtools />
            </QueryClientProvider>
        </main>
    )
}