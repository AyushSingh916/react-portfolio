import React, { useState } from 'react';
import ProjectModal from './ProjectModal';

const Project = ({ project }) => {
    const { name, summary, image_url, link, github, technologies } = project;
    const [modalOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="col-span-6 sm:col-span-12">
            <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4">
                <img src={image_url} alt={name} className="w-full mb-4" />
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <p className="mb-4">{summary}</p>
                <button onClick={openModal} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">View Details</button>
                <ProjectModal isOpen={modalOpen} onClose={closeModal} project={{ title: name, summary, technologies }} />
            </article>
        </div>
    );
};

export default Project;