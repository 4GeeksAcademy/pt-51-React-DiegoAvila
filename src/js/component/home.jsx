import React from "react";
import NavBar from "./navbar.js";
import Jumbotron from "./jumbotron.js";
import Card from "./card.js";
import Footer from "./footer.js";
//include images into your bundle
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<NavBar />
			<Jumbotron />	
			
			<div className="row m-1">
				<div className="col-sm-12 col-md-6 col-lg-3">
					<Card />
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3">
					<Card />
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3">
					<Card />
				</div>
				<div className="col-sm-12 col-md-6 col-lg-3">
					<Card />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
