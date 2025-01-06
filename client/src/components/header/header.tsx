import { LastFM } from '../lastfm/lastfm';
import './header.sass';

export const Header = () => {
	return (
		<div id="nav">
			<nav>
				<h1>luxploit.net</h1>
				<section>
					<span>Places:</span>
					{/* prettier-ignore */}
					<ul>
						<li><a href={"/"}>home</a></li>
						<li><a href={"/files"}>files</a></li>
						<li><a href={"/projects"}>projects</a></li>
						<li><a href={"/guestbook"}>guestbook</a></li>
						<li><a href={"/activity"}>activity</a></li>
						<li><a href={"/nsfw"}>nsfw</a></li>
					</ul>
				</section>
			</nav>
			<LastFM />
		</div>
	);
};
