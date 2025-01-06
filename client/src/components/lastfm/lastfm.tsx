import { useEffect, useState } from 'preact/hooks';
import './lastfm.sass';
import axios from 'axios';
import { axiosInst } from '../..';
import { LastFMActivity } from './activity';

export const LastFM = () => {
	const [data, setData] = useState<LastFMActivity>();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchStatus = async () => {
			try {
				const response = await axiosInst.get('/activity/lastfm');
				setData(response.data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchStatus(); // call first time
		setInterval(() => fetchStatus(), 5000);
	}, [setData, setError, setLoading]);

	let state = <></>;

	if (loading) {
		state = (
			<>
				<h2>currently loading</h2>
				<h2>last.fm activity</h2>
			</>
		);
	} else if (error) {
		state = (
			<>
				<h2>unable to retrieve</h2>
				<h2>last.fm activity</h2>
			</>
		);
	} else {
		state = (
			<>
				<h2>{data.nowPlaying ? 'now' : 'last'} playing (last.fm)</h2>
				<a href={data.url}>
					{data.name} by {data.artist}
				</a>
			</>
		);
	}

	return <div id={'lastfm'}>{state}</div>;
};
