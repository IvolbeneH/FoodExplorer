import Image from "next/image";
import LogoFood from "../../../public/Food.png"
import { Input } from "@/components/Input";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Login() {
    return (
        <section className="flex items-center justify-center w-full h-screen">
            <div className="w-4/5 h-[27rem] flex flex-col gap-12">
                <div className="flex items-center justify-center w-full gap-4">
                    <Image src={LogoFood} alt="Logo food explorer" priority />
                    <h1 className="text-3xl font-bold">Food Explorer</h1>
                </div>
                <form className="flex flex-col gap-8">
                    <Input title="Email" type="email" placeholder="Exemplo: exemplo@exemplo.com.br" />
                    <Input title="Senha" type="password" placeholder="No mínimo 6 caracteres" />
                    <Button type="submit" variant='default' className="font-normal">Entrar</Button>
                </form>
                <Link href='/register' className="flex items-center justify-center">
                    <Button variant='link' className="text-zinc-200">Criar uma conta</Button>
                </Link>
            </div>
        </section>
    );
};
