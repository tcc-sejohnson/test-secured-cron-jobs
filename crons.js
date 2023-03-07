import { readFileSync, writeFileSync, existsSync } from 'fs';

const crons = [
	{
		path: `/test?securedKey=${process.env.SECRET_KEY}`,
		schedule: '*/1 * * * *'
	}
];

let vercelConfig = {};
if (existsSync('./vercel.json')) {
	vercelConfig = JSON.parse(readFileSync('./vercel.json', 'utf8'));
}

vercelConfig.crons = crons;

writeFileSync('./vercel.json', JSON.stringify(vercelConfig, null, 2));
