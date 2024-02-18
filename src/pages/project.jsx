import { Link } from "react-router-dom";
import { projects } from '../constants/index';
import { arrow } from '../assets/icons';
import CTA from '../components/CTA';

const Project = () => {
    return (
      <section className="max-container">
        <h1 className="head-text">
          My{" "}
          <span className="blue-gradient_text drop-shadow font-semibold">
            Projects
          </span>
        </h1>

        <p className="text-slate-500 mt-2 leading-relaxed">
          Over the years, I&apos;ve undertaken various endeavors, but these
          particular ones are particularly dear to me. A significant portion of
          them are open-source, meaning you&apos;re welcome to delve into the
          codebase and share your insights for potential improvements. Your
          participation is greatly appreciated!
        </p>

        <div className="flex flex-wrap my-20 gap-16">
          {projects.map((project) => (
            <div className="lg:w-[400px] w-full" key={project.name}>
              <div className="block-container w-12 h-12">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={project.iconUrl}
                    alt="threads"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-col">
                <h4 className="text-2xl font-poppins font-semibold">
                  {project.name}
                </h4>
                <p className="mt-2 text-slate-500">{project.description}</p>
                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <Link
                    to={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600"
                  >
                    Live Link
                  </Link>
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain"
                  />

                  <Link
                    target="_blank"
                    rel={"noopener noreferrer"}
                    to={project.demo}
                    className="ml-auto text-blue-700 italic font-semibold"
                  >
                    Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-slate-200" />

        <CTA />
      </section>
    );
}
 
export default Project;