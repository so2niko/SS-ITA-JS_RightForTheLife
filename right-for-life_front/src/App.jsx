import React, { Fragment } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AnimalsPage } from "./containers/AnimalsPage";

function App() {
	return (
		<Fragment>
			<Header />
			<AnimalsPage />
			<Footer />
		</Fragment>
	);
}

export default App;
