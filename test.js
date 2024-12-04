import { getLyrics, getSong } from 'genius-lyrics-api';

const options = {
	apiKey:'DWAdBHUpJyUooli7sfxnjbWLB7I6mBRKcS0T0GpTV4zR9JJFSbHFOMXtJWGz6t6Z',
	title: 'Posthumous Forgiveness',
	artist: 'Tame Impala',
	optimizeQuery: true
};

getLyrics(options).then((lyrics) => console.log(lyrics));

getSong(options).then((song) =>
	console.log(`${song.id} - ${song.title} - ${song.url} - ${song.albumArt} - ${song.lyrics}`)
);