"use client";

import { Header } from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, MessageSquare, Rocket, ChartSpline } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen items-center justify-center text-foreground overflow-hidden">
        {/* Background visual */}
        <div className="absolute inset-0">
          <div className="absolute w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        <div className="absolute inset-0">
          <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-gradient-to-br from-blue-500 to-blue-400 opacity-20 rounded-full blur-[180px]" />
          <div className="absolute top-[400px] right-[-150px] w-[500px] h-[500px] bg-gradient-to-tr from-indigo-500 to-indigo-400 opacity-20 rounded-full blur-[160px]" />
        </div>
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center px-6 pt-32 pb-16 md:pt-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-col max-w-3xl space-y-8 px-4"
          >
            <h1 className="font-heading text-6xl font-semibold">
              A plataforma completa para suporte ao cliente com IA confiável
            </h1>
            <p className="font-body text-neutral-400 text-xl">
              Acelere a transformação digital do seu negócio com soluções
              inteligentes e adaptáveis baseadas em IA.
            </p>
            <Button className="px-6 py-3 text-base rounded-sm bg-white text-black hover:bg-neutral-200 transition font-heading">
              Comece agora
              <ArrowRight className="h-4" />
            </Button>
            <div className="pt-[70px] flex justify-center gap-40 font-body font-medium text-sm">
              <div className="flex flex-col items-center justify-center gap-2">
                <MessageSquare className="w-5 h-5" />
                <span className="text-base text-white/70">Omni-channel</span>
                <span className="text-xs text-white/40">
                  Chat, email, phone, social and more
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <Rocket className="w-5 h-5" />
                <span className="text-base text-white/70">Guidance</span>
                <span className="text-xs text-white/40">
                  Setup, integration, escalation
                </span>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <ChartSpline className="w-5 h-5" />
                <span className="text-base text-white/70">Platform</span>
                <span className="text-xs text-white/40">
                  Unified inbox, tickets, evaluation
                </span>
              </div>
            </div>
          </motion.div>
        </section>
        <section className="py-10 px-6 border-t border-neutral-800">
          <div className="max-w-2xl mx-auto text-center font-body text-3xl font-semibold">
            One platform for your support team
            <br />
            and AI support agent
            <div className="mt-4 flex justify-center gap-8 opacity-40">
              <span>Prosperify Icone</span>
              <span>Atemi Icone</span>
              <span>Agente Icone</span>
              <span>Produto Icone</span>
            </div>
          </div>
        </section>
        {/* Features */}
        <section
          className="py-44 px-6 bg-[#121212] backdrop-blur-sm"
          id="produtos"
        >
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-heading md:text-5xl font-semibold mb-6">
              Next-gen quality and efficiency
            </h2>
            <p className="text-neutral-400 max-w-2xl mx-auto mb-16">
              Stop using legacy support platforms that leave customers waiting,
              confused and frustrated. Delight customers with instant, accurate
              AI resolution.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: "Flows Automatizados",
                  desc: "Crie automações complexas em poucos cliques com integração total ao seu stack.",
                },
                {
                  title: "Agentes Inteligentes",
                  desc: "Implante assistentes conversacionais com memória, contexto e execução de tarefas.",
                },
                {
                  title: "Insights Estratégicos",
                  desc: "Transforme dados em decisões com nossa análise preditiva baseada em IA generativa.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-neutral-800/80 backdrop-blur shadow-lg text-left"
                >
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-24 px-6 bg-indigo-950 backdrop-blur-sm text-white text-center">
          <div className="max-w-4xl mx-auto text-center gap-2">
            <h1 className="text-6xl md:text-5xl mb-6 font-heading font-semibold">
              The best results happen when AI & human judgment come together
            </h1>
            <p className="font-body text-white/80 text-xl">
              The best companies are using AI to redefine their markets.
            </p>
            <p className="font-body text-white/80 text-xl">
              Leave your competition behind.
            </p>
          </div>
          <Button className="mt-10 px-6 py-3 text-base rounded-sm bg-white text-black hover:bg-neutral-200 transition font-heading">
            Entrar em contato
            <ArrowRight className="h-4" />
          </Button>
        </section>
        {/* Footer */}
        <footer className="bg-black backdrop-blur-sm border-t border-neutral-800 px-6 py-12 text-neutral-400 text-sm z-50">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-2">
              <Image src="/image.png" alt="Logo" width={24} height={24} />
              <span className="text-white font-semibold">Kornerstone</span>
            </div>
            <div className="flex space-x-6">
              <a href="#produtos" className="hover:text-white transition">
                Produtos
              </a>
              <a href="#" className="hover:text-white transition">
                Sobre
              </a>
              <a href="#" className="hover:text-white transition">
                Contato
              </a>
            </div>
            <p className="text-xs text-neutral-600">
              © {new Date().getFullYear()} Kornerstone. Todos os direitos
              reservados.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
