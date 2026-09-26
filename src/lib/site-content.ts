import { Boxes, Code2, Compass, Globe2, Lightbulb, Radio, ShieldCheck, Sparkles, Users } from "lucide-react";

export const siteMeta = {
  name: "SparkRelay",
  tagline: "Small sparks, connected into useful software.",
  githubUrl: "https://github.com/sparkrelay",
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

export const highlights = [
  {
    title: "Ideas → Experiments",
    description:
      "We prototype quickly, validate value with real usage, then focus on what deserves to keep growing.",
    icon: Lightbulb,
  },
  {
    title: "Useful by default",
    description:
      "Every project should solve a practical problem, reduce friction, or teach something concrete.",
    icon: Code2,
  },
  {
    title: "Open by design",
    description:
      "Code, roadmap, and discussion stay in the open so collaboration is part of delivery, not an afterthought.",
    icon: Users,
  },
];

export const projects = [
  {
    name: "SparkRelay",
    tag: "Organization",
    description:
      "The umbrella for experiments, tools, and engineering practices built around pragmatic open source.",
    status: "Active",
    icon: Sparkles,
  },
  {
    name: "Station",
    tag: "Platform",
    description:
      "A workspace for utilities and services that support development workflows across the ecosystem.",
    status: "Building",
    icon: Radio,
  },
  {
    name: "Hub",
    tag: "Community",
    description:
      "The connective layer between repositories, contributors, and knowledge sharing.",
    status: "Planning",
    icon: Boxes,
  },
];

export const principles = [
  {
    title: "Ship meaningful increments",
    detail:
      "Short release loops keep momentum and create immediate value for contributors and users.",
    icon: Compass,
  },
  {
    title: "Prefer reliability over complexity",
    detail:
      "Stable building blocks and clean interfaces make projects easier to maintain and extend.",
    icon: ShieldCheck,
  },
  {
    title: "Build for the open web",
    detail:
      "Interoperability and accessible defaults ensure software remains useful beyond one stack.",
    icon: Globe2,
  },
];
