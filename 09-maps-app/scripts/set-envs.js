const { writeFileSync,mkdirSync } = require('fs');

require('dotenv').config();

const rootPath = './src/environments';
const targetPath = `${rootPath}/environments.ts`

const envFileContent =  `
export const environment = {
 mapbox_key: "${process.env['MAPBOX_KEY']}"
};
`;

mkdirSync(rootPath, {recursive:true});

writeFileSync(targetPath, envFileContent);
