import { useEffect } from 'preact/hooks';
import './footer.sass';
import { axiosInst } from '../..';

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
				<a href="https://hrt.luxploit.net">
					<img src="https://yesterhost.neocities.org/archive/buttons/button174.png" />
				</a>
				<img src="https://capstasher.neocities.org/88x31Buttons/firefox3.gif" />
				<img src="https://88by31.neocities.org/pride/trn.png" />
				<a href="https://spiritonline.net">
					<img src="https://cyber.dabamos.de/88x31/msnexp.gif" />
				</a>
				<img src="https://cyber.dabamos.de/88x31/powered-cpp.gif" />
				<img src="https://88x31.kate.pet/hrt-e2.gif" />
				<img src="https://cyber.dabamos.de/88x31/sun.gif" />
				<img src="https://cyber.dabamos.de/88x31/amd_powered.gif" />
				<img src="https://88by31.neocities.org/anime/thirdimpact.png" />
				<a href="http://www.mabsland.com/Adoption.html">
					<img src="http://www.mabsland.com/Pandas/Censor_Mc.gif" width={88} height={31} />
				</a>
			</div>
		</footer>
	);
};
