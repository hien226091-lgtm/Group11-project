import React, { useEffect, useState } from "react";
import axios from "axios";

export default function UserList() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/users")
      setUsers(res.data);
    } catch (err) {
      console.error("❌ Lỗi khi tải dữ liệu:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>Danh sách người dùng</h2>
      <ul>
        {users.map((u) => (
          <li key={u.id || u._id}>
            👤 {u.name} - {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
