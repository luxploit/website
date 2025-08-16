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
					{/* <a href={'https://ambraglow.org'} data-tooltip={'omg dog wifey :333333333'}>ambraglow</a> */}
					<a href={'https://tim.ong/'} data-tooltip={'cmake propaganda spreader'}>eintim</a>
					<a href={'https://zeromods.xyz/'} data-tooltip={'enemy rc-xd spotted'}>lifix</a>
					<a href={'https://nullderef.org/'} data-tooltip={'schrödingers pointer'}>nullderef</a>
					<a href={'https://github.com/chrizziderkek'} data-tooltip={'laoganma laoganma laoganma'}>x-man</a>
					<a href={'https://ntauthority.me/'} data-tooltip={'meowing into the future!!!'}>ntauthority</a>
					<a href={'https://bnyyx.com/'} data-tooltip={'banger alert'}>tonnus</a>
					<a href={'https://hiden.cc/'} data-tooltip={'crosstalk? more like data interference'}>hiden</a>
					<a href={'https://itsvic.dev/'}>vic</a>
					<a href={'https://bsky.app/profile/wificable.bsky.social'}>wificable</a>
					{/* <a href={'https://github.com/localcc'} data-tooltip={'Chinese fent ported from Canada'}>localcc</a> */}
					<a href={'https://bsky.app/profile/kttl.su'} data-tooltip={'scooter go brrbrr'}>nikki</a>
					<a href={'https://riddim-glitch.is-a.dev/'}>riddim_glitch</a>
					<a href={'https://bsky.app/profile/julithing.bsky.social'}>julithing</a>
					<a href={'https://wamwoowam.co.uk/'} data-tooltip={'the windows phone rizzler'}>wamwoowam</a>
					<a href={'https://theusualplaces.co.uk/'} data-tooltip={'when you pass msn tv2 the aux cable'}>xxbeefydjxx</a>
					<a href={'https://steamcommunity.com/id/g_ii/'}>gabrielle</a>
					<a href={'https://www.youtube.com/channel/UCUpqNyHBbVMRFXcJGk5_VLw'}>snazzyfoxes</a>
					<a href={'https://github.com/ToadetteHackFan'}>toadettehackfan</a>
					<a href={'https://wah.moe'}>roscoedawah</a>
					<a href={'https://0xarya.gay'}>crimier</a>
					<a href={'https://steamcommunity.com/id/icefishi/'}>icefish99</a>
					<a href={'https://github.com/ahmed605'}>ahmedwalid</a>
					<a href={'https://web.flirb.net/profile.php?username=usb'}>usb</a>
					<a href={'https://twitter.com/HerMagistyLina'}>lina</a>
					<a href={'https://github.com/HAZE31337/'}>haze</a>
					<a href={'https://www.averymt.dev/'}>averymt</a>
					<a href={'https://aidenisik.scot/'} data-tooltip={'point and laugh at this gcc user'}>aidenisik</a>
					<a href={'https://toxidation.com/'} data-tooltip={'when the entire bloodline is built using vb6'}>toxidation</a>
					<a href={'https://nsg650.github.io/'} data-tooltip={'bruhlaris'}>nsg650</a>
					<a href={'https://pdawg-bytes.github.io/'} data-tooltip={'ppdawg uefi perc'}>pdawg</a>
				</section>
			</div>
		</>
	);
};
