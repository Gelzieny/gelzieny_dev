type NavItem = {
	href: string;
	iconClass: string;
};

export function NavLink({ href, iconClass }: NavItem) {
	return (
		<li className="nav__item">
			<a
				href={href}
				className="text-2xl text-[var(--title-color)] font-bold transition-colors duration-300 hover:text-purple-500"
			>
				<i className={iconClass}></i>
			</a>
		</li>
	);
}
