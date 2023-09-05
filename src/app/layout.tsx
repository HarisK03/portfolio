import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Poppins } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

export const metadata = {
	title: "Haris Kamal | Portfolio",
	description: "A portfolio to showcase my projects.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<link
					rel="shortcut icon"
					type="image/png"
					href="favicon.png?"
				/>
			</head>
			<body className={poppins.className}>
				<main>{children}</main>
				<Toaster />
			</body>
		</html>
	);
}
