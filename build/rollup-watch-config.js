
// Config file for running Rollup in "watch" mode
// This adds a sanity check to help ourselves to run 'rollup -w' as needed.

// Needed to create files loadable by IE8
import rollupGitVersion from 'rollup-plugin-git-version'

import gitRev from 'git-rev-sync'

const branch = gitRev.branch();
const rev = gitRev.short();

const version = require('../package.json').version + '+' + branch + '.' + rev;

const banner = `
/*
 * Leaflet ${version}, a JS library for interactive maps. http://leafletjs.com
 * (c) 2010-2016 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */

`;

export default {
	format: 'umd',
	name: 'L',
	banner,
	entry: 'src/Leaflet.js',
	dest: 'dist/leaflet-src.js',
	plugins: [
		rollupGitVersion()
	],
	sourceMap: true,
	legacy: true // Needed to create files loadable by IE8
};
