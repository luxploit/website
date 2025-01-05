import { Helmet } from 'react-helmet-async';

export const Home = () => {
	return (
		<>
			<Helmet>
				<title>Home - lux's website</title>
			</Helmet>

			<div id="home"></div>
		</>
	);
};
