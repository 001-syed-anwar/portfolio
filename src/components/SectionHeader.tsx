
interface SectionHeaderProps {
    title:string;
    eyebrow:string;
    description:string;
}

export const SectionHeader = ({ description,eyebrow,title}: SectionHeaderProps) => {
    return (
        <>
            <div className="flex justify-center">
                <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
                    {title}
                </p>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">{eyebrow}</h2>
            <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
                {description}
            </p>

        </>

    )
}