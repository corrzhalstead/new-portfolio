import React from "react";
import Button from "./Button";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/Button",
  component: Button,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = () => (
  <Button
    text="Download Resume"
    onClick={() => {
      alert("Button clicked");
    }}
  />
);
