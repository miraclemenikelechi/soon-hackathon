"use client";

import { useTheme } from "next-themes";
import Header from "@/components/header";
import { ReactNode, useEffect } from "react";

export default function Component({ children }: { children: ReactNode }) {
	const { theme, setTheme } = useTheme();

	useEffect(
		function () {
			if (theme) setTheme("dark");
		},
		[setTheme, theme],
	);

	return (
		<section className={`border-4 border-red-600 min-h-screen`}>
			<Header />
			{children}
			<footer>footer</footer>
		</section>
	);
}
