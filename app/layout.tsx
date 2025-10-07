import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Santiago Fragozo - Developer',
	description:
		'¡Bienvenido a mi portafolio! Soy un desarrollador apasionado que cree en la simplicidad y la efectividad. Me enfoco en crear soluciones directas que resuelvan problemas reales, con código limpio y experiencias de usuario intuitivas.',
	keywords: [
		'Desarrollador de Software',
		'Desarrollador Web',
		'Código Limpio',
		'Diseño Simple',
		'JavaScript',
		'TypeScript',
		'React',
		'Next.js',
		'Experiencia de Usuario',
		'Resolución de Problemas',
		'Soluciones Efectivas',
		'Desarrollo Web',
		'Desarrollo Frontend',
		'Desarrollo Backend',
		'Santiago Fragozo',
	],
	authors: [{ name: 'Santiago Fragozo' }],
	creator: 'Santiago Fragozo',
	openGraph: {
		title: 'Santiago Fragozo - Developer Portfolio',
		description: 'Desarrollador apasionado creando soluciones simples y efectivas. Explora mis proyectos y enfoque de desarrollo.',
		url: 'https://your-domain.com',
		siteName: 'Santiago Fragozo - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: 'Santiago Fragozo - Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: '[Your Name] - Developer',
		description: 'Desarrollador apasionado creando soluciones simples y efectivas. Explora mis proyectos y enfoque de desarrollo.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="es">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
