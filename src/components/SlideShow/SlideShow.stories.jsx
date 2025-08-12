import React from "react";
import SlideShow from "./SlideShow";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/SlideShow",
  component: SlideShow,
  decorators: [
    () => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Default = () => <SlideShow />;
