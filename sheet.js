const { GoogleSpreadsheet } = require('google-spreadsheet');

module.exports = class Sheet {
	constructor() {
		// Initialize the sheet - doc ID is the long id in the sheets URL
		this.doc = new GoogleSpreadsheet(
			'18NN71314MTmQep4n84X6FRjLvNH1BQTQ-f_5DIHzzso'
		);
	}
	async load() {
		// Initialize Auth - see https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication
		await this.doc.useServiceAccountAuth(require('./credentials.json'));

		await this.doc.loadInfo(); // loads document properties and worksheets
	}
	async addRows(rows) {
		const sheet = this.doc.sheetsByIndex[0]; // or use doc.sheetsById[id] or doc.sheetsByTitle[title]
		await sheet.addRows(rows);
	}
};
