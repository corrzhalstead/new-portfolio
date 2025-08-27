// import React from "react";
// import Navbar from "./Navbar";

// export default {
//   title: "Components/Navbar",
//   component: Navbar,
// };

// export const Default = () => <Navbar />;

import React from "react";
import Navbar from "./Navbar";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/Navbar",
  component: Navbar,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = () => <Navbar />;
