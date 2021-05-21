import {lazy, Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';
import Loading from './pages/loading/index';

const Login = lazy(() => import("./pages/login/index"));
const Singin = lazy(() => import("./pages/singin/index"));

const SwitchRoutes = () => {
  return (
    <>
      <Switch>
        <Suspense fallback={<><Loading/></>}>
          <Route exact path="/singin" component={Singin}/>
          <Route exact path="/" component={Login}/>
        </Suspense>
        <Route exact component={() => <h1>Page no found</h1>} />
      </Switch>
    </>
  )
}

export default SwitchRoutes;
