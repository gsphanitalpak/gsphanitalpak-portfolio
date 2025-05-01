import { skillCategories } from '@/components/data/data';
import { useState } from 'react';


export type SkillCategory = {
    name: string;
    subcategories: {
        name: string;
        skills: string[];
    }[];
};

export const filters: ProjectType[] = [
    'All Projects',
    'Academic Research',
    'Software Development',
    'Mobile Applications',
    'Machine Learning',
    'Personal Projects',
    'Client Projects',
    'Design Projects',
    'Robotics',
    'IoT',
    'Web Development',
    'Minor Projects', // added here
];


// projects
export type ProjectType =
    | 'All Projects'
    | 'Academic Research'
    | 'Software Development'
    | 'Mobile Applications'
    | 'Machine Learning'
    | 'Personal Projects'
    | 'Client Projects'
    | 'Design Projects'
    | 'Robotics'
    | 'IoT'
    | 'Web Development'
    | 'Minor Projects';
