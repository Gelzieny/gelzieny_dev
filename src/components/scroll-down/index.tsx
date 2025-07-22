import { FaArrowDown } from "react-icons/fa6";

import "./scroll.css";

export function ScrollDown() {
	return (
		<div className="scroll__down">
			<a href="#about" className="mouse__wrapper">
				<span className="home__scroll-name">Scroll Down</span>
				<span className="mouse">
					<span className="well"></span>
				</span>
			</a>
		</div>
	);
}
