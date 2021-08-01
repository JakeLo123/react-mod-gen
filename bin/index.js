#!/usr/bin/env node

const shell = require('shelljs');

const arguments = process.argv.slice(2);

const [dirName, feature, pathToDir] = arguments;

const featureFileName = `${dirName}.${feature}.js`;

const indexContent = `export { default } from './${dirName}.${feature}';`;
const featureContent = `/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import PropTypes from 'prop-types';

${dirName}.PropTypes = {};

function ${dirName}() {
  // write some code 🍔
}

const rootStyle = css;

export default ${dirName};
`;

if (pathToDir) {
  shell.cd(pathToDir);
}

shell.mkdir(dirName);
shell.cd(dirName);
shell.touch(['index.js', featureFileName]);
shell.exec(`cat << EOF >> index.js
${indexContent}
EOF`);
shell.exec(`cat << EOF >> ${featureFileName}
${featureContent}
EOF`);
