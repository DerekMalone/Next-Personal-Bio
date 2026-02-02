"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { updateAboutMe, getAboutMe } from "@/app/api/data/aboutMeData";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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
    };

    return (
        <div className="min-h-screen bg-brand-light dark:bg-brand-dark py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <Card className="border-t-4 border-brand-teal">
                    <CardHeader>
                        <CardTitle className="text-3xl text-brand-forest dark:text-brand-teal">
                            About Me
                        </CardTitle>
                        <CardDescription>Edit your personal biography</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {error && (
                                <div className="text-red-600 dark:text-red-400 text-sm">
                                    {error}
                                </div>
                            )}

                            <div className="space-y-2">
                                <Label htmlFor="bio">Biography</Label>
                                <Textarea
                                    id="bio"
                                    name="bio"
                                    value={aboutMe.bio || ""}
                                    rows={12}
                                    onChange={handleChange}
                                    placeholder="Share your journey..."
                                    className="resize-y"
                                />
                                <p className="text-sm text-muted-foreground text-right">
                                    {aboutMe.bio?.length || 0} characters
                                </p>
                            </div>

                            <Separator />

                            <div className="flex gap-4">
                                <Button
                                    type="submit"
                                    size="lg"
                                    disabled={isLoading}
                                    className="flex-1 bg-brand-forest hover:bg-brand-teal text-brand-light"
                                >
                                    {isLoading ? "Saving..." : "Save Changes"}
                                </Button>
                                <Button
                                    type="button"
                                    variant="outline"
                                    size="lg"
                                    onClick={() => router.push("/admin")}
                                >
                                    Cancel
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
