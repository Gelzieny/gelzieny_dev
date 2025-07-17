import { FaCopyright } from "react-icons/fa";
import { NavLink } from "../nav_link";

const navItems = [
	{ href: "#home", iconClass: "icon-home" },
	{ href: "#about", iconClass: "icon-user-following" },
	{ href: "#services", iconClass: "icon-briefcase" },
	{ href: "#resume", iconClass: "icon-graduation" },
	{ href: "#portfolio", iconClass: "icon-layers" },
	{ href: "#blog", iconClass: "icon-note" },
	{ href: "#contact", iconClass: "icon-bubble" },
];

export function Sidebar() {
	const currentYear = new Date().getFullYear();

	return (
		<aside className="fixed top-0 left-0 bg-[var(--body-color)] border-r border-[1px] border-solid border-black/5 p-10 w-[110px] min-h-screen flex flex-col justify-between z-10 items-center">
			<a href="#" className="nav__logo">
				<img src="./icons/logo.svg" alt="logo" />
			</a>
			<nav className="nav">
				<div className="nav__menu">
					<ul className="flex flex-col gap-4">
						{navItems.map(({ href, iconClass }) => (
							<NavLink key={href} href={href} iconClass={iconClass} />
						))}
					</ul>
				</div>
			</nav>
			{/* Adiciona margem inferior ao footer */}
			<div className="nav__footer">
				<span
					className="text-[hsl(245,15%,65%)] text-[var(--small-font-size)] -rotate-180 [writing-mode:vertical-rl]"
					style={{ display: "inline-flex", alignItems: "center", gap: 4 }}
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						fill="currentColor"
						viewBox="0 0 16 16"
						aria-hidden="true"
					>
						<path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm0 1.5a6.5 6.5 0 1 1 0 13A6.5 6.5 0 0 1 8 1.5zM6.5 4a2.5 2.5 0 1 0 0 5h1a1 1 0 0 1 0 2h-1a4 4 0 1 1 0-8h1a1 1 0 0 1 0 2h-1z" />
					</svg>
					{currentYear}
				</span>
			</div>
		</aside>
	);
}
