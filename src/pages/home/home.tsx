import { Helmet } from 'react-helmet-async';

import './home.sass';

export const Home = () => {
	return (
		<>
			<Helmet>
				<title>Home - lux's website</title>
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
