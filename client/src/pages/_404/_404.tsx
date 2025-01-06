import { Helmet } from 'react-helmet-async';
import './_404.sass';

export const _404 = () => {
	return (
		<>
			<Helmet>
				<title>Not found - lux's website</title>
				<meta name="description" content="The content you're trying to crawl was not found! Whoops..." />
			</Helmet>
			<section id="_404">
				<h1>404: Not Found</h1>
				<p>The content you were looking for could not be found! Whoops...</p>
			</section>
		</>
	);
};
