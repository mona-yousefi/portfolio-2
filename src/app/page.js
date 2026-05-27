// app/page.js
import Image from "next/image";
import { ArrowRight, Phone, Mail, Link, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Software Developer",
    company: "Raimon Darman Takta",
    year: "May 2026 - Current",
    description:
      "Design and develop an E-commerce Project of a compression stocking brand using React, Redux and MUI, Implemented and designed Biography sites specially for cardiovascular Drs",
  },
  {
    title: "Frontend Developer",
    company: "Arianalabs",
    year: "Sep 2025 - March 2026",
    description:
      "implemented vital features of a knowledge-based system with multiple user accesses",
  },
];

const projects = [
  {
    title: "Recipe finder",
    address: "https://github.com/mona-yousefi/RecipeFinder",
    description: "A minimal website to search for your favorites recipes",
  },
  {
    title: "E-commerce website for purchasing spiritual products",
    address: "https://github.com/mona-yousefi/inLahze",
    description: "Purchasing spiritual products related to self-love and peace",
  },
];

export default function HomePage() {
  return (
    <main className="bg-[#03111F] text-white min-h-screen">
      {/* Navbar */}
      <header className="border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-cyan-400 font-bold tracking-wider text-xl">
            Mona Yousefi Nejad
          </h1>

          <nav className="hidden md:flex gap-10 text-sm text-white/70">
            <a href="#home" className="text-cyan-400">
              Home
            </a>
            <a href="#experiences">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact">
            <button className="bg-cyan-400 text-black px-5 py-2 rounded-md text-sm font-medium hover:bg-cyan-300 transition cursor-pointer">
              Hire Me
            </button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center"
      >
        <div>
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Creativity Comes
            {/* <br /> */}
            <span className="text-cyan-400"> First.</span>
          </h2>

          <p className="text-white/60 mt-8 leading-8 max-w-xl">
            An Enthusiastic Creative Technologist specializing in building
            high-performance digital experiences where aesthetics meet technical
            mastery.
          </p>

          <div className="flex gap-4 mt-10">
            <a href="#projects">
              <button className="bg-cyan-400 text-black px-6 py-3 rounded-md font-medium hover:bg-cyan-300 transition cursor-pointer">
                View Projects
              </button>
            </a>

            <a href="#experiences">
              <button className="border border-white/20 px-6 py-3 rounded-md hover:bg-white/5 transition cursor-pointer">
                My Journey
              </button>
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-[360px] h-[420px] rounded-2xl overflow-hidden border border-cyan-400/30 shadow-[0_0_40px_rgba(34,211,238,0.2)]">
            <Image
              src="/myself.png"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experiences" className="border-t border-white/5 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-cyan-400 uppercase tracking-[4px] text-xs mb-4">
            Career Milestones
          </p>

          <h3 className="text-5xl font-bold mb-16">Professional Experience</h3>

          <div className="space-y-6">
            {experiences.map((item, index) => (
              <div
                key={index}
                className="bg-[#081B2E] border border-white/5 rounded-2xl p-8 flex justify-between items-start hover:border-cyan-400/30 transition"
              >
                <div>
                  <h4 className="text-2xl font-semibold">{item.title}</h4>

                  <p className="text-cyan-400 mt-1">
                    {item.company} • {item.year}
                  </p>

                  <p className="text-white/60 mt-5 max-w-3xl leading-7">
                    {item.description}
                  </p>
                </div>

                <ArrowRight className="text-cyan-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-white/5 py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-16">
            <div>
              <p className="text-cyan-400 uppercase tracking-[4px] text-xs mb-4">
                Case Studies
              </p>

              <h3 className="text-5xl font-bold">Selected Works</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-[#081B2E] border border-white/5 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300"
              >
                <div className="p-6">
                  <h4 className="text-2xl font-semibold mt-5">
                    {project.title}
                  </h4>

                  <p className="text-white/60 mt-4 leading-7">
                    {project.description}
                  </p>

                  <a href={project.address}>
                    <button className="flex items-center gap-2 mt-6 text-cyan-400 font-medium cursor-pointer">
                      View Case
                      <ArrowRight size={18} />
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <div
        id="contact"
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 p-10 max-w-7xl mx-auto"
      >
        {/* Email */}
        <a
          href="mailto:m.yousefinejad78@gmail.com"
          className="group bg-[#081B2E] border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 hover:-translate-y-1 transition duration-300"
        >
          <div className="w-14 h-14 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-5">
            <Mail className="text-cyan-400" size={26} />
          </div>

          <p className="text-white/40 text-sm uppercase tracking-widest mb-2">
            Email
          </p>

          <h4 className="text-md font-semibold group-hover:text-cyan-400 transition">
            m.yousefinejad78@gmail.com
          </h4>
        </a>

        {/* Phone */}
        <a
          href="tel:+989228367175"
          className="group bg-[#081B2E] border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 hover:-translate-y-1 transition duration-300"
        >
          <div className="w-14 h-14 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-5">
            <Phone className="text-cyan-400" size={26} />
          </div>

          <p className="text-white/40 text-sm uppercase tracking-widest mb-2">
            Phone
          </p>

          <h4 className="text-md font-semibold group-hover:text-cyan-400 transition">
            +98 922 836 7175
          </h4>
          <h4 className="text-md font-semibold group-hover:text-cyan-400 transition">
            +98 939 395 7545
          </h4>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/mona-yousefi"
          target="_blank"
          className="group bg-[#081B2E] border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 hover:-translate-y-1 transition duration-300"
        >
          <div className="w-14 h-14 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-5">
            <Link className="text-cyan-400" size={26} />
          </div>

          <p className="text-white/40 text-sm uppercase tracking-widest mb-2">
            GitHub
          </p>

          <h4 className="text-md font-semibold group-hover:text-cyan-400 transition">
            Mona Yousefinejad
          </h4>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/mona-yousefinejad/"
          target="_blank"
          className="group bg-[#081B2E] border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 hover:-translate-y-1 transition duration-300"
        >
          <div className="w-14 h-14 rounded-xl bg-cyan-400/10 flex items-center justify-center mb-5">
            <ExternalLink className="text-cyan-400" size={26} />
          </div>

          <p className="text-white/40 text-sm uppercase tracking-widest mb-2">
            LinkedIn
          </p>

          <h4 className="text-md font-semibold group-hover:text-cyan-400 transition break-all">
            Mona Yousefinejad
          </h4>
        </a>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/50">
          <h4 className="text-cyan-400 font-semibold">Mona Yousefinejad</h4>

          <p>© 2026. ALL RIGHTS RESERVED.</p>

          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/mona-yousefinejad/">
              LinkedIn
            </a>
            <a href="https://github.com/mona-yousefi">GitHub</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
