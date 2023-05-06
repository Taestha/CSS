import "./App.css";
import Tweet from "./components/Tweet";
const App = () => {
    return (
        <>
        <Tweet name= {"aastha"} id={"@aastha"} time="5h"/>
        <Tweet name= {"shreya"} id={"@shreya"} time="2m"/>
        <Tweet name= {"sampada"} id={"@sampada"} time="1h"/>
        <Tweet name= {"aabishkar"} id={"@aabishkar"} time="4m"/>
        
        </>
    );
};
export default App;
