import {RotateCcw, Search} from "lucide-react";
import {Dispatch, SetStateAction, useRef} from "react";

export default function SearchForm( {filter, setFilter}: {
    filter: string,
    setFilter: Dispatch<SetStateAction<string>>,
} ) {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form className="flex flex-wrap gap-3" role="search">
            <label htmlFor="q" className="sr-only">
                Search puppies by name or trait
            </label>
            <div className="relative min-w-0 flex-[1_1_16rem]">
                <Search
                    className="pointer-events-none absolute top-1/2 left-5 size-5 -translate-y-1/2 text-ink-soft"
                    aria-hidden="true"
                />
                <input
                    ref={inputRef}
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    id="q"
                    type="search"
                    placeholder="Search by name or trait"
                    className="w-full rounded-full border-2 border-ink bg-white py-3 pr-5 pl-12 text-lg"
                />
            </div>
            <button
                onClick={() =>  {
                    setFilter("")
                    inputRef.current?.focus()
                }}
                type="reset"
                className="inline-flex cursor-pointer items-center gap-2 rounded-full px-6 py-3 font-bold inset-ring-2 inset-ring-ink"
            >
                <RotateCcw className="size-4" aria-hidden="true" />
                Reset
            </button>
        </form>
    )
}