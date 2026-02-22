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
			<body className="min-h-screen bg-[url('/images/bg/light.jpg')] bg-cover bg-center bg-no-repeat dark:bg-[url(/'images/bg-dark.jpg')]">
				<ThemeProvider
					attribute={"class"}
					defaultTheme="dark"
					enableSystem={false}>
					<Header />

					<main className="mx-auto max-w-7xl px-6 py-3">{children}</main>
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
