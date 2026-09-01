import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: '집근처 경매 — 반경 30km 부동산 경매 분석',
  description: '우리 집에서 30km 이내의 아파트, 상가, 토지 등 부동산 경매물건을 찾고 가격과 위험을 비교합니다.',
  openGraph: {
    title: '집근처 경매 — 가까운 경매물건을 한눈에',
    description: '반경 30km 부동산 경매 검색과 분석',
    images: [],
  },
  twitter: {
    card: 'summary_large_image',
    title: '집근처 경매 — 가까운 경매물건을 한눈에',
    description: '반경 30km 부동산 경매 검색과 분석',
    images: [],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
