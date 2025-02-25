import { Helmet } from 'react-helmet-async';

import './home.sass';
import { calculateMonthDiff } from './date';

export const Home = () => {
	let hrtMonthsPast = calculateMonthDiff(new Date('March 4, 2024'));

	return (
		<>
			<Helmet>
				<title>Home - lux's website</title>
				<meta name={'title'} content={"Home - lux's website"} />
				<meta name={'description'} content={'Welcome to the home of just another goofy goober <3'} />

				<meta name={'twitter:title'} content={"Home - lux's website"} />
				<meta name={'twitter:description'} content={'Welcome to the home of just another goofy goober <3'} />

				<meta property={'og:title'} content={"Home - lux's website"} />
				<meta property={'og:description'} content={'Welcome to the home of just another goofy goober <3'} />
			</Helmet>

			<div id={'home'}>
				<section id={'text'}>
					<span id={'welcome'}>Welcome to my personal home page :3</span>

					<h2>Who am I?</h2>
					<section>
						<p>
							I'm Laura, an <i>almost</i> 20-year-old latina trans girl, who gets a bit too silly
						</p>
						<p>Been living in Germany (in the "Ruhrpott") most of my life, although I'm Brazilian</p>
						<p>
							I go by she/they pronouns, and have been on HRT since March 4th 2024 <span id="hrt">({hrtMonthsPast} months now)</span>
						</p>
					</section>

					<h2>What do I do?</h2>
					<section>
						<p>
							I'm a software engineer, working on quirky and interesting <a href={'/projects'}>projects</a>
						</p>
						<p>
							Additionally I'm an <a href={'https://linktr.ee/cinnamon.sienna'}>adult content creator</a>! Please <span id={'mdni'}>minors, do not interact with it!</span>
						</p>
						<p>
							Besides that I also make shitposts from time to time on <a href={'https://www.youtube.com/@datalynk'}>mine</a> and a{' '}
							<a href={'https://www.youtube.com/@quatering'}>friends</a> channels
						</p>
					</section>

					<h2>Where can you find me?</h2>
					<section>
						<p>
							You can find all of my socials linked over <a href={'/socials'}>here</a>, I'm everywhere :3
						</p>
						<p>
							<a href={'mailto:admin@luxploit.net'}>E-Mail</a> me for general or postmaster inqueries &mdash; it might take a while
						</p>
						<p>I guess this site here is also another place you can always find me at</p>
					</section>

					<div id={'news'}>
						<h4>Here are the latest news:</h4>
						<marquee>
							i'm <i>almost</i> finished with the fucking website, although news are not dynamic yet smd
						</marquee>
					</div>
				</section>

				<div id={'girl'}>
					<h2>hey look its me :3</h2>
					<img src={'/images/me.jpg'} title={"if you say i'm cute you're lying >:3"}></img>
					<h4>
						more over on <a href={'https://www.instagram.com/luxploit/'}>instagram</a>
					</h4>
				</div>
			</div>
		</>
	);
};
