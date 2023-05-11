import { Routes, Route } from "react-router-dom";
import NotFound404 from "./Pages/General/404NotFound.jsx";
import Sidebar from "./Pages/General/SideBar.jsx";
import SignIn from "./Pages/General/SignIn.jsx";
import SignUp from "./Pages/General/SignUp.jsx";
import Dashboard from "./Pages/UserInterfaces/Dashboard.jsx";
import MyMeetings from "./Pages/UserInterfaces/UserMeetings.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route path="/dashboard" element={<Dashboard></Dashboard>} />
          <Route path="/meetings" element={<MyMeetings></MyMeetings>} />
          <Route path="/admin_dashboard" element={<h1>Admin Dashboard</h1>} />
          <Route path="/rooms" element={<h1>Admin Rooms</h1>} />
          <Route path="/profile" element={<h1>Profile</h1>} />
          <Route path="/404" element={<NotFound404></NotFound404>} />
        </Route>
        <Route path="/signin" element={<SignIn></SignIn>} />
        <Route path="/signup" element={<SignUp></SignUp>} />
      </Routes>
    </>
  );
}

export default App;
