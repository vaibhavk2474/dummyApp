import "./App.css";
// import Ticker from "./components/Ticker";
// import { Provider } from 'react-redux'
import configureStore from "./store";
import PolyOnePage from "./components_new/PolyOnePage";

const store = configureStore();

function App() {
  return (
    // <Provider store={store}>
    //   <Ticker />
    //  </Provider>
    <PolyOnePage/>
  );
}



export default App;
