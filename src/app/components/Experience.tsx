import { EXPERIENCES } from "../utils/constants";
const Experience = () => {
  return (
    <section className="container m-auto px-6 py-16">
      <h4 className="mb-8 text-3xl font-bold text-center md:text-left">
        Experience
      </h4>
      {EXPERIENCES.map((exp) => (
        <div key={exp.id} className="grid grid-cols-1 md:grid-cols-6 my-10">
          <div className="flex flex-col col-span-2 mb-4 md:mb-0">
            <h5 className="text-xl md:text-2xl font-bold">{exp.title}</h5>
            <h6 className="text-lg font-bold">{exp.company}</h6>
            <h6 className="text-lg">{exp.location}</h6>
            <p>
              {exp.from} - {exp.to}
            </p>
          </div>
          <div className="flex flex-col col-span-4">
            {exp.description.map((des) => (
              <li key={des}>{des}</li>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
