import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import MainComponent from "./components/MainComponent";
import { store } from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
