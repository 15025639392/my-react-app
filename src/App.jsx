import Dashborad from './layout/dashborad';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/test1" />
                </Route>
                <Route path="*">
                    <Dashborad />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
