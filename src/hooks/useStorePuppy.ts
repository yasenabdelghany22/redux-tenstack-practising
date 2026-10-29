import {useMutation} from "@tanstack/react-query";
import {storeNewPuppy} from "../queries";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store.ts";
import {puppyAdded} from "../features/puppies/puppySlice.ts";
import {ApiError, Puppy} from "../types";

const useStorePuppy = () => {
    const dispatch = useDispatch<AppDispatch>();

    return useMutation<Puppy, ApiError, FormData>({
        mutationFn: storeNewPuppy, // receives whatever you pass to mutate(...)
        onSuccess: (newPuppy) => {
            dispatch(puppyAdded(newPuppy))
        },
    });
};

export default useStorePuppy