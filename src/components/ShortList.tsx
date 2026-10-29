import {Puppy} from "../types";
import RemoveButton from "./RemoveButton.tsx";
import {Dispatch, SetStateAction} from "react";

export default function ShortList({ puppies }: {
    puppies: Puppy[]
}) {
    const shortlist = puppies.filter((p) => p.likedBy.includes(1))

    return (
        <section aria-labelledby="shortlist-title">
            <h2
                id="shortlist-title"
                className="text-[1.75rem] font-bold tracking-[-0.01em] font-stretch-85%"
            >
                Your shortlist
                <span className="ml-2 text-base font-medium text-ink-soft font-stretch-100%">
                    {shortlist.length} {shortlist.length === 1 ? 'puppy' : 'puppies'}
                </span>
            </h2>
            {shortlist.length === 0 ? (
                <p className="mt-4 text-ink-soft">Tap the heart on a puppy to add it here.</p>
            ) : (
                <ul className="relative mt-6 flex snap-x gap-5 overflow-x-auto pt-6 pb-3 before:absolute before:inset-x-0 before:top-2 before:border-t-[3px] before:border-dotted before:border-ink-soft before:content-['']">
                    {shortlist.map((p) => (
                        <li
                            key={p.id}
                            className="relative flex flex-none snap-start items-center gap-3 rounded-t-2xl rounded-b-[1.75rem] bg-sky p-3"
                        >
                            <img src={p.imageUrl} alt="" className="size-13 rounded-full object-cover" />
                            <strong className="max-w-[10ch] truncate text-lg font-bold">{p.name}</strong>
                            <RemoveButton puppy={p} />
                        </li>
                    ))}
                </ul>
            )}
        </section>
    )
}
