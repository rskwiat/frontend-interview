import * as React from "react";
import { useUserContext, useSetUserContext } from "../contexts/user";

const Profile = () => {
  const user = useUserContext();
  const setUser = useSetUserContext();

  return (
    <div>
      <h1>Edit your profile</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <input
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          name="name"
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Profile;
