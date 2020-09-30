import React, { createContext, useEffect, useState } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "pages/Home";
import List from "pages/List";

import logo from "./logo.svg";
import "./App.css";

interface IUserInfo {
  clientSn: string;
  brandId: 2 | 4;
}
interface IContextUserInfo {
  userInfo: IUserInfo;
  setUserInfo: (value: any) => void;
}

export const UserInfo = React.createContext({} as IContextUserInfo);

function App() {
  const [userInfo, setUserInfo] = useState({
    clientSn: "",
    brandId: 2,
  } as IUserInfo);
  useEffect(() => {
    const user: IUserInfo = {
      clientSn: "123456",
      brandId: 2,
    };
    setUserInfo(user);
  }, []);
  return (
    <div className="App">
      {userInfo.clientSn && (
        <UserInfo.Provider value={{ userInfo, setUserInfo }}>
          <HashRouter basename={process.env.PUBLIC_URL}>
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/list" exact={true} component={List} />

              {/* <Route path="*">
              <NotFound />
            </Route> */}
            </Switch>
          </HashRouter>
        </UserInfo.Provider>
      )}
    </div>
  );
}

export default App;
