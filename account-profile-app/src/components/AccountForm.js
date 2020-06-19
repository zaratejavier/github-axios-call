import React from "react";
import { Form } from "semantic-ui-react";
import { AccountConsumer } from "../providers/AccountProvider";

class AccountForm extends React.Component {
  state = {
    username: this.props.username,
    membershipLevel: this.props.membershipLevel,
  };

  // TODO: figure out {name, value} here
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateAccount({ ...this.state });
    // this.props.updateAccount({
    //   username: this.state.username,
    //   membershipLevel: this.state.membershipLevel,
    // });
  };

  render() {
    return (
      <>
        <h1>{this.props.formLabel}</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Enter username"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <Form.Select
            label="Select membership level"
            name="membershipLevel"
            value={this.state.membershipLevel}
            onChange={this.handleChange}
            options={membershipOptions}
          />
          <Form.Button>Submit</Form.Button>
        </Form>
      </>
    );
  }
}
const membershipOptions = [
  { key: "b", text: "Bronze", value: "Bronze" },
  { key: "s", text: "Silver", value: "Silver" },
  { key: "g", text: "Gold", value: "Gold" },
];

const ConnectedAccountForm = (props) => {
  return (
    <AccountConsumer>
      {(value) => (
        <AccountForm
          {...props}
          username={value.username}
          membershipLevel={value.membershipLevel}
          updateAccount={value.updateAccount}
        />
      )}
    </AccountConsumer>
  );
};

export default ConnectedAccountForm;