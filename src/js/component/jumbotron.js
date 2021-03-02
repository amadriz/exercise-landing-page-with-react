import React from "react";
import PropTypes from "prop-types";

//create your first component
export function Jumbotron(props) {
	return (
		<div className="jumbotron">
			<h1 className="display-4">{props.title}</h1>
			<p className="lead">{props.description}</p>
			<hr className="my-4" />
			<a
				className="btn btn-primary btn-lg"
				href={props.buttonURL}
				role="button">
				{props.buttonLabel}
			</a>
		</div>
	);
}

Jumbotron.propTypes = {
	//proptypes here
	title: PropTypes.string,
	description: PropTypes.string,
	buttonLabel: PropTypes.string,
	buttonURL: PropTypes.string
};
