import React, { useState, useEffect } from "react";
import getUser from "./helpers/getUsers";
const initialUser = {
  name: "Cesar",
  email: "correo@gmail.com",
};
const initialPost = [
  {
    id: 1,
    title: "Post 1",
  },
  {
    id: 2,
    title: "Post 2",
  },
];

const FetchCard = () => {
  const [user, setUser] = useState(initialUser);
  const [posts, setPosts] = useState(initialPost);
  const updateUser = () => {
    getUser().then((result) => {
      setUser(result);
    });
  };
  useEffect(() => {
    updateUser();
  }, []);

  return (
    <div>
      <hr></hr>
      <button onClick={updateUser}>Another User</button>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
      <br />
      <h2>Posts -user:{user.id}</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default FetchCard;
