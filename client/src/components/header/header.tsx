import { LastFM } from '../lastfm/lastfm';
import './header.sass';

export const Header = () => {
	return (
		<div id={'nav'}>
			<header>
				<h1>luxploit.net</h1>
				<nav>
					<span>Places:</span>
					{/* prettier-ignore */}
					<ul>
						<li><a href={"/"}>home</a></li>
						{/* <li><a href={"/files"}>files</a></li> */}
						<li><a href={"/projects"}>projects</a></li>
						{/* <li><a href={"/writings"}>writings</a></li>
						<li><a href={"/socials"}>socials</a></li>
						<li><a href={"/activity"}>activity</a></li> */}
						<li><a href={"/friends"}>friends</a></li>
					</ul>
				</nav>
			</header>
			<LastFM />
		</div>
	);
};
