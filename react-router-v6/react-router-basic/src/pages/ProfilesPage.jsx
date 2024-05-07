import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const ProfilesPage = () => {
  const profiles = [1, 2, 3, 4, 5];

  return (
    <div>
      <div>
        {profiles.map((profile) => (
          <div key={profile} style={{ margin: "5px", fontSize: "20px" }}>
            <NavLink to={`/profiles/${profile}`}>Profile {profile}</NavLink>
          </div>
        ))}
      </div>
      <Outlet />
      <Link to="/">Home from Link</Link>
    </div>
  );
};

export default ProfilesPage;
