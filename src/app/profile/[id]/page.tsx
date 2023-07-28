import React from "react";

export default function UserProfile({params}: any) {
  return (
    <div>
      <h1>Profile</h1>
      <p>User: {params.id}</p>
    </div>
  );
}
