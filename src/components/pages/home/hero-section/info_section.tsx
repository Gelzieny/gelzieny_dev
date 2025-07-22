import { SocialMidia } from "@/components/social";

export function InfoSection() {
	return (
		<div className="home_data">
			<h1
				className="mb-5 flex items-center gap-2"
				style={{ fontSize: "var(--h1-font-size)" }}
			>
				Gelzieny R. Martins
				<img
					src="./icons/hand.svg"
					alt="Mãozinha tchau"
					className="tchauzinho w-7 h-7"
				/>
			</h1>

			<h3
				className="home_subtitle"
				style={{
					fontSize: "var(--h3-font-size)",
					fontWeight: 400,
				}}
			>
				Desenvolvedor Full Stack
			</h3>
			<p className="text-justify mb-8">
				Desenvolvedora Fullstack apaixonado por tecnologia, com mais de{" "}
				<span className="font-bold">5 anos de experiência</span> no
				desenvolvimento de soluções completas, desde o backend eficiente até
				interfaces de usuário atraentes e funcionais. Tenho como missão liderar
				equipes técnicas em projetos desafiadores, entregando software de alta
				qualidade. Estou sempre aberta a novas oportunidades que me permitam
				inovar e crescer profissionalmente.
			</p>

			<a
				href="#contact"
				className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold px-5 py-3 rounded-md transition-colors duration-300"
			>
				Entre em contato
				<img
					src="./icons/send.svg"
					alt="Ícone de enviar"
					className="w-5 h-5 filter invert"
				/>
			</a>

			<SocialMidia />
		</div>
	);
}
