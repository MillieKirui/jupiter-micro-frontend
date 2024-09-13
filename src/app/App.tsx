import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "./layout/core";
import { Logout } from "./modules/auth/Logout";
import { AppRoutes} from "./routing/AppRoutes";

type Props = {
  basename: string;
};

const App: React.FC<Props> = ({ basename }) => {
  return (
    <BrowserRouter basename={basename}>
      <ThemeProvider>
        <Switch>
          <Route path="/logout" component={Logout} />
          <>
            <AppRoutes/>
          </>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export { App };
