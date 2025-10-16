// import components
import {useEffect} from 'react';
import { FadeInSection } from '../src/FadeInSection';

// import icons
import Image from '../src/assets/avat.jpg';
import RMIT from '../src/assets/logo.png';
import Eventify from '../src/assets/event.png';
import FieldInspection from '../src/assets/fieldinspection.png';
import Campus from '../src/assets/campus.png';
import Rental from '../src/assets/rental.png';
import { Boxes, Wrench, Languages, Lightbulb, Mail, Home, Briefcase, Code2 } from 'lucide-react';

const App = () => {
  
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0); // Scroll to top on component mount
  },[]);

  return (
    <div>
      <section className="px-4 md:px-90 pt-3 md:pt-10">
        <FadeInSection>
          <div className="flex flex-row md:gap-x-12 items-center justify-between ">
            <div className="w-3/5 flex flex-col items-start">
              <div className="text-2xl md:text-4xl font-bold text-left">Hi, I'm Lam</div>
              <p className="mt-4  md:text-lg text-left">Software Engineering student at RMIT University. Passionate about competitive programming, AI integration, and building innovative solutions.</p>
              <p className="mt-4 text-sm text-gray-700 text-left">District 8, HoChiMinh • tranthanhlam99nt@gmail.com • (+84) 376421569.</p>
            </div>
            <div className="flex-1 flex justify-center items-center">
              <img src={Image} alt="Landing Image" className="w-40 h-40 rounded-full border-1 shadow-2xl" />
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-2">About</h2>
            <div className="w-10 h-1 bg-black rounded mb-6"></div>

            <p className="mb-4 text-gray-800 leading-relaxed">
            Ambitious Software Engineering student with proven expertise in innovative solutions and project leadership. Successfully delivered high-quality results by leading teams to achieve top academic distinctions.
            </p>

            <p className="mb-4 text-gray-800 leading-relaxed">
              Adept at solving complex technical challenges with efficiency and precision, seeking to integrate AI into applications and enhance productivity in professional workflows through an AI-focused internship or learning opportunity.
            </p>

            <p className="text-gray-800 leading-relaxed">
              Currently attending{" "}
              <a href="https://www.rmit.edu.vn" className="text-black font-bold underline">
                RMIT University
              </a>{" "}
              a globally ranked institution (Top 123 worldwide, Top 10 in Australia) in HoChiMinh, Vietnam.
            </p>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="mt-20">
            {/* Section Title */}
            <h2 className="text-2xl font-bold mb-2">Education</h2>
            <div className="w-10 h-1 bg-black rounded mb-6"></div>

            {/* Education Item */}
            <div className="flex items-start gap-4">
              {/* Logo */}
              <img
                src={RMIT}
                alt="RMIT Logo"
                className="w-10 h-10 object-contain"
              />

              <div className="flex-1">
                {/* Top Row: University + Date */}
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-lg">
                      RMIT University{" "}
                      <span className="font-normal">
                        (Royal Melbourne Institute of Technology)
                      </span>
                    </h3>
                    <p className="text-gray-600">
                      Bachelor of Engineering (Software Engineering) (Honours)
                    </p>
                  </div>
                  <span className="text-gray-500 text-sm">10/2023 - Present</span>
                </div>

                {/* Description */}
                <p className="mt-3 text-gray-800 leading-relaxed">
                  Attending a globally ranked institution (Top 123 worldwide, Top 10 in
                  Australia) in HoChiMinh City, Vietnam. Current GPA: 3.6/4. Focusing on software
                  engineering principles, algorithms, data structures, and modern
                  development practices. Actively collaborative projects.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>

        <FadeInSection delay={0.2}>
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-2">Project</h2>
            <div className="w-10 h-1 bg-black rounded mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-4 md:gap-y-6 mt-10 justify-items-center">
              <ProjectCard
                image={Eventify}
                title="PlanEvnt - Full Stack Web Application"
                date="April 2025 - May 2025"
                description="Event Planning & Management System is a full-stack PERN web app for creating, managing, and joining events, with role-based interfaces for admins, organizers, and attendees."
                tags={["PostgreSQL", "ExpressJS", "NodeJS", "ReactJS"]}
                website="https://www.youtube.com/watch?v=iPaUyOKq-UA"
                source="https://github.com/TranThanhLam2005/EventManagementWeb"
              />
              <ProjectCard
                image={Rental}
                title="Rental Agreement Application"
                date="November 2024 - January 2025"
                description="Rental Agreement Application is a Java & JavaFX project built with MVC architecture to help tenants, hosts, and owners collaborate easily."
                tags={["Java", "JavaFx", "MVC Architecture", "ReactJS"]}
                website="https://www.youtube.com/watch?v=i2APgz8VCCI"
                source="https://github.com/TranThanhLam2005/RentalAgreement"
              />
              <ProjectCard
                image={Campus}
                title="Campus Companion"
                date="July 2025 - August 2025"
                description="Campus Companion is an Android app that helps students connect, explore, and enjoy campus life with events, food ordering, study spots, and smart place recommendations."
                tags={["Kotlin ", "Jetpack Compose", "Firebase", "MVVM Architecture"]}
                website="https://www.youtube.com/watch?v=rK8ToKtuQ54"
                source="https://github.com/TranThanhLam2005/Campus-Companion"
              />
              
              <ProjectCard
                image={FieldInspection}
                title="Field Inspection Application"
                date="August 2025 - September 2025"
                description="Field Inspection Application is a mobile app designed to streamline the communication between inspectors and supervisor during the inspection process for Phuong Hai industries."
                tags={["Kotlin ", "Jetpack Compose", "Firebase", "MVVM Architecture"]}
                website="https://www.youtube.com/watch?v=N1hbhho7Pu8"
                source = "https://github.com/TranThanhLam2005/FieldInspectionApp"
              />
            </div>
          </div>
        </FadeInSection>
        <FadeInSection delay={0.2}>
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-2">Leadership and Activities</h2>
            <div className="w-10 h-1 bg-black rounded mb-6"></div>
            <p className="mb-4 text-gray-800 leading-relaxed">
              Throughout my academic journey, I've taken on leadership roles in various projects, demonstrating my ability to guide teams toward successful outcomes and deliver high-quality solutions.
            </p>
            <div className="flex flex-col items-center gap-10 md:gap-14 mt-10">
              {workComponent(
                "July 2025 - August 2025",
                "Campus Companion",
                "Personal Project",
                "RMIT University - Mobile Application Course",
                "Campus Companion is an Android app I developed for my Mobile Development course at RMIT University to support non-academic student life. This project addresses that gap with features such as club and event discovery, food ordering, study room booking, and location-based recommendations. Through this project, I gained hands-on experience in Android app development, UI/UX design, API integration, and implementing real-time location services.",
                false
              )}
              {workComponent(
                "April 2025 - May 2025",
                "PlanEvnt - Full Stack Web Application",
                "Group Project",
                "RMIT University - Full Stack Development Course",
                "For this project, I was part of a five-member team, contributing as both a developer and quality assurance specialist. This experience allowed me to apply my knowledge to a full-scale web application project, OOP design, covering database setup, RESTful API development, and front-end integration. It also strengthened my skills in teamwork, problem-solving, meeting deadlines, and delivering high-quality, user-focused software solutions.",
                false
              )}
              {workComponent(
                "July 2025 - September 2025",
                "Lending Equipment - Full Stack Web Application",
                "Personal Project",
                "Personal Project",
                "This personal project gave me the opportunity to work from the ground up—designing the UI/UX, setting up the database, and developing both the backend and frontend—after completing the Full-Stack Development course at RMIT. Through this experience, I improved my task management skills and learned to work with a wider range of features, technologies, and real-world development scenarios from start to finish.",
                false
              )}
              {workComponent(
                "November 2024 - January 2025",
                "Rental Agreement Application",
                "Project Lead",
                "RMIT University - Further Programming Course",
                "Guided a team of 3 to develop a Java-based desktop application with a cross-platform JavaFX GUI, compatible with Windows and macOS. Applied MVC architecture, and PostgreSQL. Produced technical documentation, streamlining future enhancements and reducing onboarding.",
                true
              )}
            </div>
          </div>
        </FadeInSection>

        <FadeInSection>
          <div className="mt-20 mb-20">
            <h2 className="text-2xl font-bold mb-2">Skills & Interests</h2>
            <div className="w-10 h-1 bg-black rounded mb-6"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 justify-items-center">
              {featureComponent(
                <Code2 className="text-green-500" />, // Programming / coding symbol
                "Programming Languages",
                ["C/C++", "Java", "HTML", "CSS", "JavaScript", "TypeScript", "Kotlin", "SQL"]
              )}
              {featureComponent(
                <Boxes className="text-blue-500" />, // Represents grouped frameworks/libraries
                "Frameworks & Libraries",
                ["React", "Tailwind CSS", "Jetpack Compose", "JavaFX", "Express.js", "Node.js"]
              )}
              {featureComponent(
                <Wrench className="text-yellow-500" />, // Tools icon
                "Tools & Technologies",
                ["Git"]
              )}
              {featureComponent(
                <Languages className="text-pink-500" />, // Language icon
                "Languages",
                ["English", "Vietnamese"]
              )}
              {featureComponent(
                <Lightbulb className="text-purple-500" />, // Represents ideas, learning, interests
                "Interests",
                ["OOP principles", "Design Patterns", "Algorithms", "AI integration"]
              )}

            </div>
          </div>
        </FadeInSection>
      </section>
      <section className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 transform transition-transform duration-300 hover:-translate-y-2">
        <div className="flex items-center gap-6 px-8 py-4 bg-white rounded-full shadow-xl">
          <Home onClick = {() => window.location.reload()} className="w-6 h-6 text-gray-600 transition-transform duration-200 hover:scale-125" strokeWidth={1.5} />
          <Mail className="w-6 h-6 text-gray-600 transition-transform duration-200 hover:scale-125" strokeWidth={1.5} />
          <a href ="https://github.com/TranThanhLam2005" target="_blank" rel="noopener noreferrer"><Code2 className="w-6 h-6 text-gray-600 transition-transform duration-200 hover:scale-125" strokeWidth={1.5} /></a>
          <a href="https://www.linkedin.com/in/tran-lam-a5084a2a9/" target="_blank" rel = "noopener noreferrer" ><Briefcase className="w-6 h-6 text-gray-600 transition-transform duration-200 hover:scale-125" strokeWidth={1.5}/></a>
        </div>
      </section>
    </div>
  );
}


type ProjectProps = {
  image: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  website?: string;
  source?: string;
};

const ProjectCard = ({
  image,
  title,
  date,
  description,
  tags,
  website,
  source,
}: ProjectProps) => {
  return (
    <div className="w-88 min-h-60 bg-white rounded-2xl shadow-2xl transition-transform duration-200 hover:-translate-y-1">
      {/* Image */}
      <div className="p-3 overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-44 fit rounded-lg shadow-md"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-500 text-sm mb-3">{date}</p>
        <p className="text-gray-600 leading-relaxed mb-4">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-black text-white text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          {website && (
            <a
              href={website}
              target="_blank"
              className="flex items-center gap-2 text-white px-3 py-2 rounded-md text-sm font-medium border border-gray-300 hover:bg-gray-100 transition-colors"
            >
              🌐 Video Demo
            </a>
          )}
          {source && (
            <a
              href={source}
              target="_blank"
              className="flex items-center gap-2 border border-gray-300 px-3 py-2 rounded-md text-sm font-medium"
            >
              📄 Source
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
const workComponent = (interval: string, title: string, role: string, job: string, description: string, isLast = false) => {
  return (
    <div className="flex flex-row justify-center items-start md:gap-x-20 gap-x-10">
      <div className="relative flex flex-col items-center w-full md:w-auto mb-4 md:mb-0">
        <div className="flex items-center justify-center h-18 w-18 rounded-full shadow-xl border-1 border-gray-200 ">
          <img
            src={RMIT}
            alt={title}
            className="w-4/5 rounded-full shadow-md border-1 border-gray-200"
          />
        </div>
        {/* Connector line */}
        {!isLast && (
          <div className="block absolute top-18 h-97 md:h-59 w-0.5 bg-gray-200" />
        )}
      </div>
      <div className="flex flex-col max-w-md">
        <p className="text-base font-semibold text-gray-400">{interval}</p>
        <h2 className="text-xl font-semibold">{title}</h2>
        <h2 className="text-base font-semibold">{role}</h2>
        <p className="text-sm text-gray-400 mt-1">{job}</p>
        <p className="text-sm font-normal text-gray-700 mt-3">{description}</p>
      </div>
    </div>
  );
};

const featureComponent = (
  icon: React.ReactNode,
  title: string,
  skills: string[]
) => {
  return (
    <div className="p-4 w-88 min-h-60  rounded-2xl shadow-2xl">
      {icon}
      <h2 className="text-2xl font-semibold my-3">{title}</h2>
      {
        skills.map((skill, index) => (
          <div key={index} className="m-1 py-1 px-2 bg-black w-fit inline-block  rounded-lg">
            <span className="text-white">{skill}</span>
          </div>
        ))
      }
    </div>
  );
};

export default App;