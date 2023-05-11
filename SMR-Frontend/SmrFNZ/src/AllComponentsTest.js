import MeetingRoomsPieChart from "./AdminDashboard/MeetingRoomsPieChart.jsx";
import MeetingsCountLineChart from "./AdminDashboard/MeetingsCountLineChart.jsx";
import TeamsMeetingBarChart from "./AdminDashboard/TeamsMeetingsBarChart.jsx";
import UsersTable from "./AdminDashboard/UsersTable.jsx";

import AddRoomForm from "./AdminRooms/AddRoomForm.jsx";
import RoomInformation from "./AdminRooms/RoomInformationView.jsx";
import RoomsTable from "./AdminRooms/RoomsTable.jsx";

import Calandar from "./UserDashboard/Calander.jsx";
import MeetingsList from "./UserDashboard/MeetingsList.jsx";
import RoomCard from "./UserDashboard/RoomCard.jsx";

import BookingForm from "./UserMeetings/BookingForm.jsx";
import EditMeetingForm from "./UserMeetings/EditMeetingForm.jsx";
import MyMeetingsTable from "./UserMeetings/MyMeetingsTable.jsx";

import SignIn from "./Pages/General/SignIn.jsx";
import SignUp from "./Pages/General/SignUp.jsx";
import DeleteConfirmation from "./Pages/General/DeleteConfirmation.jsx";

function App() {
  return (
    <>
      <SignIn></SignIn>
      <SignUp></SignUp>
      <h1>Admin Dashboard</h1>
      <DeleteConfirmation></DeleteConfirmation>
      <MeetingRoomsPieChart></MeetingRoomsPieChart>
      <MeetingsCountLineChart></MeetingsCountLineChart>
      <TeamsMeetingBarChart></TeamsMeetingBarChart>
      <UsersTable></UsersTable>
      <h1>Admin Rooms</h1>
      <AddRoomForm></AddRoomForm>
      <RoomInformation></RoomInformation>
      <RoomsTable></RoomsTable>
      <h1>User Dashboard</h1>
      <RoomCard></RoomCard>
      <MeetingsList></MeetingsList>
      <Calandar></Calandar>
      <h1>User Meetings</h1>
      <BookingForm></BookingForm>
      <EditMeetingForm></EditMeetingForm>
      <MyMeetingsTable></MyMeetingsTable>
    </>
  );
}

export default App;
