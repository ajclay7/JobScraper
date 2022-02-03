const Sheet = require('./sheet');
const fetch = require('node-fetch');

(async function () {
	const res = await fetch('https://remotive.io/api/remote-jobs');
	const json = await res.json();

	const rows = json.jobs.map((job) => {
		return {
			company: job.company_name,
			title: job.title,
			location: job.candidate_required_location,
			date: job.publication_date,
			url: job.url,
		};
	});

	// Sort by dates newest to oldest
	// filter for specific jobs

	const sheet = new Sheet();
	await sheet.load();

	await sheet.addRows(rows);
})();
