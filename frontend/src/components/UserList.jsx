import { useEffect, useState } from "react";
import { getUsers } from "../services/api";

export default function UserList() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const { data } = await getUsers();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h3>All Users</h3>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} — {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
