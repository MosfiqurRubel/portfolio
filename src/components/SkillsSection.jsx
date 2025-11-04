import { useState } from "react";
import { cn } from "@/lib/utils";
import Heading from "@/components/ui/Heading";

const skills = [
  //Fronend
  { name: "HTML/CSS/SCSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "React", level: 85, category: "frontend" },
  { name: "Redux", level: 85, category: "frontend" },
  { name: "Vue.js", level: 65, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Bootstrap", level: 90, category: "frontend" },
  { name: "Kendo UI", level: 90, category: "frontend" },
  { name: "WordPress", level: 50, category: "frontend" },
  { name: "React Native", level: 60, category: "frontend" },
  { name: "Angular Material", level: 60, category: "frontend" },

  //Tools
  { name: "Git/GitHub", level: 80, category: "tools" },
  { name: "Figma", level: 50, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "PhpStorm", level: 50, category: "tools" },
  { name: "Jira", level: 50, category: "tools" },
];

const categories = ["all", "frontend", "tools"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <Heading
          align="center"
          className="md:text-4xl mb-12 text-center space-x-2"
        >
          My <span className="text-primary">Skills</span>
        </Heading>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize ",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary cursor-pointer"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
