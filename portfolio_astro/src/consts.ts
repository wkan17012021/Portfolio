import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "William Kan | Web Developer Portfolio",
  EMAIL: "wckkan91@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_WORKS_ON_HOMEPAGE: 2,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Community taught, bootcamp-trained, friendly-netizen and an enthusiastic front-end web developer seeking hybrid or remote roles in London or South West.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const WORK: Metadata = {
  TITLE: "Work experience",
  DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
  TITLE: "Project experience",
  DESCRIPTION: "A collection of my projects, with links to repositories and site urls.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "twitter-x",
    HREF: "https://x.com/willkancode",
  },
  { 
    NAME: "github",
    HREF: "https://github.com/wkan17012021"
  },
  { 
    NAME: "linkedin",
    HREF: "https://www.linkedin.com/in/william-kan",
  }
];
