"use client";

import { Title } from "@/components";
import Header from "../components/Header";
import HomeForm from "../components/HomeForm";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-58px)] bg-gradient-to-br from-neutral-100 via-white to-neutral-200 flex flex-col items-center py-6 sm:py-8 px-3 overflow-hidden">
        <Title />
        <HomeForm />
      </main>
    </>
  );
}
