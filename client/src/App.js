import { BrowserRouter, Route, Switch } from "react-router-dom";
import PageNofound from "./page/PageNofound/PageNofound.jsx";
import Detail from "./page/Detail/Detail.jsx";
import Form from "./page/Form/Form.jsx";
import Home from "./page/Home/Home.jsx";
import Landing from "./page/Landing/Landing.jsx";
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3001'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />

          <Route path="/home" component={Home} />

          <Route path="/create" component={Form} />

          <Route path="/buscar/:id" component={Detail} />

          <Route path="*" component={PageNofound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
