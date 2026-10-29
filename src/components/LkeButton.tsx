import {togglePuppiesLike} from "../queries";
import {Heart, LoaderCircle} from "lucide-react";
import {Puppy} from "../types";
import {Dispatch, SetStateAction, useState} from "react";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store.ts";
import {puppyUpdated} from "../features/puppies/puppySlice.ts";

export default function LikeButton( {puppy }: {
    puppy: Puppy
}) {
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
            aria-pressed={puppy.likedBy.includes(1)}
            aria-label={`${puppy.likedBy.includes(1) ? 'Remove' : 'Add'} ${puppy.name} ${puppy.likedBy.includes(1) ? 'from' : 'to'} shortlist`}
            className="absolute top-3 right-3 grid size-11 cursor-pointer place-items-center rounded-full bg-white text-ink aria-pressed:bg-ball aria-pressed:text-leash"
        >
            { pending ? (
                <LoaderCircle className="animate-spin" />
            ) : (
                <Heart
                    className="size-5.5"
                    fill={puppy.likedBy.includes(1) ? 'currentColor' : 'none'}
                    aria-hidden="true"
                />
            ) }

        </button>
    )
}