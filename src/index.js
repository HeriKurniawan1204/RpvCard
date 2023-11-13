import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/index.css";
import App from "./App";
import { ThemeProvider } from "@material-tailwind/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./redux/store/store";

const queryMovie = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryMovie}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </QueryClientProvider>
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
