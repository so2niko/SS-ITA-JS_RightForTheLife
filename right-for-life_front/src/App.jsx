import React, { Fragment } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AnimalsPage } from "./containers/AnimalsPage";
import {HappyStoriesList} from "./containers/HappyStoriesList";

function App() {
	return (
		<Fragment>
			<Header />
			<AnimalsPage />
			<HappyStoriesList />
			<Footer />
		</Fragment>
	);
}

export default App;
