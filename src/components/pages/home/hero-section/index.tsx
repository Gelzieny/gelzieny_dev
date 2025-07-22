import Image from "next/image";
import { InfoSection } from "./info_section";
import { ScrollDown } from "@/components/scroll-down";

export function HeroSection() {
	return (
		<section
			className="relative min-h-screen flex items-center justify-center container"
			id="home"
		>
			<div className="grid grid-cols-1 md:grid-cols-2 pt-[5.5rem] gap-x-12 gap-y-8 items-center container justify-between">
				<InfoSection />
				<div className="w-full max-w-[300px] mx-auto ">
					<Image
						src="/img/user.jpeg"
						alt="Foto de perfil de Gelzieny Rezende"
						width={420}
						height={404}
						style={{ borderRadius: "0.75rem" }}
						priority
					/>
				</div>
				<ScrollDown />
			</div>
		</section>
	);
}
