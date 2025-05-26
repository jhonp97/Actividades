import React, { useState, useEffect } from 'react';
import '@/css/UsuariosRandom.css';

function UsuariosRandom() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const controller = new AbortController();
      const options = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
      };

      try {
        const response = await fetch("https://randomuser.me/api/?results=8", options);
        const data = await response.json();
        setUsers(data.results);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch abortado");
        } else {
          console.error("Error al obtener usuarios:", error);
        }
      }
      return () => controller.abort();
    };

    fetchUsers();

  }, []);

  return (
    <div className="usuarios">
      {users.map((user, index) => (
        <UserCard key={index} user={user} />
      ))}
    </div>
  );
}

export default UsuariosRandom;

function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} className="user-image" />
      <div className="user-body">
        <h3>{user.name.first} {user.name.last}</h3>
        <p><strong>Edad:</strong> {user.dob.age}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Teléfono:</strong> {user.phone}</p>
        <p><strong>Ubicación:</strong> {user.location.city}, {user.location.country}</p>
      </div>
    </div>
  );
}
