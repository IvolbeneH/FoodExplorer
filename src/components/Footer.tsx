import Image from "next/image";
import FoodBlack from "../../public/FoodBlack.png"

export function Footer() {
    return (
        <footer className="mt-auto bg-[#00111A] py-[30px] px-7 flex items-center gap-6">
            <div className="flex items-center gap-1">
                <Image src={FoodBlack} alt="Logo food cinza" />
                <span className="text-zinc-400 text-xs">Food Explorer</span>
            </div>
            <span className="text-xs font-extralight">© 2023 - Todos os direitos reservados.</span>
        </footer>
    );
};
