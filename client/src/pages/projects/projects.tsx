import { Helmet } from 'react-helmet-async';
import { ProgHighlight, ProgType } from '../../components/prog-highlights/prog-highlight';
import './projects.sass';

export const Projects = () => {
	return (
		<>
			<Helmet>
				<title>Projects - lux's website</title>
				<meta name={'title'} content={"Projects - lux's website"} />
				<meta name={'description'} content={'List of some of the interesting things i work on occasionally'} />

				<meta name={'twitter:title'} content={"Projects - lux's website"} />
				<meta name={'twitter:description'} content={'List of some of the interesting things i work on occasionally'} />

				<meta property={'og:title'} content={"Projects - lux's website"} />
				<meta property={'og:description'} content={'List of some of the interesting things i work on occasionally'} />
			</Helmet>

			<div id={'projects'}>
				<h1>Coding Projects</h1>

				<div id={'gallery'}>
					{/* SpiritOnline */}
					<section>
						<h3>SpiritOnline</h3>
						<i>Reviving legacy services one at a time</i>
						<ul id={'about'}>
							<li>
								Written purely in <ProgHighlight type={ProgType.Lang_Golang} text={'Golang'} />
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
									<a href={'https://github.com/buffersnow/spiritonline.net'}>Source Code</a>
								</li>
							</ul>
						</summary>
					</section>

					{/* OpenXeChain */}
					<section>
						<h3>OpenXeChain</h3>
						<i>bringing the xdk into the modern era</i>
						<ul id={'about'}>
							<li>
								An OSS toolchain for <ProgHighlight type={ProgType.Platform_Xbox} text={'Xbox 360'} />
							</li>
							<li>
								Licensed under the <ProgHighlight type={ProgType.License_MPL2} text={'MPL-2.0'} />
							</li>
						</ul>
						<summary id={'links'}>
							<ul>
								<li>
									<span>
										Status: <span className={'contributor'}>Contributor</span>
									</span>
								</li>
								<li>
									<a href={'https://github.com/OpenXeChain'}>GitHub Repo</a>
								</li>
							</ul>
						</summary>
					</section>

					{/* silverblue */}
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
										Status: <span className={'inactive'}>Inactive</span>
									</span>
								</li>
								<li>
									<a href={'https://github.com/luxploit/silverblue'}>GitHub Repo</a>
								</li>
							</ul>
						</div>
					</section>

					{/* ctx.quest */}
					<section>
						<h3>ctx.quest</h3>
						<i>wheatly esp go brrr</i>
						{/* prettier-ignore */}
						<ul id={'about'}>
							<li>
								Versatile cheat base built with { ' ' }
								<ProgHighlight type={ProgType.Lang_CPlusPlus} text={'C++'} /> 
							</li>
							<li>
								Targets mainly <ProgHighlight type={ProgType.Misc_SourceEngine} text={"Source Engine"} /> games
							</li>
						</ul>
						<summary id={'links'}>
							<ul>
								<li>
									<span>
										Status: <span className={'inactive'}>Inactive</span>
									</span>
								</li>
							</ul>
						</summary>
					</section>

					{/* Remessenger */}
					<section>
						<h3>Remessenger</h3>
						<i>MSN Messenger is so back</i>
						<ul id={'about'}>
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
										Status: <span className={'shutdown'}>Shutdown</span>
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

					{/* BugShot Roulette */}
					<section>
						<h3>BugShot Roulette</h3>
						<i>BSR inspired Multiplayer Fan-Game</i>
						<ul id={'about'}>
							{/* prettier-ignore */}
							<li>
								Written in <ProgHighlight type={ProgType.Lang_CSharp} text={'C#'} />, {' '}
								powered by <ProgHighlight type={ProgType.Platform_DotNet} text={'.NET 8'} />
							</li>
							<li>
								Open source and <ProgHighlight type={ProgType.License_Apache2} text={'Apache 2'} /> Licensed
							</li>
						</ul>
						<summary id={'links'}>
							<ul>
								<li>
									<span>
										Status: <span className={'contributor'}>Contributor</span>
									</span>
								</li>
								<li>
									<a href={'https://github.com/chrizziderkek/bugshotroulette'}>GitHub</a>
								</li>
							</ul>
						</summary>
					</section>
				</div>
			</div>
		</>
	);
};
