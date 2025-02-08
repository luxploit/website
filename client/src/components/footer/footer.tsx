import './footer.sass';

export const Footer = () => {
	return (
		<footer>
			<section id={'copyright'}>
				<span>&copy; Laura Streisky 2022-2025</span>
				<span>
					v{import.meta.env.PKGVERSION} &mdash; <a href={'https://github.com/luxploit/website'}>Source Code</a>
				</span>
				<span>Made with ❤️ and 🏳️‍⚧️ rights</span>
			</section>

			<div id={'fl-header'}>
				<h3>todo: fill this space with something</h3>
			</div>
		</footer>
	);
};
