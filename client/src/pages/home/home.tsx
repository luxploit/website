import { Helmet } from 'react-helmet-async';

import './home.sass';

export const Home = () => {
	return (
		<>
			<Helmet>
				<title>Home - lux's website</title>
				<meta name="title" content="Home - lux's website" />
				<meta name="description" content="Welcome to the home of just another goofy goober <3" />

				<meta name="twitter:title" content="Home - lux's website" />
				<meta name="twitter:description" content="Welcome to the home of just another goofy goober <3" />

				<meta property="og:title" content="Home - lux's website" />
				<meta property="og:description" content="Welcome to the home of just another goofy goober <3" />
			</Helmet>

			<div id="home">
				<section>
					<h1 className={'text-4xl'}>bla bla wip :3</h1>
				</section>

				<div id="girl">
					<h2>hey look its me :3</h2>
					<img src={'/images/Snapchat-1993336738.jpg'}></img>
					<h4>
						more over on <a href="https://www.instagram.com/luxploit/">instagram</a>
					</h4>
				</div>
			</div>
		</>
	);
};
