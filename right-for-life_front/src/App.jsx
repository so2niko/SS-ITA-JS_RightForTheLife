import React from "react";
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AnimalsPage } from "./containers/AnimalsPage";

function App({store}) {

	return (
    <Provider store={store}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" /*component={NewsPage}*/ />
          <Route exact path="/animals" component={AnimalsPage} />
          <Route exact path="/supplies" /*component={SuppliesPage}*/ />
          <Route exact path="/stories" /*component={StoriesPage}*/ />
        </Switch>
        <Footer />
      </Router>
    </Provider>
	);
}

export default App;
