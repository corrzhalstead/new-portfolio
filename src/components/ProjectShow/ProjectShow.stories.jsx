import React from "react";
import ProjectShow from "./ProjectShow";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/ProjectShow",
  component: ProjectShow,
  decorators: [
    () => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = () => <ProjectShow />;
