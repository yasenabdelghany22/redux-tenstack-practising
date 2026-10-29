import {Puppy} from "../types";
import {Dispatch, SetStateAction} from "react";
import LikeButton from "./LkeButton";

function PuppiesList({puppies, filter}: {
    puppies: Puppy[],
    filter: string
}) {
    return (
        <section aria-labelledby="all-title">
            <h2 id="all-title" className="sr-only">
                All puppies
            </h2>
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-x-6 gap-y-8">
                {puppies.filter((p) => p.trait.toLowerCase().includes(filter.toLowerCase())).map((p) => (
                    <li key={p.id}>
                        <div className="relative">
                            <img
                                src={p.imageUrl}
                                alt={`${p.name}, a puppy`}
                                loading="lazy"
                                className="aspect-square w-full rounded-3xl bg-sky object-cover"
                            />
                            <LikeButton puppy={p} />
                        </div>
                        <h3 className="mt-3.5 text-[1.6rem] leading-[1.1] font-bold [font-stretch:85%]">
                            {p.name}
                        </h3>
                        <p className="mt-1 text-ink-soft">{p.trait}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default PuppiesList