import { useEffect, useState } from 'preact/hooks';
import { axiosInst } from '../..';
import { LastFMActivity, LastFMRequestState } from './activity';

import './lastfm.sass';

export const LastFM = () => {
	const [data, setData] = useState<LastFMActivity>();
	const [reqState, setReqState] = useState(LastFMRequestState.Loading);

	useEffect(() => {
		const fetchStatus = async () => {
			try {
				const response = await axiosInst.get('/activity/lastfm');
				setData(response.data);
			} catch (err) {
				setReqState(LastFMRequestState.Error);
			} finally {
				setReqState(LastFMRequestState.Updated);
			}
		};

		fetchStatus(); // call first time
		setInterval(() => fetchStatus(), 5000);
	}, [setData, setReqState]);

	let state = <></>;

	switch (reqState) {
		case LastFMRequestState.Loading:
			state = (
				<>
					<h2>currently loading</h2>
					<h2>last.fm activity</h2>
				</>
			);
			break;
		case LastFMRequestState.Updated:
			state = (
				<>
					<h2>{data.nowPlaying ? 'now' : 'last'} playing (last.fm)</h2>
					<section id="name">
						<a id="songname" href={data.url}>
							{data.name}
						</a>
						<span>by</span>
						<a href={data.artistUrl}>{data.artist}</a>
					</section>
				</>
			);
			break;
		case LastFMRequestState.Error:
		default:
			state = (
				<>
					<h2>unable to retrieve</h2>
					<h2>last.fm activity</h2>
				</>
			);
	}

	return <div id={'lastfm'}>{state}</div>;
};
