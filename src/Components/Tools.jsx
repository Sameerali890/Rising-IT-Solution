import "./Tools.css";
import { HoverEffect } from "./ui/card-hover-effect";
function Tools() {
  const tools = [{
    title: "HTML5",
    icon: "ri:html5-line",
    link: "/tool"
  },
  {
    title: "CSS3",
    icon: "ri:css3-line",
    link: "/tool"
  },
  {
    title: "JavaScript",
    icon: "ri:javascript-line",
    link: "/tool"
  },
  {
    title: "React",
    icon: "ri:reactjs-line",
    link: "/tool"
  },
  {
    title: "Node.js",
    icon: "ri:nodejs-line",
    link: "/tool"
  },
  {
    title: "BootStrap",
    icon: "ri:bootstrap-line",
    link: "/tool"
  },
  {
    title: "GitHub",
    icon: "ri:github-line",
    link: "/tool"
  },
  {
    title: "Next.js",
    icon: "ri:nextjs-line",
    link: "/tool"
  },
  {
    title: "Tailwind CSS",
    icon: "flowbite:tailwind-solid",
    link: "/tool"
  },
  {
    title: "Firebase",
    icon: "ri:firebase-line",
    link: "/tool"
  },
  {
    title: "Python",
    icon: "gravity-ui:logo-python",
    link: "/tool"
  },
  {
    title: "Vs-Code",
    icon: "tabler:brand-vscode",
    link: "/tool"
  },
  {
    title: "SQL",
    icon: "ri:database-line",
    link: "/tool"
  },
  {
    title: "WordPress",
    icon: "lineicons:wordpress-fill",
    link: "/tool"
  },
  {
    title: "PHP",
    icon: "tabler:brand-php",
    link: "/tool"
  },
  {
    title: "JQuery",
    icon: "devicon-plain:jquery-wordmark",
    link: "/tool"
  }

]
  return (
    <div>
      <h1 className="text-4xl py-10  font-bold text-center">Tools & Technologies</h1>
      <div className="max-w-6xl mx-auto px-8">
        <HoverEffect items={tools} />
      </div>
    </div>
  );
}

export default Tools;
