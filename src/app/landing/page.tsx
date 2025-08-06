import { Header, LandingExample, Title } from "@/components";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <Header />

      <main className="min-h-[calc(100vh-58px)] bg-gradient-to-br from-neutral-100 via-white to-neutral-200 flex flex-col items-center py-12 px-3">
        <Title />

        <Link
          href="/"
          className="px-8 py-3 rounded-xl border border-neutral-300 bg-white text-neutral-700 font-semibold shadow hover:bg-neutral-100 transition text-lg my-5"
        >
          문서화 바로가기
        </Link>

        <LandingExample />
      </main>
    </>
  );
}
