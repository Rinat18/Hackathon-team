import React, { useState } from "react";
import { useAuth } from "../../context/AuthContextProvider";

export default function RefreshPassword() {
    const {changePassword} = useAuth()
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
  });
  return (
      <div>
        <input
          placeholder="old password"
          type="text"
          onChange={(e) =>
            setPassword({ ...password, oldPassword: e.target.value })
          }
        />
        <input
          placeholder="new password"
          type="text"
          onChange={(e) =>
            setPassword({ ...password, newPassword: e.target.value })
          }
        />
        <input
          placeholder="confirm new password"
          type="text"
          onChange={(e) =>
            setPassword({ ...password, newPasswordConfirm: e.target.value })
          }
        />
        <button
          onClick={() => {
            changePassword(password);
          }}
        >
          Change
        </button>
      </div>
  );
}
