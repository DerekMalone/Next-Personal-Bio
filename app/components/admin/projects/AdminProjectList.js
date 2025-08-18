'use client';

import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
import { getAllProjects } from "../../../api/data/projectsData";
import ProjectDetails from '../../ProjectDetails';
// import Link from 'next/link';
import AdminProjectCard from './AdminProjectCard';

export default function AdminProjectList() {
    // const router = useRouter();
    const [projects, setProjects] = useState([]);
    // const [error, setError] = useState('');
    
    // Temporary Call for test data

    useEffect(() => {
        const projects= getAllProjects();
        setProjects(projects);
        // setProjects(getAllProjects());
    }, []);


    /* useEffect(() => {
        const loadData = async () => {
            try {
                const { data } = await getAllProjects();
                setProjects(data || []);
            } catch (err) {
                setError('Failed to load data');
            }
        };
        loadData();
    }, []); */


    return (
        // <div>
        <section className='mx-20 py-16 md:py-20'>
            <h2 className='text-center font-header text-4xl font-semibold uppercase text-primary-slate sm:text-5xl lg:text-6xl'>
                Projects
            </h2>
            
                {/* // NOTE: 
                Determine if I need to do a Link with an href OR link while passing props? 
                */}
                {
                    projects.map((project) => (
                        // <ProjectDetails
                        //     key={project.repoName}
                        //     projectId={project.repoName}
                        //     projectImg={project.image}
                        // />
                        <AdminProjectCard
                            key={project.repoName}
                            projectId={project.repoName}
                            projectImg={project.image}
                        />                    
                    // <li key={project.id}>
                    //     <AdminProjectCard
                    //         projectId={project.id}
                    //         projectImg={project.image}
                    //     />
                    //     <Link href={`/admin/projects/${project.id}`}>
                    //         {project.name}
                    //     </Link>
                    // </li>
                ))}
            
            </section>
        // </div>
    );
}