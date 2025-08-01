// import React from "react";
// import Navbar from "./Navbar";

// export default {
//   title: "Components/Navbar",
//   component: Navbar,
// };

// export const Default = () => <Navbar />;

import React from "react";
import Card from "./Card";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/Card",
  component: Card,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = () => (
  <Card
    header="About Me"
    description="I’m a frontend developer with over 3 years of experience building accessible and responsive web applications."
  />
);
