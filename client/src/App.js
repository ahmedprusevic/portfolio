import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
//Redux
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import { ThemeProvider, useTheme } from "@material-ui/core/styles";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const theme = useTheme();

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Navbar />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
