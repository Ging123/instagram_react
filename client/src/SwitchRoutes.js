import {lazy, Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';
import Loading from './pages/loading/index';
import {useState} from 'react';

const Login = lazy(() => import("./pages/login/index"));
const Singin = lazy(() => import("./pages/singin/index"));
const Home = lazy(() => import("./pages/home/index"));

const SwitchRoutes = () => {
  const [user, setUser] = useState();

  return (
    <>
      <Switch>
        <Suspense fallback={<><Loading/></>}>
          <Route exate path="/Home" render={() => <Home user={user}/>}/>
          <Route exact path="/singin" component={Singin}/>
          <Route exact path="/" render={() => <Login setUser={setUser}/>}/>
        </Suspense>
        <Route exact component={() => <h1>Page no found</h1>} />
      </Switch>
    </>
  )
}

export default SwitchRoutes;
