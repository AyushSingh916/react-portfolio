import React, { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import AnimatedText from "../components/AnimatedText";
import ProjectModal from "../components/ProjectModal";
import ProjectData from "../components/data/Projects";
import Project from "../components/Project";

const Projects = () => {
  const [filter, setFilter] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  console.log(filter);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>Gaurav | Projects</title>
        <meta name="description" content="Gaurav's Projects" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 p-32 xl:p-24 lg:p-16 md:p-12 sm:pt-8">
          <AnimatedText
            text="Imagination Trumps Knowledge! "
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="mb-8 flex items-center">
            <label htmlFor="filter" className="mr-2 dark:text-white">
              Filter by Technology:
            </label>
            <select
              id="filter"
              onChange={handleFilterChange}
              value={filter}
              className="dark:bg-dark dark:text-white border border-solid border-dark rounded-md px-2 py-1"
            >
              <option value="">All</option>
              <option value="Reactjs">Reactjs</option>
              <option value="Nextjs">Nextjs</option>
              <option value="Mern">Mern</option>
              <option value="CSS">CSS</option>
              <option value="Nodejs">Nodejs</option>
            </select>
          </div>

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            {ProjectData.personalProjects.map((project, index) => {
              if (!filter || project.technologies.includes(filter)) {
                return (
                  <Project key={index} project={project} onClick={openModal} />
                );
              }
              return null;
            })}
          </div>
        </Layout>
      </main>
      <ProjectModal
        isOpen={modalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </>
  );
};

export default Projects;
