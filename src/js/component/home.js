import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Cards } from "./cards";
import { Footer } from "./footer";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<div className="container mt-5">
				<Jumbotron
					title="Hello, world!"
					description="It uses utility classes for typography and spacing to space content out within the larger container."
					buttonLabel="Learn more"
					buttonUrl={"www.dot.com"}
				/>
				<div className="row mt-3">
					<div className="col-sm-3">
						<Cards />
					</div>
					<div className="col-sm-3">
						<Cards />
					</div>
					<div className="col-sm-3">
						<Cards />
					</div>
					<div className="col-sm-3">
						<Cards />
					</div>
				</div>
			</div>
			<div className="mt-5">
				<Footer />
			</div>
		</div>
	);
}
