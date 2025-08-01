import React from "react";
import ProjectItem from "./ProjectItem";
import { MemoryRouter } from "react-router-dom";
import frameSrc from "../../assets/laptop_image.png";
import projectImage from "../../assets/FilterSearch.png";

export default {
  title: "Components/ProjectItem",
  component: ProjectItem,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = () => (
  <ProjectItem
    header="Event Management System"
    description="This is a project that involves creating an event management system."
    frameSrc={frameSrc}
    source={projectImage}
    isButtonVisible={true}
    buttonText="View Project"
    onClick={() => {
      alert("Button clicked");
    }}
  />
);
