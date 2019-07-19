import { writeFile } from 'fs';
import { argv } from 'yargs';

require('dotenv').config();

const env = argv.environment;

const isProd = env === 'prod';
console.log('env', env);
const targetPath = `./src/environments/environment.ts`;
const envConfigFile = `
export const environment = {
  production: ${isProd},
  accessKeyId: '${process.env.ACCESS_KEY_ID}',
  secretAccessKey: '${process.env.SECRET_ACCESS_KEY}',
  githubToken: '${process.env.GITHUB_TOKEN}'
};`;

writeFile(targetPath, envConfigFile, function ( err ) {
  if (err) {
    console.log(err);
  }
  console.log(`Output generated at ${targetPath}`);
});

