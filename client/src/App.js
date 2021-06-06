import { Route, Switch } from 'react-router-dom';

import './styles/main.css';
import Notelist from './components/notelist';
import Notedetail from './components/notedetail';
import Notenew from './components/notenew';
import Noteedit from './components/noteedit';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Notelist} exact />
        <Route path="/add" component={Notenew} exact />
        <Route path="/edit/:id" component={Noteedit} exact />
        <Route path="/detail/:id" component={Notedetail} exact />
      </Switch>
    </div>
  );
}

export default App;
