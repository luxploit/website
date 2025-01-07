export interface LastFMActivity {
	artist: string;
	artistUrl: string;
	name: string;
	nowPlaying: boolean;
	url: string;
}

export enum LastFMRequestState {
	Loading,
	Error,
	Updated,
}
