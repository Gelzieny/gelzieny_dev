export function SocialMidia() {
	return (
		<div className="social flex gap-4 pt-6">
			<a
				href="www.linkedin.com/in/gelzieny"
				target="_blank"
				rel="noopener noreferrer"
				className="transition-transform duration-300 hover:scale-110 hover:opacity-80"
			>
				<img src="/icons/linkedin.svg" alt="LinkedIn" className="w-10 h-10" />
			</a>
			<a
				href="https://www.instagram.com/gelzieny/"
				target="_blank"
				rel="noopener noreferrer"
				className="transition-transform duration-300 hover:scale-110 hover:opacity-80"
			>
				<img src="/icons/instagram.svg" alt="Instagram" className="w-10 h-10" />
			</a>
			<a
				href="https://github.com/gelzieny"
				target="_blank"
				rel="noopener noreferrer"
				className="transition-transform duration-300 hover:scale-110 hover:opacity-80"
			>
				<img src="/icons/github.svg" alt="GitHub" className="w-10 h-10" />
			</a>
		</div>
	);
}
