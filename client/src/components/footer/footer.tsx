import { useEffect } from 'preact/hooks';
import './footer.sass';
import { axiosInst } from '../..';

export const Footer = () => {
	useEffect(() => {
		const fetchWidget = async () => {
			try {
				const response = await axiosInst.get('/js/webring');
				const script = document.createElement('script');
				script.textContent = response.data;
				document.getElementById('fl-right').appendChild(script);
			} catch (err) {
				console.error('failed to fetch webring js');
			}
		};

		fetchWidget(); // call
	}, []);

	return (
		<footer>
			<section id={'copyright'}>
				<span>&copy; Laura Streisky 2022-2025</span>
				<span>
					v{import.meta.env.PKGVERSION} &mdash; <a href={'https://github.com/luxploit/website'}>Source Code</a>
				</span>
				<span>Made with ❤️ and 🏳️‍⚧️ rights</span>
			</section>

			<div id={'fl-right'}>
				<div id={'fl-icons'}>
					<a href="https://hrt.luxploit.net">
						<img src="https://yesterhost.neocities.org/archive/buttons/button174.png" />
					</a>
					<a href="https://spiritonline.net">
						<img src="https://cyber.dabamos.de/88x31/msnexp.gif" />
					</a>
					<img src="https://cyber.dabamos.de/88x31/powered-cpp.gif" />
					<img src="https://cyber.dabamos.de/88x31/amd_powered.gif" />
					<a href="http://www.mabsland.com/Adoption.html">
						<img src="http://www.mabsland.com/Pandas/Censor_Mc.gif" width={88} height={31} />
					</a>
				</div>
			</div>
		</footer>
	);
};
