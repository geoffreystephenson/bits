import React from 'react';
import fetch from 'isomorphic-fetch';
import Layout from '../components/Layout';
import Artists from '../components/Artists';

const Index = (props) => (
	<Layout>
		<div>
			<h1>Welcome to Bits!</h1>
		</div>
		<Artists performers={props.performers} />
	</Layout>
);

Index.getInitialProps = async function () {
	const res = await fetch(
		'https://www.sixthman.net/api/aloompaartist/id/31361'
	);
	const data = await res.json();

	return {
		performers: data.performers,
	};
};

export default Index;
