import React from 'react';

class Artists extends React.Component {
	render() {
		return (
			<div className="mt-5">
				<h3>Artists</h3>
				{this.props.performers.map((artist) => {
					return <div key={artist.id}>{artist.title}</div>;
				})}
			</div>
		);
	}
}

export default Artists;
