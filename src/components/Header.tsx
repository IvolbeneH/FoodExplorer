import Image from "next/image";
import LogoFood from "../../public/Food.png"
import { AlignJustify, ReceiptText } from "lucide-react";

export function Header() {
    return (
        <header className="w-full h-28 bg-[#001119] flex items-center justify-between p-6">
            <button>
                <AlignJustify className="w-7 h-7" />
            </button>
            <div className="flex items-center gap-2">
                <Image src={LogoFood} alt="Logo food explorer" />
                <h1 className="text-lg font-bold">Food Explorer</h1>
            </div>
            <button>
                <ReceiptText className="w-7 h-7" />
            </button>
        </header>
    );
};
