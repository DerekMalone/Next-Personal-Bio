"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ProjectDetails = ({ projectName, projectImg }) => {
  return (
    <Card className="mx-auto transform transition-all hover:scale-105 md:mx-0 border-brand-forest/20 dark:border-brand-teal/20 bg-brand-light/50 dark:bg-brand-dark/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-center text-lg font-semibold uppercase text-brand-forest dark:text-brand-teal lg:text-xl">
          {projectName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <a href={`https://github.com/DerekMalone/${projectName}`}>
          <Image
            className="w-full rounded-md shadow"
            src={projectImg}
            alt={`${projectName} screenshot`}
            width={500}
            height={500}
          />
        </a>
      </CardContent>
    </Card>
  );
};

export default ProjectDetails;
