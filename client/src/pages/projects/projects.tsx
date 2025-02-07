import { Helmet } from 'react-helmet-async';
import { ProgHighlight, ProgType } from '../../components/prog-highlights/prog-highlight';
import './projects.sass';

export const Projects = () => {
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

			<div id={'projects'}>
				<h1>Coding Projects</h1>

				<div id={'gallery'}>
					<section>
						<h3>silverblue</h3>
						<i>A Windows NT inspired OS</i>
						<ul id={'about'}>
							<li>
								Written in 100% <ProgHighlight type={ProgType.Lang_C} text={'C99'} /> for x86_64
							</li>
							<li>
								Licensed under the <ProgHighlight type={ProgType.License_BSD} text={'BSD 3-Clause'} />
							</li>
						</ul>
						<div id={'links'}>
							<ul>
								<li>
									<span>
										Status: <span className={'primary'}>Active (Main)</span>
									</span>
								</li>
								<li>
									<a href={'https://github.com/luxploit/silverblue'}>GitHub Repo</a>
								</li>
							</ul>
						</div>
					</section>

					<section>
						<h3>SpiritOnline</h3>
						<i>Reviving legacy services one at a time</i>
						<ul id={'about'}>
							{/* prettier-ignore */}
							<li>
								Written in <ProgHighlight type={ProgType.Lang_CSharp} text={"C#"} />, {' '}
								powered by <ProgHighlight type={ProgType.Platform_DotNet} text={".NET 8"} />
							</li>
							<li>
								Licensed under the <ProgHighlight type={ProgType.License_BSD} text={'BSD 4-Clause'} />
							</li>
						</ul>
						<summary id={'links'}>
							<ul>
								<li>
									<span>
										Status: <span className={'primary'}>Active (Main)</span>
									</span>
								</li>
								<li>
									<a href={'https://spiritonline.net'}>Website</a>
								</li>
							</ul>
						</summary>
					</section>

					<section>
						<h3>AzureFlare</h3>
						<i>A modern take on doing express</i>
						<ul id={'about'}>
							<li>
								Built with opinions using <ProgHighlight type={ProgType.Lang_TypeScript} text={'TypeScript'} />
							</li>
							<li>
								Licensed under the <ProgHighlight type={ProgType.License_BSD} text={'BSD 4-Clause'} />
							</li>
						</ul>
						<summary id={'links'}>
							<ul>
								<li>
									<span>
										Status: <span className={'active'}>Active</span>
									</span>
								</li>
								<li>
									<a href={'https://github.com/luxploit/silverblue'}>GitHub Repo</a>
								</li>
								<li>
									<a href={'https://npm.im/@lxpt/azureflare'}>NPM</a>
								</li>
							</ul>
						</summary>
					</section>

					<section>
						<h3>Helios</h3>
						<i>when uploading to discord gets too annoying</i>
						<ul id={'about'}>
							<li>
								Simple file uploader, written in <ProgHighlight type={ProgType.Lang_Golang} text={'Go'} />
							</li>
							<li>
								Closed source, runs on <ProgHighlight type={ProgType.OS_DebianLinux} text={'Debian'} />
							</li>
						</ul>
						<summary id={'links'}>
							<ul>
								<li>
									<span>
										Status: <span className={'contributor'}>Contributor</span>
									</span>
								</li>
							</ul>
						</summary>
					</section>

					<section>
						<h3>Remessenger</h3>
						<i>MSN Messenger is so back</i>
						<ul id={'about'}>
							{/* prettier-ignore */}
							<li>
								Unfinished, written in <ProgHighlight type={ProgType.Lang_TypeScript} text={'TypeScript'} />
							</li>
							<li>
								Open source and <ProgHighlight type={ProgType.License_MIT} text={'MIT'} /> Licensed
							</li>
						</ul>
						<summary id={'links'}>
							<ul>
								<li>
									<span>
										Status: <span className={'inactive'}>Inactive</span>
									</span>
								</li>
								<li>
									<a href={'https://github.com/luxploit/remsgr-nextgen'}>GitHub</a>
								</li>
								<li>
									<a href={'https://remsgr.labs.luxploit.net'}>Web Archive</a>
								</li>
							</ul>
						</summary>
					</section>
				</div>
			</div>
		</>
	);
};
