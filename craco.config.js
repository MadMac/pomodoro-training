module.exports = {
	babel: {
			plugins: [
					["@babel/plugin-proposal-decorators", { legacy: true }]
			]
	},
	jest: {
		babel: {
			plugins: [
				["@babel/plugin-proposal-decorators", { legacy: true }]
			]
		}
	}
};
