import { LocationProvider, Router, Route } from 'preact-iso';
import { HelmetProvider } from 'react-helmet-async';
import { render } from 'preact';

import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Background } from './components/background/background';

import { Home } from './pages/home/home';
import { _404 } from './pages/_404/_404';

import 'tailwindcss/tailwind.css';
import './index.sass';
import axios from 'axios';

export const App = () => {
	return (
		<HelmetProvider>
			<Background>
				<LocationProvider>
					<div id="container">
						<Header />
						<main>
							<Router>
								<Route path="/" component={Home} />
								<Route default component={_404} />
							</Router>
						</main>
						<Footer />
					</div>
				</LocationProvider>
			</Background>
		</HelmetProvider>
	);
};

export const axiosInst = axios.create({
	baseURL: import.meta.env.DEV ? 'http://localhost:9999' : `${window.location.protocol}//api.luxploit.net`,
});

const rootEl = document.getElementById('root');
if (rootEl.hasChildNodes()) {
	render(<App />, rootEl, rootEl.firstElementChild);
} else {
	render(<App />, rootEl);
}

// export const prerender = async (data) => {
// 	return await ssr(<App {...data} />);
// };
