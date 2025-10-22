import React from "react";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";

function App() {
  const [refresh, setRefresh] = React.useState(false);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>👥 Quản lý người dùng</h1>
      <AddUser onAdded={() => setRefresh(!refresh)} />
      <UserList key={refresh} />
    </div>
  );
}

export default App;
