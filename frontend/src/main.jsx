import ReactDOM from "react-dom/client";
import "./index.css";
import store from "./redux/store";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { ProgressProvider } from "./context/ProgressContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ProgressProvider>
      <App />
    </ProgressProvider>
  </Provider>,
);
