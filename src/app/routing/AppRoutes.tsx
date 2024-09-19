import { Redirect, Route, Switch, useParams } from "react-router-dom";
import { MasterLayout } from "../layout/MasterLayout";
import { LandingPage } from "../pages/Landing";
import { AuthPage } from "../modules/auth";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
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
import { getUser } from "../modules/auth/core/requests";
import { useEffect, useState } from "react";
import * as auth from "../../app/modules/auth/core/AuthRedux";
import { UserModel } from "../modules/auth/models/UserModel";
import { User } from "../pages/admin/users/User";

export function AppRoutes() {
  const dispatch = useDispatch();
  
const isAuthorized = useSelector<RootState>(
  ({ auth }) => auth.user
);
const uuid = useSelector<RootState>(
  ({ auth }) => auth.uuid
);
const role = useSelector<RootState>(
  ({ auth }) => auth.role
);

  return (
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route  path="/auth" component={AuthPage} />
        <Redirect exact from="/auth" to="/dashboard" />  
        {isAuthorized  &&
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
        }
      </Switch>
  );
}
