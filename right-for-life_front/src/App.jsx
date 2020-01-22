import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AnimalsPage } from "./containers/AnimalsPage";

function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route exact path="/" /*component={HomePage}*/ />
				<Route exact path="/animals" component={AnimalsPage} />
				<Route exact path="/news" /*component={NewsPage}*/ />
				<Route exact path="/stories" /*component={StoriesPage}*/ />
				<Route exact path="/help" /*component={HelpPage}*/ />
				<Route exact path="/about" /*component={AboutPage}*/ />
				<Route exact path="/urgent" /*component={UrgentPage}*/ />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
