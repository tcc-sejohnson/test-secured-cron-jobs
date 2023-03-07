import { readFileSync, writeFileSync, existsSync } from 'fs';

const crons = [
	{
		path: `/test?securedKey=${process.env.SECRET_KEY}`,
		schedule: '*/1 * * * *'
	}
];

let buildOutput = {};
if (existsSync('./.vercel/output/config.json')) {
	buildOutput = JSON.parse(readFileSync('./.vercel/output/config.json', 'utf8'));
}

buildOutput.crons = crons;

writeFileSync('./.vercel/output/config.json', JSON.stringify(buildOutput, null, 2));
