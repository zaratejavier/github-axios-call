import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import { AccountConsumer } from "../providers/AccountProvider";

const Navbar = () => {
  return (
    <AccountConsumer>
      {(value) => (
        <Menu>
          <NavLink to="/">
            <Menu.Item>Home</Menu.Item>
          </NavLink>
          <NavLink to="/account/profile">
            <Menu.Item>{value.username}</Menu.Item>
          </NavLink>
          <NavLink to="/context">
            <Menu.Item>context: {value.username}</Menu.Item>
          </NavLink>
        </Menu>
      )}
    </AccountConsumer>
  );
};

export default Navbar;