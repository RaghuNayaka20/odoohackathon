import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'dayflow | People operations, in rhythm', description: 'A calm, clear workspace for modern people teams.' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return <html lang="en"><body>{children}</body></html>;
}
