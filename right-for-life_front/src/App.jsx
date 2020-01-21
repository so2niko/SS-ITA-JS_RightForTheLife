import React, { Fragment } from "react";
import { Provider } from 'react-redux';
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AnimalsPage } from "./containers/AnimalsPage";

function App({store}) {

	return (
    <Provider store={store}>
			<Fragment>
				<Header />
				<AnimalsPage />
				<Footer />
			</Fragment>
		</Provider>
	);
}

export default App;
