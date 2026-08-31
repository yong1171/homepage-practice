import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: '모아 스튜디오 — 좋은 생각이 보이는 순간',
  description: '브랜드의 본질을 발견하고 기억에 남는 웹 경험으로 만드는 디지털 스튜디오입니다.',
  openGraph: {
    title: '모아 스튜디오 — 좋은 생각이 보이는 순간',
    description: '브랜드의 본질을 웹 경험으로',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: '모아 스튜디오' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: '모아 스튜디오 — 좋은 생각이 보이는 순간',
    description: '브랜드의 본질을 웹 경험으로',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}
