import Header from "@/components/Header/Header";
import ThemeProvider from "@/components/Providers/ThemeProvider";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
	title: "Next.js Frontend Template",
	icons: {
		icon: "/logo.png",
	},
};

type RootLayoutProps = {
	children: ReactNode;
};

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => {
	return (
		<html
			lang="en"
			suppressHydrationWarning>
			<body className="min-h-screen overflow-x-hidden">
				<ThemeProvider
					attribute={"class"}
					defaultTheme="dark"
					enableSystem={false}>
					<div
						aria-hidden="true"
						className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
						<div className="bg-scroll-track">
							<div className="bg-scroll-panel" />
							<div className="bg-scroll-panel" />
						</div>
					</div>

					<Header />

					<main className="relative z-10 mx-auto max-w-7xl px-6 py-3">
						{children}
					</main>
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
