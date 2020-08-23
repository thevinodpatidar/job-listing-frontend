import React from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';


import AppLayout from '../components/Layout';
import Module from '../modules';

// import UserModule from '../modules/index';

const Error = () => {
  return <div>Error</div>
}
function App() {
  return (
        <AppLayout>
          <Switch>
              <Route path="/" component={Module} />
              {/* <Route path='/admin' component={AdminModule} /> */}
              <Route path="*" component={Error} />
          </Switch>
        </AppLayout>
  );
}

export default App;
