import type { Metadata } from "next";
import { Geist, Geist_Mono, Rubik } from "next/font/google";

import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import "../../node_modules/simple-line-icons/css/simple-line-icons.css";

const geistRubik = Rubik({
	variable: "--font-rubik",
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${geistRubik.variable} antialiased`}>
				<Sidebar />
				{children}
			</body>
		</html>
	);
}
