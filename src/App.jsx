import Shop from "./components/Shop/Shop";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { ContextProvider } from "./context/context";

// style css
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <ContextProvider>
        <Shop />
      </ContextProvider>
      <Footer />
    </>
  );
}

export default App;
