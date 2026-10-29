import {LoaderCircle, Plus} from "lucide-react";
import useStorePuppy from "../hooks/useStorePuppy.ts";

export default function PuppyForm() {
    const {mutate, isPending, error} = useStorePuppy();
    return (
        <section
            aria-labelledby="add-title"
            className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,18rem),1fr))] gap-x-12 gap-y-8 rounded-4xl bg-ink p-[clamp(1.5rem,5vw,3.5rem)] text-paper"
        >
            <div>
                <h2
                    id="add-title"
                    className="text-[clamp(2rem,5vw,3rem)] leading-none font-bold tracking-[-0.01em] font-stretch-85%"
                >
                    Got a puppy to add?
                </h2>
                <p className="mt-2 max-w-[30ch] text-sky">
                    Give them a name, one habit worth knowing, and a photo.
                </p>
            </div>
            <form className="grid gap-[1.1rem]" onSubmit={(e) => {
                // `action` would reset the form even when the request fails, so handle
                // submit ourselves and reset only on success.
                e.preventDefault()
                const form = e.currentTarget
                mutate(new FormData(form), {onSuccess: () => form.reset()})
            }}>
                <label className="grid gap-1.5 font-semibold">
                    Name
                    <input required={true} type="text" name="name" placeholder="Biscuit" className="rounded-[0.9rem] border-2 border-ink-soft bg-transparent px-4 py-3 placeholder:text-[#8b97b3] focus-visible:outline-ball" />
                </label>
                <label className="grid gap-1.5 font-semibold">
                    Trait
                    <input
                        required={true}
                        type="text"
                        name="trait"
                        placeholder="Steals socks, returns them wet"
                        className="rounded-[0.9rem] border-2 border-ink-soft bg-transparent px-4 py-3 placeholder:text-[#8b97b3] focus-visible:outline-ball"
                    />
                </label>
                <label className="grid gap-1.5 font-semibold">
                    Photo link
                    <input required={true} type="file" name="image_url" placeholder="" className="rounded-[0.9rem] border-2 border-ink-soft bg-transparent px-4 py-3 placeholder:text-[#8b97b3] focus-visible:outline-ball" />
                </label>
                <button
                    disabled={isPending}
                    type="submit"
                    className="inline-flex cursor-pointer items-center gap-2 justify-self-start rounded-full bg-ball px-6 py-3 font-bold text-ink focus-visible:outline-ball"
                >
                    {isPending ? <LoaderCircle className="size-5 animate-spin" /> : <Plus className="size-5" aria-hidden="true" />}
                    Add puppy
                </button>
                {error && <p className="text-red-600">{error.message}</p>}
            </form>
        </section>
    )
}