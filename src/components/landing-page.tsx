"use client";

import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import {
  CheckCircle,
  Brain,
  Wrench,
  MessageSquare,
  Rocket,
  Shield,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuHeight, setMenuHeight] = useState(0);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (isMenuOpen) {
      const menuElement = document.getElementById("mobile-menu");
      if (menuElement) {
        setMenuHeight(menuElement.scrollHeight);
      }
    } else {
      setMenuHeight(0);
    }
  }, [isMenuOpen]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        <header className="h-14 flex items-center justify-between">
          <Link className="flex items-center justify-center" href="#">
            <Brain className="h-6 w-6 mr-2" />
            <span className="font-bold">AI for Decision Makers</span>
          </Link>
          <nav className="hidden md:flex gap-4 sm:gap-6">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#about"
            >
              Sobre
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#learning"
            >
              Aprendizado
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#enroll"
            >
              Inscreva-se
            </Link>
          </nav>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>
      </div>
      <div
        id="mobile-menu"
        className="md:hidden bg-white shadow-lg overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{ maxHeight: `${menuHeight}px` }}
      >
        <nav className="flex flex-col items-center py-4">
          <Link
            className="w-full text-center py-2 hover:bg-gray-100 text-black"
            href="#about"
            onClick={toggleMenu}
          >
            Sobre
          </Link>
          <Link
            className="w-full text-center py-2 hover:bg-gray-100 text-black"
            href="#learning"
            onClick={toggleMenu}
          >
            Aprendizado
          </Link>
          <Link
            className="w-full text-center py-2 hover:bg-gray-100 text-black"
            href="#enroll"
            onClick={toggleMenu}
          >
            Inscreva-se
          </Link>
        </nav>
      </div>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  AI for Decision Makers
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Transforme decisões estratégicas em resultados impactantes com
                  o poder da Inteligência Artificial
                </p>
              </div>
              <div className="space-x-4">
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  <Link href="#enroll">Inscreva-se Agora</Link>
                </Button>
                <Button
                  variant="outline"
                  asChild
                  className="bg-transparent text-white border-white hover:bg-white hover:text-black transition-colors"
                >
                  <Link href="#">Saiba Mais</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
              Sobre o Curso
            </h2>
            <p className="mt-4 max-w-[700px] text-gray-700 md:text-xl">
              O curso &quot;AI for Decision Makers&quot; é uma imersão prática
              que capacita líderes e executivos a navegar e dominar o mundo da
              IA, trazendo as melhores práticas diretamente para o seu negócio.
            </p>
          </div>
        </section>
        <section id="learning" className="w-full py-12 md:py-24 lg:py-32">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
              O que você aprenderá
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Brain className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">
                    Fundamentos da IA e Estratégias &quot;AI First&quot;
                  </h3>
                  <p className="text-gray-700">
                    Compreenda o panorama atual e futuro da IA generativa e
                    aprenda a integrar uma mentalidade &quot;AI First&quot; na
                    sua tomada de decisões.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Wrench className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">
                    Ferramentas de IA para Executivos
                  </h3>
                  <p className="text-gray-700">
                    Explore mais de 20 ferramentas de IA que aumentam a
                    produtividade e fornecem insights valiosos para decisões
                    rápidas e eficazes.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <MessageSquare className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">
                    Prompt Engineering para Líderes
                  </h3>
                  <p className="text-gray-700">
                    Domine as técnicas para construir prompts que maximizam a
                    interação e eficácia com modelos de linguagem avançados.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Rocket className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">
                    Jornada de Aplicação de IA na Sua Empresa
                  </h3>
                  <p className="text-gray-700">
                    Aprenda a identificar os primeiros casos de uso de IA na sua
                    organização e a criar um plano de ação estratégico para
                    implementação.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Shield className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">
                    Estratégias de Risco e Mitigação
                  </h3>
                  <p className="text-gray-700">
                    Prepare-se para mitigar riscos e desafios ao adotar IA,
                    incluindo cibersegurança e privacidade de dados.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <CheckCircle className="h-12 w-12 text-primary" />
                  <h3 className="text-xl font-bold">
                    Recursos Exclusivos e Certificação
                  </h3>
                  <p className="text-gray-700">
                    Acesso a um ambiente seguro para testar prompts, apoio de um
                    &quot;AI Tutor&quot; e certificação pela Compute Capital
                    Academy.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="enroll"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                  Transforme sua visão em ação
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
                  Inscreva-se agora e lidere com IA! Este curso é o seu próximo
                  passo para entender os fundamentos da IA, aplicar as melhores
                  ferramentas e técnicas, e liderar a transformação digital com
                  segurança e eficiência.
                </p>
              </div>
              <Button
                size="lg"
                asChild
                className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Link href="#">Inscreva-se Agora</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <div className="max-w-[1280px] mx-auto w-full px-4 sm:px-6 lg:px-8">
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center border-t">
          <p className="text-xs text-center">
            © 2023 AI for Decision Makers. Todos os direitos reservados.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Termos de Serviço
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Política de Privacidade
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  );
}
