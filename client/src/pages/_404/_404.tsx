import { Helmet } from 'react-helmet-async';
import './_404.sass';

export const _404 = () => {
	return (
		<>
			<Helmet>
				<title>Not found - lux's website</title>
				<meta name={'title'} content={"Not found - lux's website"} />
				<meta name={'description'} content={"The content you're trying to crawl was not found! Whoops..."} />

				<meta name={'twitter:title'} content={"Not found - lux's website"} />
				<meta name={'twitter:description'} content={"The content you're trying to crawl was not found! Whoops..."} />

				<meta property={'og:title'} content={"Not found - lux's website"} />
				<meta property={'og:description'} content={"The content you're trying to crawl was not found! Whoops..."} />
			</Helmet>

			<section id={'_404'}>
				<h1>404: Not Found</h1>
				<p>The content you were looking for could not be found! Whoops...</p>
			</section>
		</>
	);
};
