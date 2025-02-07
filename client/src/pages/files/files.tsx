import { Helmet } from 'react-helmet-async';

export const Files = () => {
	return (
		<>
			<Helmet>
				<title>Files - lux's website</title>
				<meta name={'title'} content={"Files - lux's website"} />
				<meta name={'description'} content={"Coming down to look at the ol' archives eh?"} />

				<meta name={'twitter:title'} content={"Files - lux's website"} />
				<meta name={'twitter:description'} content={"Coming down to look at the ol' archives eh?"} />

				<meta property={'og:title'} content={"Files - lux's website"} />
				<meta property={'og:description'} content={"Coming down to look at the ol' archives eh?"} />
			</Helmet>

			<iframe src={'https://files.luxploit.net'} height={450} width={'100%'}></iframe>
		</>
	);
};
