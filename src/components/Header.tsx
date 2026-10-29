import {PawPrint} from "lucide-react";
export default function Header() {
    return (
        <header className="bg-ball px-4 pt-[clamp(2.5rem,7vw,5rem)] pb-[clamp(2rem,5vw,3.5rem)] sm:px-[clamp(1rem,5vw,4rem)]">
            <h1 className="text-[clamp(4rem,17vw,12rem)] leading-[0.85] font-extrabold tracking-[-0.03em] font-stretch-75%">
                Litter Box
            </h1>
            <p className="mt-6 flex max-w-[34ch] items-start gap-3 text-xl font-medium">
                <PawPrint className="mt-1 size-6 shrink-0" aria-hidden="true" />
                Eight puppies, one couch. Find the one whose habits match yours.
            </p>
        </header>
    )
}