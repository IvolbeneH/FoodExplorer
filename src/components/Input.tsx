interface InputProps {
    title: string
    type: string
    placeholder: string
}

export function Input({ title, type, placeholder }: InputProps) {
    return (
        <div className="flex gap-1 flex-col w-full">
            <label htmlFor="" className="text-zinc-300 text-sm">{title}</label>
            <input type={type} className="bg-[#0D1D25] placeholder:text-zinc-400 text-zinc-200 placeholder:text-sm placeholder:opacity-70 rounded-lg p-3" placeholder={placeholder} />
        </div>
    );
};
