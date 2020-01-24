import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { AnimalsPage } from "./containers/AnimalsPage";
import { NewsPage } from "./containers/NewsPage";
import { HappyStoriesPage } from "./containers/HappyStoriesPage";
import { EmergencyHelpPage } from "./containers/EmergencyHelpPage"
import { ErrorIndicator } from "./components/ErrorIndicator";
import {SiteContentContainer} from "./components/SiteContentContainer";

function App({ store }) {
	return (
		<Provider store={store}>
			<Router>
				<Header />
					<SiteContentContainer>
						<Switch>
							<Route exact path="/" /*component={HomePage}*/ />
							<Route exact path="/animals" component={AnimalsPage} />
							<Route exact path="/news" component={NewsPage} />
							<Route exact path="/stories" component={HappyStoriesPage} />
							<Route exact path="/help" /*component={HelpPage}*/ />
							<Route exact path="/about" /*component={AboutPage}*/ />
							<Route exact path="/emergency" component={EmergencyHelpPage} />
							<Route render={() =>
								<ErrorIndicator
									message="Страница не найдена :("
									renderAction={() => <Link to="/">Вернуться на главную</Link>}
								/>}
							/>
						</Switch>
					</SiteContentContainer>
				<Footer />
			</Router>
		</Provider>
	);
}

export default App;
