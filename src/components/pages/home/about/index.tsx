export function HomeAbout() {
	return (
		<section className="about container section" id="about">
			<h2 className="section__title">Sobre Mim</h2>

			<div className="about__container flex flex-col md:flex-row items-center md:items-start gap-8">
				<img
					src="./img/eu.png"
					alt=""
					className=" w-full md:w-1/3 lg:w-1/4 rounded-lg object-cover"
				/>

				<div className="flex-1">
					<p className="leading-relaxed mb-4 text-justify">
						Profissional com mais de 7 anos de experiência em desenvolvimento de
						software, atuando nos setores privado, educacional e público.
						Comecei no SESI/SENAI com projetos voltados à educação e tecnologia.
						Depois, trabalhei como desenvolvedora full stack, usando
						principalmente Python, Django e FastAPI para criar aplicações web e
						APIs, com boas práticas e metodologias ágeis.
					</p>
					<p className="leading-relaxed mb-4 text-justify">
						Fui professora na Universidade Estadual de Goiás no curso de
						Sistemas de Informação, o que contribuiu para minha didática e
						atuação em comunidades técnicas.
					</p>
					<p className="leading-relaxed text-justify">
						Hoje faço parte do Laboratório de Inovação do Estado de Goiás
						(LIGO), onde desenvolvo soluções para o setor público, incluindo
						automações, APIs e projetos com inteligência artificial. Tenho como
						diferencial a atuação versátil entre tecnologia e educação, sempre
						focada em soluções eficientes para a sociedade.
					</p>
					<a
						href="#contact"
						className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white font-semibold 
							px-5 py-3 rounded-md transition-colors duration-300 mt-3"
					>
						Download CV
					</a>
				</div>
			</div>
		</section>
	);
}
