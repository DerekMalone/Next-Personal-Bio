"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { updateAboutMe, getAboutMe } from "../../api/data/aboutMeData";
import { useAuth } from "../../../contexts/AuthContext";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export const AboutMeForm = () => {
    const [aboutMe, setAboutMe] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const session = useAuth();

    useEffect(() => {
        const loadData = async () => {
            try {
                const { data } = await getAboutMe();
                setAboutMe(data || {});
            } catch (err) {
                setError("Failed to load data");
            }
        };
        loadData();
    }, []);

    const handleChange = (e) => {
        setAboutMe({ ...aboutMe, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const { error } = await updateAboutMe(
                session,
                aboutMe.id,
                aboutMe.bio
            );
            if (error) throw error;
            router.push("/admin");
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
        router.push("/admin");
    };

    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4'>
            <div className='max-w-4xl mx-auto'>
                <div className='bg-white rounded-xl shadow-lg border-t-4 border-primary-burgandy p-10'>
                    <div className='mb-8'>
                        <h2 className='text-4xl font-header font-bold text-primary-green drop-shadow-sm'>
                            About Me
                        </h2>
                        <p className='text-lg text-gray-600 mt-2'>Edit your personal biography</p>
                    </div>

                    <form onSubmit={handleSubmit} className='space-y-8'>
                        <div className='space-y-3'>
                                      <label
              htmlFor={aboutMe.id}      
              className='sr-only'       
          >
              Biography text area       
          </label>
                            <textarea
                                id={aboutMe.id}
                                value={aboutMe.bio || ''}
                                rows={12}
                                name="bio"
                                onChange={handleChange}
                                placeholder="Share your journey..."
                                className='w-full px-5 py-4 border-2 border-primary-slate/30 rounded-xl focus:ring-4 focus:ring-primary-green/20 focus:border-primary-green resize-y font-body text-base leading-relaxed transition-all'
                            />
                            <div className='flex justify-end'>
                                <p className='text-sm text-gray-400'>
                                    {aboutMe.bio?.length || 0} characters
                                </p>
                            </div>
                        </div>

                        <div className='flex gap-4 pt-4 border-t border-gray-200'>
                            <Button
                                type="submit"
                                size="lg"
                                disabled={isLoading}
                                className='flex-1 bg-primary-green hover:bg-primary-slate text-white font-semibold text-lg h-12'
                            >
                                {isLoading ? 'Saving...' : 'Save Changes'}
                            </Button>
                            <Button
                                type="button"
                                variant="outline"
                                size="lg"
                                onClick={() => router.push("/admin")}
                                className='px-8 h-12 font-semibold'
                            >
                                Cancel
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
