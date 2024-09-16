import { Redirect, Route, Switch } from "react-router-dom";
import { MasterLayout } from "../layout/MasterLayout";
import { DashboardWrapper } from "../pages/dashboards/main-dashboard/DashboardWrapper";
import { LandingPage } from "../pages/Landing";
import { AuthPage } from "../modules/auth";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "../../setup";
import { LoansPageWrapper } from "../pages/Loans/LoansPageWrapper";
import { SettingsPageWrapper } from "../pages/Settings/SettingsWrapper";
import { SecurityItemsPageWrapper } from "../pages/SecurityItems/SecurityItemsWrapper";
import { SupportPageWrapper } from "../pages/support/SupportWrapper";

export function AppRoutes() {
  
const isAuthorized = useSelector<RootState>(
  ({ auth }) => auth.user,
  shallowEqual
);

  return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route  path="/auth" component={AuthPage} />
        <Redirect exact from="/auth" to="/dashboard" />  
        {isAuthorized &&
        <MasterLayout> 
        <Route path="/dashboard" component={DashboardWrapper} /> 
        <Route path="/loans" component={LoansPageWrapper} />
        <Route path="/settings" component={SettingsPageWrapper} />  
        <Route path="/security-items" component={SecurityItemsPageWrapper} />   
        <Route path="/support" component={SupportPageWrapper} />  
        </MasterLayout>
        }
      </Switch>
  );
}
