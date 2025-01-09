import { Helmet } from 'react-helmet-async';
import './nsfw.sass';

export const NSFW = () => {
	return (
		<>
			<Helmet>
				<title>NSFW - lux's website</title>
				<meta name="title" content="NSFW - lux's website" />
				<meta name="description" content="Please do not enter this part of the site if you're underage!" />

				<meta name="twitter:title" content="NSFW - lux's website" />
				<meta name="twitter:description" content="Please do not enter this part of the site if you're underage!" />

				<meta property="og:title" content="NSFW - lux's website" />
				<meta property="og:description" content="Please do not enter this part of the site if you're underage!" />
			</Helmet>

			<div id="nsfw">
				<h1>tbd</h1>
			</div>
		</>
	);
};
