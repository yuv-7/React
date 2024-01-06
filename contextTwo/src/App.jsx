
import Profile from "./Components/Profile";
import User from "./Components/User";
import UserContextProvider from "./Context/userContextProvider";

const App = () => {
  return (
    <UserContextProvider>
      <User />
      <Profile />
    </UserContextProvider>
  );
}

export default App;