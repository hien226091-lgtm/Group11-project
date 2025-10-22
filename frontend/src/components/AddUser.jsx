import React, { useState } from "react";
import axios from "axios";

export default function AddUser({ onAdded }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }
    try {
      await axios.post("http://localhost:3000/users", { name, email });
      setName("");
      setEmail("");
      onAdded();
    } catch (err) {
      console.error("❌ Lỗi khi thêm người dùng:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Tên"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button type="submit">➕ Thêm</button>
    </form>
  );
}
