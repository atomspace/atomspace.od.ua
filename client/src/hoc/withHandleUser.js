import React, { useState } from "react";
import { arrayOf, shape } from "prop-types";

const withHandleUser = (Component) => {
  function UserHandler({ inputData, ...rest }) {
    const getUserByProps = (data) => {
      return data.reduce((acc, val) => ({ ...acc, [val.id]: { value: "", error: false } }), {});
    };
    const [user, setUser] = useState(getUserByProps(inputData));

    const handleInputUser = ({ validate }, event) => {
      const {
        target: { id, type, checked, value },
      } = event;
      let error = "";
      if (type === "checkbox") {
        error = false;
      } else {
        error = !value.length || (validate && !validate(value));
      }

      if (id === "birth") {
        event.target.type = "date";
      }
      setUser({
        ...user,
        [id]: {
          ...user[id],
          error,
          value: type === "checkbox" ? checked : value,
        },
      });
    };
    return (
      <Component handleInputUser={handleInputUser} inputData={inputData} user={user} setUser={setUser} {...rest} />
    );
  }

  UserHandler.propTypes = {
    inputData: arrayOf(shape({})),
  };

  return UserHandler;
};

export default withHandleUser;
