import UserContextProvider from "./context/userContextProvider";
import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1>hello</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
