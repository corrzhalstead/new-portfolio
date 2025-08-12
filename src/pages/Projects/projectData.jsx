import eventAdminImage from "../../assets/event_admin.png";
import eventHomesiteImage from "../../assets/event_homesite.png";
import settingsAppImage from "../../assets/settings_app.png";

const projects = [
  {
    source: eventAdminImage,
    // frameSrc: frameSrc,
    header: "Event Admin Platform",
    description:
      "A secure, internal-use platform built for WWG members to manage multi-user events. Admins can create, view, edit, or clone events; assign venues and speakers; filter by ruleset, date, or location; and control visibility with publish settings.",
  },
  {
    source: eventHomesiteImage,
    // frameSrc: frameSrc,
    header: "Event Homesite",
    description:
      "A web and mobile app that allows members to set a homesite location, view active events, purchase tickets via an add‑to‑cart feature, and configure accessibility options as needed.",
  },
  {
    source: settingsAppImage,
    // frameSrc: frameSrc,
    header: "Settings App",
    description:
      "A full-stack web app for managing multi-user events, allowing admins to create sessions, track registrations, and generate analytics dashboards. Built with React, Knex.js, and Express.",
  },
  // {
  //   source: eventProjectImage,
  //   frameSrc: frameSrc,
  //   header: "Habit Tracker",
  //   description:
  //     "An app to build daily habits with recurring tasks, streak tracking, and calendar integration. Built with React and Node.js.",
  //   buttonText: "View Case",
  //   onClick: () => {},
  // },
];

export default projects;
