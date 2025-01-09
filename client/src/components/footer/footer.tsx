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

			<div id="fl-header">
				<h3>friends list:</h3>
				<section id="friendslist">
					{/* <a href={'https://lain.ovh/'} data-tooltip={"im so sorry for everything, i hope you'll be happy some day"}>
						lainie
					</a> */}
					<a href={'https://tim.ong/'}>eintim</a>
					<a href={'https://youtube.com/@hs-tc'}>w1aw</a>
					<a href={'https://zeromods.xyz/'} data-tooltip={'enemy rc-xd spotted'}>
						lifix
					</a>
					<a href={'https://nullderef.org/'}>nullderef</a>
					<a href={'https://github.com/chrizziderkek'}>x-man</a>
					<a href={'https://knijn.one/'}>emmaknijn</a>
					<a href={'https://bnyyx.com/'} data-tooltip={'banger alert'}>
						tonnus
					</a>
					<a href={'https://theusualplaces.co.uk/'} data-tooltip={'when you pass msn tv2 the aux cable'}>
						xxbeefydjxx
					</a>
					<a href={'https://riddim-glitch.is-a.dev/'}>riddim_glitch</a>
					<a href={'https://e-z.bio/gabrielle'}>gabrielle</a>
					<a href={'https://wah.moe'}>roscoedawah</a>
					<a href={'https://beacons.ai/synthvex'}>synthvex</a>
					<a href={'https://twitter.com/HerMagistyLina'}>lina</a>
				</section>
			</div>
		</footer>
	);
};
