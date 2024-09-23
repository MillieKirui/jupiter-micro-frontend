import { Redirect, Route, Switch, useLocation, useParams } from "react-router-dom";
import { MasterLayout } from "../layout/MasterLayout";
import { AuthPage } from "../modules/auth";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../setup";
import DashboardWrapper from "../pages/dashboards/main-dashboard/DashboardWrapper";
import { LoansPage } from "../pages/Loans/LoansPage";
import { DashboardPage } from "../pages/dashboards/main-dashboard/DashboardPage";
import { SettingsPage } from "../pages/Settings/SettingsPage";
import { SupportPage } from "../pages/support/SupportPage";
import { SecurityItemsPage } from "../pages/SecurityItems/SecurityItemsPage";
import { Applications } from "../pages/admin/applications/Applications";
import { Application } from "../pages/admin/applications/Application";
import { AdminDashboard } from "../pages/admin/dashboard/AdminDashboard";
import { UsersPage } from "../pages/admin/users/UsersPage";
import { User } from "../pages/admin/users/User";
import { LandingPageWrapper } from "../pages/Landing/LandingPageWrapper";
import { LandingLayout } from "../layout/LandingLayout";

export function AppRoutes() {
  const dispatch = useDispatch();
  
const isAuthorized = useSelector<RootState>(
  ({ auth }) => auth.user
);
const uuid = useSelector<RootState>(
  ({ auth }) => auth.uuid
);
const role = useSelector((state: RootState) => state.auth.role);
  return (
      <Switch>
        <Route exact path="/" component={LandingPageWrapper} />
        <Route  path="/auth" component={AuthPage} />
        <Redirect exact from="/auth" to="/dashboard" />  
        {isAuthorized  ?
        <>
        {role === "admin" ?
          <MasterLayout> 
          <DashboardWrapper> 
          <Route exact path="/admin" component={AdminDashboard} />
          <Route exact path="/admin/applications/" component={Applications} /> 
          <Route exact path="/admin/users/" component={UsersPage} /> 
          <Route path="/admin/applications/:applicationId" component={Application} />
          <Route path="/admin/users/:userId" component={User} />   
          <Route path="/settings" component={SettingsPage} />          
          </DashboardWrapper> 
        </MasterLayout>
        :
          <MasterLayout> 
          <DashboardWrapper>
          <Route path="/dashboard" component={DashboardPage} /> 
          <Route path="/loans" component={LoansPage} />
          <Route path="/settings" component={SettingsPage} />  
          <Route path="/security-items" component={SecurityItemsPage} />   
          <Route path="/support" component={SupportPage} />            
          </DashboardWrapper> 
        </MasterLayout>
        }
        </>
        :
        <Redirect to="/auth" /> 
        }
      </Switch>
  );
}
