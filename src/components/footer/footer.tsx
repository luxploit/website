import './footer.sass';

export const Footer = () => {
	return (
		<footer>
			<section id="copyright">
				<span>&copy; Laura Streisky 2022-2025</span>
				<span>
					v{import.meta.env.PKGVERSION} &mdash; <a href="https://github.com/luxploit/website">Source Code</a>
				</span>
				<span>Made with ❤️ and 🏳️‍⚧️ rights</span>
			</section>

			<section id="friendslist">
				<h1>todo add something here</h1>
			</section>
		</footer>
	);
};
