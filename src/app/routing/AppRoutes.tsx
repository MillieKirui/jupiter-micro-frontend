import { Route, Switch } from "react-router-dom";
import { MasterLayout } from "../layout/MasterLayout";
import { DashboardWrapper } from "../pages/dashboards/main-dashboard/DashboardWrapper";
import { LandingPage } from "../pages/Landing";
import { AuthPage } from "../modules/auth";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "../../setup";
import { stat } from "fs";


export function AppRoutes() {
  
const isAuthorized = useSelector<RootState>(
  ({ auth }) => auth.user,
  shallowEqual
);

  return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route  path="/auth" component={AuthPage} />
        {isAuthorized &&
        <MasterLayout>
        <Route path="/dashboard" component={DashboardWrapper} />        
        </MasterLayout>
        }
      </Switch>
  );
}
