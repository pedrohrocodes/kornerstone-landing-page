"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-6 left-6 right-6 z-50 backdrop-blur-lg rounded-xl px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-3">
          <Image src="/image.png" alt="Logo" width={32} height={32} />
          <span className="text-white font-semibold text-lg">Kornerstone</span>
          <nav className="hidden md:flex items-start space-x-6 text-base text-neutral-300 pl-10">
            <a href="#produtos" className="hover:text-white transition">
              Produtos
            </a>
            <a href="#" className="hover:text-white transition">
              Sobre
            </a>
            <a href="#" className="hover:text-white transition">
              Contato
            </a>
          </nav>
        </div>
        <Button className="px-6 py-2 text-sm rounded-sm bg-white text-black hover:bg-neutral-200 transition font-heading ">
          Comece agora
          <ArrowRight className="h-4" />
        </Button>
      </div>
    </header>
  );
}
