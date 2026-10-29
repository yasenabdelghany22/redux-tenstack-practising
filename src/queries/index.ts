import {ApiError, Puppy} from "../types";
import axios, {AxiosError, AxiosPromise} from "axios";
import {useQuery} from "@tanstack/react-query";

// Using fetch()
export async function getPuppies(): Promise<Puppy[]> {
    try{
        const response = await fetch('http://react-from-scratch-api.test/api/puppies');
        if (!response.ok) {
            throw await response.json()
        }
        const { data } = await response.json();
        return data
    }catch(error){
        throw error;
    }
}

// Using axios
export async function togglePuppiesLike(id: Puppy['id']) {
    try {
        const response = await axios.patch(
            `http://react-from-scratch-api.test/api/puppies/${id}/like`
        );
        const { data } = response.data;
        return data;
    } catch (error) {
        if (axios.isAxiosError<ApiError>(error)) {
            // error.response?.data is typed as ApiError
            console.error(error.response?.data.message);
            console.error(error.response?.status);
        } else {
            throw error;
        }
    }
}

// Using TensStack
export async function storeNewPuppy(formData: FormData): Promise<Puppy> {
    try {
        const response = await fetch('http://react-from-scratch-api.test/api/puppies', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData
        });
        if (!response.ok) {
            throw await response.json()
        }
        const { data } = await response.json();
        return data
    }catch(error) {
        console.error(error);
        throw error;
    }
}