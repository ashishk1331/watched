export default async function handler(req, res) {
	let { query } = JSON.parse(req.body);

	const tmdb = new (require("tmdbapi"))({
		apiv3: process.env.TMDB_API_KEY,
	});

	let resp = await tmdb.search.movie({ query });

	res.status(200).json(resp);
}
