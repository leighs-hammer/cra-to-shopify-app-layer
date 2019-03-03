/**
 * ##grabRelevantAssets
 * method that grabs the codesplit and built react app manifest and extracts the
 * required assets from it
 * @param {object} config
 * @property {string} path - path to the built folder
 * @returns {object}
 * 
 */
const grabRelevantAssets = (config = {url: ""}) => {

	const compiledPaths = {
		main: "",
		splits: [],
		runtime: ""
	}

	return compiledPaths
}

export default grabRelevantAssets