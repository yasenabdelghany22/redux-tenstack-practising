import {LoaderCircle, X} from "lucide-react";
import {Puppy} from "../types";
import { useState } from "react";
import {togglePuppiesLike} from "../queries";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store.ts";
import {puppyUpdated} from "../features/puppies/puppySlice.ts";

export default function RemoveButton( {puppy}: {
    puppy: Puppy,
} ) {
    const [pending, setPending] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();
    return (
        <button
            onClick={async () => {
                setPending(true);
                const updatedPuppy = await togglePuppiesLike(puppy.id)
                dispatch(puppyUpdated(updatedPuppy))
                setPending(false);
            }}
            type="button"
            aria-label={`Remove ${puppy.name} from shortlist`}
            className="grid size-8 flex-none cursor-pointer place-items-center rounded-full text-ink-soft hover:bg-white hover:text-ink"
        >
            { pending ? (
                <LoaderCircle className="animate-spin" />
            ) : (
                <X className="size-4" aria-hidden="true" />
            ) }
        </button>
    )
}