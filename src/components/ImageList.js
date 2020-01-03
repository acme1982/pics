import React from 'react';

const ImageList = props => {
	const image = props.images.map(({ id, urls, description }) => {
		return <img key={id} alt={description} src={urls.regular} />;
	});
	return <div>{image}</div>;
};

export default ImageList;
