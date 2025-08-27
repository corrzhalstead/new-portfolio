import eventAdminHome from "../../assets/event_admin_home.png";
import eventAdminEdit from "../../assets/event_admin_edit.png";
import eventAdminView from "../../assets/event_admin_view.png";
import eventAdminSpeaker from "../../assets/event_admin_speaker.png";

import eventAdminVideo from "../../assets/Event_Admin.mp4";
import eventHomesiteVideo from "../../assets/Event_Homesite.mp4";
import eventHomesiteImage from "../../assets/event_homesite.png";
import eventHomesiteFE from "../../assets/homesite_FE.png";
import eventHomesiteCheckout from "../../assets/homesite_checkout.png";
import eventHomesiteCart from "../../assets/homesite_cart.png";
import eventHomesiteSpecial from "../../assets/homesite_special.png";

import settingAppVideo from "../../assets/Settings_App.mp4";
import settingsAppImage from "../../assets/settings_app.png";
import settingsHome from "../../assets/settings_home.png";
import settingsAddress from "../../assets/settings_address.png";
import settingsBilling from "../../assets/settings_billing.png";
import settingsMembership from "../../assets/settings_membership.png";

const projects = [
  {
    key: "event-admin",
    source: eventAdminHome,
    // frameSrc: frameSrc,
    header: "Event Admin Platform",
    // description:
    //   "A secure, internal-use platform built for WWG members to manage multi-user events. Admins can create, view, edit, or clone events; assign venues and speakers; filter by ruleset, date, or location; and control visibility with publish settings.",
    description:
      "A secure, internal-use platform built for WWG members to manage multi-user events (create/edit/clone, assign venues/speakers, filter by ruleset/date/location, control publish visibility). I contributed frontend components with PropTypes-based contracts, integrated REST endpoints to populate forms/tables, and implemented field-level autosave (onBlur) to save inputs individually.",

    videoSrc: eventAdminVideo,
    slides: [
      {
        src: eventAdminHome,
        title: "Events Homepage",
        caption: "(Events list to display and filter)",
      },
      {
        src: eventAdminEdit,
        title: "Events Edit Page",
        caption: "(Add and edit events)",
      },
      {
        src: eventAdminView,
        title: "Events View Page",
        caption: "(View event details)",
      },
      {
        src: eventAdminSpeaker,
        title: "Event Select Speaker",
        caption: "(Select Speaker)",
      },
    ],

    role: "Frontend Developer (contributor)",
    contributions: [
      "Built reusable UI components using Storybook (buttons, forms, modals, tables and others).",
      "Defined PropTypes/defaultProps to document & validate components.",
      "Integrated REST endpoints (GET/POST/PUT) with React Query (useQuery/useMutation), loading/error states, and cache invalidation.",
      "Implemented shared state with React Context API.",
      "Used CSS Modules, Grid layouts and media queries for responsiveness.",
      "Implemented field-level autosave on blur (per-input save) with error handling and toasts.",
    ],
    tech: [
      "React",
      "React Query",
      "Context API",
      "Storybook",
      "CSS Modules",
      "PropTypes",
      "Figma",
    ],
  },
  {
    key: "event-homesite",
    source: eventHomesiteImage,
    // frameSrc: frameSrc,
    header: "Event Homesite",
    description:
      "A responsive web and mobile app for members to set a homesite and see events within a chosen radius. Users can add or purchase tickets, redeem complimentary tickets, and provide special-needs/accessibility details during checkout.",

    videoSrc: eventHomesiteVideo,
    slides: [
      {
        src: eventHomesiteFE,
        title: "Homesite",
        caption: "(View available events in homesite)",
      },
      {
        src: eventHomesiteCheckout,
        title: "Checkout",
        caption: "(Add to cart, purchase)",
      },
      {
        src: eventHomesiteCart,
        title: "Cart",
        caption: "(View and manage cart)",
      },
      {
        src: eventHomesiteSpecial,
        title: "Special Needs Features",
        caption: "(Accessibility options)",
      },
    ],

    role: "Frontend Developer (contributor)",
    contributions: [
      "Implemented homesite selection UX with geolocation and radius-based event discovery.",
      "Built the events list (pagination/search/filters) wired to REST endpoints via React Query with resilient loading/error handling.",
      "Developed cart and checkout flows, including complimentary ticket redemption and validation.",
      "Added accessibility/special-needs options in checkout with client-side validation and server persistence.",
      "Created responsive layouts and image optimization (lazy-loading) for web and mobile views.",
      "Documented key components in Storybook for consistent usage and faster review.",
      "Improved UX states (empty/error/toasts) and standardized API error surfaces.",
    ],
    tech: [
      "React",
      "React Query",
      "Context API",
      "Storybook",
      "CSS Modules",
      "PropTypes",
      "Figma",
    ],
  },
  {
    key: "settings-app",
    source: settingsAppImage,
    // frameSrc: frameSrc,
    header: "Settings App",
    description:
      "Web & mobile account settings hub used across applications. Members can manage addresses, billing/credit cards, homesite and radius, language, emergency contacts, membership, and personal info, with verification flows and an Account Issues panel.",
    videoSrc: settingAppVideo,
    slides: [
      {
        src: settingsHome,
        title: "Settings App",
        caption: "(List of settings)",
      },
      {
        src: settingsAddress,
        title: "Address",
        caption: "(Adding address)",
      },
      {
        src: settingsBilling,
        title: "Billing",
        caption: "(Payment methods & billing address)",
      },
      {
        src: settingsMembership,
        title: "Membership",
        caption: "(Purchase or renew membership)",
      },
    ],

    role: "Frontend Developer (contributor)",
    contributions: [
      "Built Settings modules as reusable, Storybook-documented forms (Addresses, Credit Cards, Homesite, Language, Membership, Personal, Emergency Contacts).",
      "Defined PropTypes/defaultProps to document and validate component contracts.",
      "Integrated REST endpoints with React Query (useQuery/useMutation) to hydrate forms, save changes, and handle loading/error states with cache invalidation.",
      "Implemented field-level save on blur for targeted inputs (per-input persistence with optimistic updates and error rollback).",
      "Centralized session and cross-app preferences in React Context to reduce prop drilling.",
      "Used CSS Modules + CSS Grid/media queries for responsive layouts.",
    ],
    tech: [
      "React",
      "React Query",
      "Context API",
      "Storybook",
      "CSS Modules",
      "PropTypes",
    ],
  },
];

export default projects;
