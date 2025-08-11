'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getAllProjects } from '../../../api/data/projectsData';
import Link from 'next/link';

export default function AdminProjectList() {
    const router = useRouter();
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    useEffect(() => {
        const loadData = async () => {
            try {
                const { data } = await getAllProjects();
                setProjects(data || []);
            } catch (err) {
                setError('Failed to load data');
            }
        };
        loadData();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h2>Projects</h2>
            <ul>
                {/* // NOTE: 
                Determine if I need to do a Link with an href OR link while passing props? 
                */}
                {projects.map((project) => (
                    <li key={project.id}>
                        <Link href={`/admin/projects/${project.id}`}>
                            {project.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}