import { Route, Switch } from "react-router-dom";
import { MasterLayout } from "../layout/MasterLayout";
import { DashboardWrapper } from "../pages/dashboards/main-dashboard/DashboardWrapper";
import { LandingPage } from "../pages/Landing";
import { AuthPage } from "../modules/auth";

export function AppRoutes() {
  return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route  path="/auth" component={AuthPage} />
        <MasterLayout>
        <Route path="/dashboard" component={DashboardWrapper} />
        </MasterLayout>
      </Switch>
  );
}
