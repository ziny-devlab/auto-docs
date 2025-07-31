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
  title: "컴포넌트 코드 분석기 | JSX/TSX 자동 문서화",
  description: "React 컴포넌트 코드를 붙여넣으면 props, 사용 예제, 설명을 자동으로 추출해주는 무료 도구입니다. Markdown/Notion 스타일 지원.",
  keywords: [
    "React",
    "컴포넌트",
    "props 추출",
    "자동 문서화",
    "JSX",
    "TSX",
    "Markdown",
    "Notion",
    "코드 분석기",
    "프론트엔드"
  ],
  openGraph: {
    title: "컴포넌트 코드 분석기 | JSX/TSX 자동 문서화",
    description: "React 컴포넌트 코드를 붙여넣으면 props, 사용 예제, 설명을 자동으로 추출해주는 무료 도구입니다.",
    url: "https://your-domain.com", // 실제 배포시 도메인으로 변경
    siteName: "컴포넌트 코드 분석기",
    images: [
      {
        url: "/og-image.png", // public 폴더에 og-image.png를 넣으세요
        width: 1200,
        height: 630,
        alt: "컴포넌트 코드 분석기 대표 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "컴포넌트 코드 분석기 | JSX/TSX 자동 문서화",
    description: "React 컴포넌트 코드를 붙여넣으면 props, 사용 예제, 설명을 자동으로 추출해주는 무료 도구입니다.",
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
