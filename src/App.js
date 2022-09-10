import React, { Component } from "react";
import rp from "request-promise";
import "./App.css";
// import cheerio from "cheerio";

class App extends Component {
	state = {};

	componentDidMount() {
		const cheerio = require("cheerio");

		// use the request-promise library to fetch the HTML from pokemon.org
		rp(
			"https://cors-anywhere.herokuapp.com/https://apps.leg.wa.gov/rcw/default.aspx?cite=69.50.4013"
		)
			.then((html) => {
				let $ = cheerio.load(html);
				console.log($);
				let rcw = $("#divContent");
				// trying to render 'poop' in browser console
				// $("#divContent").addClass("poop");
				this.setState({ rcw });
			})
			.catch(function (err) {
				console.log("crawl failed");
				// console.log(rcw);
			});
	}

	render() {
		return (
			<div>
				<p>hello</p>
			</div>
		);
	}
}

export default App;
