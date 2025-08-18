'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { getProject } from '../../../api/data/projectsData';


export default function AdminProjectCard({ projectId, projectImg }) {
  const [project, setProject] = useState({});
  const [editedProject, setEditedProject] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

// Temporary Call for test data
// TODO: Try again once github api limit has been reset.
  useEffect(() => {
    const loadData = async () => {
      try {
        const { data } = await getProject(projectId);
        setProject(data || {});
        setEditedProject(data || {});
      } catch (err) {
        setError('Failed to load data');
      }
      console.log(data);
    };
    loadData();
  }, [projectId]);

// TODO: Need to make this useEffect the official one down the road. 
  // Fetch project data
  // useEffect(() => {
  //   // Fetch project data using your Supabase client
  // }, [projectId]); 

  const handleSave = async (e) => {
    e.preventDefault();
    // Save to Supabase
    // Refresh data
    console.log(editedProject);
    setProject(editedProject);
    setIsEditing(false);
  };

  const handleDelete = async () => {
    // Delete from Supabase
    // Redirect to projects list
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setEditedProject(prev => ({
        ...prev,
        [id]: value
    }));
};

const handleCancel = () => {
    setIsEditing(false);
    setEditedProject(project);
};

  // if (!project) return <div>Loading...</div>;
  
  return (
    <div className="p-4">
      {isEditing ? (        
        <div>
          <h2>Project Form</h2>
          <form onSubmit={handleSave}>
              <div className="flex flex-col gap-4">
              <input type="text" id="repoName" value={editedProject.repoName} onChange={handleChange} placeholder="Project Name" />
              <input type="text" id="url" value={editedProject.url} onChange={handleChange} placeholder="Project URL" />
              <input type="text" id="image" value={editedProject.image} onChange={handleChange} placeholder="Project Image" />
              <button type="submit">Save</button>
              </div>
              <button type="button" onClick={handleCancel}>Cancel</button>
          </form>
        </div>  
      ) : (
        
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">{project.repoName}</h2>
            <div className="space-x-2">
              <button onClick={() => setIsEditing(true)}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
          {/* Project details display */}
          <section className='mx-auto transform transition-all hover:scale-105 md:mx-0'>
          <h2 className='text-center pt-8 text-lg font-semibold uppercase text-primary-green group-hover:text-black group-hover:drop-shadow-xl lg:text-xl'>
                  {project.repoName}
                </h2>
                <a href={project.html_url} type='button' className='btn btn-link'>
                  <Image
                    className='w-full shadow'
                    src={projectImg}
                    alt={`${project.repoName} screenshot`}
                    width={500}
                    height={500}
                    />
                </a>
                              </section>
          </div>
      
    )}
    </div>
  );
}