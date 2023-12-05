import "./Styles/style.css";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import Portfollio from "./Components/Portfollio";
// import Bugfix from "./Components/Bugfix";
function App() {
  return (
    <>
      <NavigationBar />
      <Portfollio />
      {/* <Bugfix /> */}
    </>
  );
}

export default App;
