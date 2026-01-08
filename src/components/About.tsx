const skills = [
  { name: "React", color: "bg-skill-react text-gray-900" },
  { name: "Next.js", color: "bg-skill-next text-white dark:text-black dark:bg-white" },
  { name: "TypeScript", color: "bg-skill-ts text-white" },
  { name: "JavaScript", color: "bg-skill-js text-gray-900" },
  { name: "Tailwind CSS", color: "bg-skill-tailwind text-white" },
  { name: "Node.js", color: "bg-skill-node text-white" },
  { name: "Figma", color: "bg-skill-figma text-white" },
  { name: "UI/UX Design", color: "bg-skill-design text-white" },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm text-muted uppercase tracking-wide mb-8">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg leading-relaxed mb-6">
              I&apos;m a web developer and designer passionate about creating
              digital experiences that are both beautiful and functional. With a
              focus on clean code and thoughtful design, I help bring ideas to
              life on the web.
            </p>
            <p className="text-muted leading-relaxed">
              When I&apos;m not coding, you can find me exploring new design
              trends, learning new technologies, or working on side projects
              that push my creative boundaries.
            </p>
          </div>
          <div>
            <h3 className="text-sm text-muted uppercase tracking-wide mb-4">
              Skills & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-transform hover:scale-105 ${skill.color}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
