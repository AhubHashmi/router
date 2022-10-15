import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./config/router";
import Footer from "./components/Footer";

function App() {
    return ( <
        div className = "App"
        id = "app" >
        <
        AppRouter / >
        <
        Footer / >
        <
        /div>
    );
}

export default App;