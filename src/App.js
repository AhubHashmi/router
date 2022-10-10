import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./config/router";
// import Header from "./components/Header";
// import Navbar from "./screens/Navbar";

function App() {
    return ( <
        div className = "App"
        id = "app" > { /* <Navbar /> */ } <
        AppRouter / > { /* <Header /> */ } <
        /div>
    );
}

export default App;