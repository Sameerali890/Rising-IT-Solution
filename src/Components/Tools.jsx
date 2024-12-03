import "./Tools.css";
import { HoverEffect } from "./ui/card-hover-effect";
function Tools() {
  const tools = [{
    title: "HTML5",
    icon: "ri:html5-line",
  },
  {
    title: "CSS3",
    icon: "ri:css3-line",
  },
  {
    title: "JavaScript",
    icon: "ri:javascript-line",
  },
  {
    title: "React",
    icon: "ri:reactjs-line",
  },
  {
    title: "Node.js",
    icon: "ri:nodejs-line",
  },
  {
    title: "BootStrap",
    icon: "ri:bootstrap-line",
  },
  {
    title: "GitHub",
    icon: "ri:github-line",
  },
  {
    title: "Next.js",
    icon: "ri:nextjs-line",
  },
  {
    title: "Tailwind CSS",
    icon: "flowbite:tailwind-solid",
  },
  {
    title: "Firebase",
    icon: "ri:firebase-line",
  },
  {
    title: "Python",
    icon: "gravity-ui:logo-python",
  },
  {
    title: "Vs-Code",
    icon: "tabler:brand-vscode",
  },
  {
    title: "SQL",
    icon: "ri:database-line",
  },
  {
    title: "WordPress",
    icon: "lineicons:wordpress-fill",
  },
  {
    title: "PHP",
    icon: "tabler:brand-php",
  },
  {
    title: "JQuery",
    icon: "devicon-plain:jquery-wordmark",
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
