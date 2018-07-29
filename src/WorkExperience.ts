import { IExperience } from "./components/Section";
import facebookActive from "./media/facebookActive.svg";
import facebookPassive from "./media/facebookPassive.svg";
import imperialActive from "./media/imperialActive.png";
import imperialPassive from "./media/imperialPassive.png";
import netcraftActive from "./media/netcraftActive.jpg";
import netcraftPassive from "./media/netcraftPassive.jpg";
import palantirActive from "./media/palantirActive.png";
import palantirPassive from "./media/palantirPassive.png";

export const WORK_EXPERIENCE: IExperience[] = [
  {
    activeLogo: facebookActive,
    description: "Some interesting description of the work I shall carry out at Facebook",
    passiveLogo: facebookPassive,
    role: "Software Engineer",
    time: "Oct 2018 - present",
    title: "Facebook",
  },
  {
    activeLogo: imperialActive,
    description: "Running weekly tutorials for first year Computing students, teaching them programming in Haskell and Java as well as adjacent skills such as testing and object-oriented design. Correcting weekly exercising, presenting constructive feedback.",
    passiveLogo: imperialPassive,
    role: "Undergraduate Teaching Assistant",
    time: "Oct 2017 - Mar 2018",
    title: "Imperial College London",
  },
  {
    activeLogo: palantirActive,
    description: "Worked as a frontend developer on a customer-facing product. My main responsibilities were feature development, fixing bugs and refactoring code. I had an active role in the shaping of new features, both from a UX and from a software architecture standpoint. Besides the technical aspects of my work, I carried out user interviews, where we received feedback on the recent development, discussed the near-future product direction and tried to understand the users' pain-points.",
    passiveLogo: palantirPassive,
    role: "Forward Deployed Engineer Intern",
    time: "Mar 2017 - Oct 2017",
    title: "Palantir Technologies",
  },
  {
    activeLogo: imperialActive,
    description: "Running weekly tutorials for first year Computing students, teaching them programming in Haskell and Java as well as adjacent skills such as testing and object-oriented design. Correcting weekly exercising, presenting constructive feedback.",
    passiveLogo: imperialPassive,
    role: "Undergraduate Teaching Assistant",
    time: "Oct 2016 - Mar 2017",
    title: "Imperial College London",
  },
  {
    activeLogo: palantirActive,
    description: "Worked in a medium sized team on a product delivered to a CPG company. My work impacted on both the frontend and the backend of the project. On the frontend I refactored and added new features to a React Redux application written in TypeScript, while on the Java Dropwizard backend, my activity focused on querying the data required to respond to the requests received in an efficient manner. As side tasks, I worked on data processing and collection.",
    passiveLogo: palantirPassive,
    role: "Forward Deployed Engineer Intern",
    time: "Jun 2016 - Sep 2016",
    title: "Palantir Technologies",
  },
  {
    activeLogo: netcraftActive,
    description: "Worked on a system for identifying fraudulent emails. I have made contributions to an interface which allowed humans to oversee the classification process. Working in the back end, I have coded features related to email processing such as parsing, encoding/decoding, handling reports. I have mainly worked in Perl, also using small amounts of JavaScript, HTML and CSS.",
    passiveLogo: netcraftPassive,
    role: "Internet Services Developer",
    time: "Jun 2015 - Sep 2015",
    title: "Netcraft Ltd",
  },
];
