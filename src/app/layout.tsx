import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "코드 자동 문서화 도구",
  description: "함수, 클래스, 컴포넌트 등 어떤 코드든 붙여넣으면 자동으로 문서와 예제를 만들어주는 무료 도구입니다. Markdown/Notion 스타일 지원.",
  keywords: [
    "코드 문서화",
    "자동 독스",
    "함수 설명",
    "클래스 설명",
    "코드 예제",
    "Markdown",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "JavaScript",
    "ES6",
    "Notion",
    "프로그래밍",
    "개발자 도구",
    "코드 분석기"
  ],
  openGraph: {
    title: "코드 자동 문서화 도구",
    description: "함수, 클래스, 컴포넌트 등 어떤 코드든 붙여넣으면 자동으로 문서와 예제를 만들어주는 무료 도구입니다.",
    url: "https://auto-docs2.vercel.app",
    siteName: "코드 자동 문서화 도구",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "코드 자동 문서화 대표 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "코드 자동 문서화 도구",
    description: "함수, 클래스, 컴포넌트 등 어떤 코드든 붙여넣으면 자동으로 문서와 예제를 만들어주는 무료 도구입니다.",
    images: ["/og-image.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
