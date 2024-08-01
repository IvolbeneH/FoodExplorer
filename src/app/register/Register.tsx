import Image from "next/image";
import LogoFood from "../../../public/Food.png"
import { Input } from "@/components/Input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Register() {
    return (
        <section className="flex items-center justify-center w-full h-screen">
            <div className="w-4/5 h-[27rem] flex flex-col gap-12">
                <div className="flex items-center justify-center w-full gap-4">
                    <Image src={LogoFood} alt="Logo food explorer" priority />
                    <h1 className="text-3xl font-bold">Food Explorer</h1>
                </div>
                <form className="flex flex-col gap-6">
                    <Input title="Seu nome" type="text" placeholder="Exemplo: Maria Clara" />
                    <Input title="Email" type="email" placeholder="Exemplo: exemplo@exemplo.com.br" />
                    <Input title="Senha" type="password" placeholder="No mínimo 6 caracteres" />
                    <Button type="submit" variant='default' className="font-normal">Criar conta</Button>
                </form>
                <Link href='/login' className="flex items-center justify-center">
                    <Button variant='link' className="text-zinc-200">Já tenho uma conta.</Button>
                </Link>
            </div>
        </section>
    );
};
