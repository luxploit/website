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
				<h3>friends list:</h3>

				{/* prettier-ignore */}
				<section id="friendslist">
					<a href={'https://analogfeelings.github.io/'} data-tooltip={'i love you so much nora <3'}>analogfeelings</a>
					<a href={'https://tim.ong/'} data-tooltip={'cmake propaganda spreader'}>eintim</a>
					<a href={'https://youtube.com/@hs-tc'} data-tooltip={'skibidi rizzler <3'}>w1aw</a>
					<a href={'https://zeromods.xyz/'} data-tooltip={'enemy rc-xd spotted'}>lifix</a>
					<a href={'https://nullderef.org/'}>nullderef</a>
					<a href={'https://github.com/chrizziderkek'}>x-man</a>
					<a href={'https://knijn.one/'}>emmaknijn</a>
					<a href={'https://bnyyx.com/'} data-tooltip={'banger alert'}>tonnus</a>
					<a href={'https://hiden.cc/'}>hiden</a>
					<a href={'https://bassusteur.github.io/'}>si5351</a>
				</section>

				{/* prettier-ignore */}
				<section id="friendslist">
					<a href={'https://riddim-glitch.is-a.dev/'}>riddim_glitch</a>
					<a href={'https://theusualplaces.co.uk/'} data-tooltip={'when you pass msn tv2 the aux cable'}>xxbeefydjxx</a>
					<a href={'https://e-z.bio/gabrielle'}>gabrielle</a>
					<a href={'https://wah.moe'}>roscoedawah</a>
					<a href={'https://beacons.ai/synthvex'}>synthvex</a>
					<a href={'https://twitter.com/HerMagistyLina'}>lina</a>
					<a href={'https://toxidation.com/'}>toxidation</a>
					<a href={'https://nsg650.github.io/'}>nsg650</a>
					<a href={'https://pdawg-bytes.github.io/'}>pdawg</a>
				</section>
			</div>
		</footer>
	);
};
