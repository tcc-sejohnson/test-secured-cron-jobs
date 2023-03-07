import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ url }) => {
	console.log(url.searchParams.get('securedKey'));
	if (url.searchParams.get('securedKey')) {
		return new Response(undefined, { status: 200 });
	} else {
		return new Response(undefined, { status: 401 });
	}
};
