import React, { useState, useContext } from "react";
import { Form } from "semantic-ui-react";
import { AccountContext } from "../providers/AccountProvider";

export default function AccountFormContext(props) {
  const account = useContext(AccountContext);
  const [username, setUsername] = useState(account.username);
  const [membershipLevel, setMembershipLevel] = useState(
    account.membershipLevel
  );

  function handleSubmit(e) {
    e.preventDefault();
    account.updateAccount({
      username,
      membershipLevel,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Input
        label="Enter username"
        type="text"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Form.Select
        label="Select membership level"
        name="membershipLevel"
        value={membershipLevel}
        onChange={(e, { value }) => setMembershipLevel(value)}
        options={membershipOptions}
      />
      <Form.Button>Submit</Form.Button>
    </Form>
  );
}
const membershipOptions = [
  { key: "b", text: "Bronze", value: "Bronze" },
  { key: "s", text: "Silver", value: "Silver" },
  { key: "g", text: "Gold", value: "Gold" },
];