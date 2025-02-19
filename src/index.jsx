import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";
import GameContextProvider from "./store/game-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GameContextProvider>
    <App />
  </GameContextProvider>
);
