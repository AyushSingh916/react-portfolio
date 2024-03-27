import React from 'react';

const ProjectModal = ({ isOpen, onClose, project }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="relative z-50 bg-white dark:bg-dark rounded-lg p-8 max-w-lg">
                <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
                <p className="mb-4">{project.summary}</p>
                <div>
                    <h3 className="font-semibold mb-2">Technologies Used:</h3>
                    <ul>
                        {project.technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    </ul>
                </div>
                <div className="mt-4">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;