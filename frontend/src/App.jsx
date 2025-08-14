import Navbar from "./components/Navbar";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

export default function App() {
  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <UserForm onUserAdded={() => window.location.reload()} />
        <UserList />
      </div>
    </>
  );
}
