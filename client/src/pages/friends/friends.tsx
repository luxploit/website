import { Helmet } from 'react-helmet-async';
import './friends.sass';

export const Friends = () => {
	return (
		<>
			<Helmet>
				<title>Friends - lux's website</title>
				<meta name={'title'} content={"Friends - lux's website"} />
				<meta name={'description'} content={'friends list and generally cool people to check out'} />

				<meta name={'twitter:title'} content={"Friends - lux's website"} />
				<meta name={'twitter:description'} content={'friends list and generally cool people to check out'} />

				<meta property={'og:title'} content={"Friends - lux's website"} />
				<meta property={'og:description'} content={'friends list and generally cool people to check out'} />
			</Helmet>

			<div id={'friends'}>
				<h3>friends list (temp):</h3>

				{/* prettier-ignore */}
				<section id="friendslist">
					<a href={'https://ambraglow.org'} data-tooltip={'omg cat wifey :333333333'}>ambraglow</a>
					<a href={'https://tim.ong/'} data-tooltip={'cmake propaganda spreader'}>eintim</a>
					<a href={'https://youtube.com/@hs-tc'} data-tooltip={'skibidi rizzler <3'}>w1aw</a>
					<a href={'https://zeromods.xyz/'} data-tooltip={'enemy rc-xd spotted'}>lifix</a>
					<a href={'https://nullderef.org/'}>nullderef</a>
					<a href={'https://github.com/chrizziderkek'} data-tooltip={'laoganma laoganma laoganma'}>x-man</a>
					<a href={'https://knijn.one/'}>emmaknijn</a>
					<a href={'https://bnyyx.com/'} data-tooltip={'banger alert'}>tonnus</a>
					<a href={'https://hiden.cc/'}>hiden</a>
					<a href={'https://marvinf.com/'}>ma_rv</a>
					<a href={'https://itsvic.dev/'}>vic</a>
					<a href={'https://riddim-glitch.is-a.dev/'}>riddim_glitch</a>
					<a href={'https://theusualplaces.co.uk/'} data-tooltip={'when you pass msn tv2 the aux cable'}>xxbeefydjxx</a>
					<a href={'https://e-z.bio/gabrielle'}>gabrielle</a>
					<a href={'https://wah.moe'}>roscoedawah</a>
					<a href={'https://beacons.ai/synthvex'}>synthvex</a>
					<a href={'https://twitter.com/HerMagistyLina'}>lina</a>
					<a href={'https://toxidation.com/'} data-tooltip={'when the entire bloodline is built using vb6'}>toxidation</a>
					<a href={'https://nsg650.github.io/'} data-tooltip={'bruhlaris'}>nsg650</a>
					<a href={'https://pdawg-bytes.github.io/'} data-tooltip={'ppdawg uefi perc'}>pdawg</a>
					<a href={'https://unixgirl.hs.vc'}>averageun1xgirl</a>
					<a href={'https://analogfeelings.github.io/'} data-tooltip={'lynette feet reactor'}>analogfeelings</a>
				</section>
			</div>
		</>
	);
};
