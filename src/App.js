import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
function App() {
  const [user, setUser] = useState();
  return (
    <div className="app">
      <div className="app__body">
        (!user ? (<h1>Log In</h1>
        ):(
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <h1>Home Page</h1>
            </Route>
          </Switch>
        </Router>
        ))
      </div>
    </div>
  );
}

export default App;
