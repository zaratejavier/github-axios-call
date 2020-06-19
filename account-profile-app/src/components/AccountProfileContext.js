import React from "react";
import AccountContextDemo from "./AccountContextDemo";
import AccountFormContext from "./AccountFormContext";

export default class AccountProfileContext extends React.Component {
  render() {
    return (
      <div>
        <AccountContextDemo />
        <AccountFormContext x={"x"} formLabel={"Account Form"} />
      </div>
    );
  }
}