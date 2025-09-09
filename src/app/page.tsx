import { Container } from "@/components/container";
import { Inter } from "next/font/google";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl">
          Hello, there
        </h1>
        <p className="text-primary max-w-lg pt-4 text-sm md:text-sm">
          I'm a FullStack Developer with a passion for building scalable and
          efficient systems
        </p>
      </Container>
    </div>
  );
}
