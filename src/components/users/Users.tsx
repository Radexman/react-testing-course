import { useState, useEffect } from "react";

type User = {
  name: string;
};

const Users = () => {
  const [users, setUsers] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data: User[] = await response.json();
        const namesArray = data.map((user: User) => user.name);

        setUsers(namesArray);
      } catch (error) {
        setError("Failed fetching users");
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {error && <p>{error}</p>}
      <ul>
        {users.map(user => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
