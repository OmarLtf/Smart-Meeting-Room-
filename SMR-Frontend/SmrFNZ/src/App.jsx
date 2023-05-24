import { Routes, Route, useNavigate } from "react-router-dom";
import NotFound404 from "./Pages/General/404NotFound.jsx";
import Sidebar from "./Pages/General/SideBar.jsx";
import SignIn from "./Pages/General/SignIn.jsx";
import SignUp from "./Pages/General/SignUp.jsx";
import Dashboard from "./Pages/UserInterfaces/Dashboard.jsx";
import AdminDashboard from "./Pages/UserInterfaces/Dashboard.jsx";
import MyMeetings from "./Pages/UserInterfaces/UserMeetings.jsx";
import AdminRooms from "./Pages/UserInterfaces/AdminRooms.jsx";

function App() {
  const navigate = useNavigate();
  const navigatetwo = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const handleSignInClick = () => {
    navigatetwo("/SignIn");
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Sidebar />}>
          <Route path="/dashboard" element={<Dashboard></Dashboard>} />
          <Route path="/meetings" element={<MyMeetings></MyMeetings>} />
          <Route
            path="/admin_dashboard"
            element={<AdminDashboard></AdminDashboard>}
          />
          <Route path="/rooms" element={<AdminRooms></AdminRooms>} />
          <Route path="/404" element={<NotFound404></NotFound404>} />
        </Route>
        <Route
          path="/signin"
          element={<SignIn handleSignUpClick={handleSignUpClick}></SignIn>}
        />
        <Route
          path="/signup"
          element={<SignUp handleSignInClick={handleSignInClick}></SignUp>}
        />
      </Routes>
    </>
  );
}

export default App;
