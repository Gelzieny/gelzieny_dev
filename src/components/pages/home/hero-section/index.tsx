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
						className="w-[300px] h-[300px] lg:w-[420px] lg:h-[404px] mb-6 lg:mb-0 
							rounded-lg object-cover home_img"
						width={420}
						height={404}
						src="/img/user_prof.png"
						alt="Foto de perfil de Gelzieny Rezende"
					/>
				</div>
				<ScrollDown />
			</div>
		</section>
	);
}
