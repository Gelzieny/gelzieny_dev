import { HomeAbout } from "@/components/pages/home/about";
import { HeroSection } from "@/components/pages/home/hero-section";

export default function Home() {
	return (
		<main className="ml-[110px]">
			<HeroSection />
			<HomeAbout />
		</main>
	);
}
