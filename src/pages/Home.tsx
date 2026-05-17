import Footer from '@/components/Footer';
import { SquareTerminal, Code, TabletSmartphone, GraduationCap, BriefcaseBusiness } from 'lucide-react';
import meImage from '@/assets/me.jpg';

export const Home = () => {
    return (
        <>
            <section className="px-6 py-24 md:py-20">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col gap-2 flex-1">
                        <div>
                            <span className="text-sm font-medium tracking-widest text-secondary uppercase">
                                FULL-STACK DEVELOPER
                            </span>
                            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
                                Van Harvey R. Coca
                            </h1>
                        </div>
                        
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Full-stack developer with hands-on experience in backend development, mobile development, and developer tooling research. Seeking to contribute impactful enterprise solutions.
                        </p>
                        <div className='border-l-4 border-primary gap-2'>
                            <p className="text-base text-muted-foreground leading-relaxed pl-6">
                                Passionate about building robust web and mobile applications with a focus on scalable backend architectures and intuitive user interfaces.
                            </p>
                            <span className="font-mono text-secondary text-sm pl-6">
                                $ current_stack --backend="Java" --frontend="React"
                            </span>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="flex-1 w-full md:w-auto flex justify-center md:justify-end">
                        <img 
                            src={meImage} 
                            alt="Portfolio" 
                            className="rounded-lg h-80 md:h-96 w-80 md:w-96 object-cover border-2 border-primary"
                        />
                    </div>
                </div>
            </section>

            <section className="px-6 py-24 md:py-20">
                <div className="max-w-6xl mx-auto">
                    <div className="border-b mb-8">
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Technical Core
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-mono">
                        {/* Core Tech */}
                        <div className='p-8 bg-card border'>
                            <div className="flex items-center gap-3 mb-6">
                                <SquareTerminal className="w-6 h-6 text-primary" />
                                <span className="text-base font-mono tracking-widest text-primary uppercase">
                                    Core Tech
                                </span>
                            </div>
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">TypeScript (React JS)</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-secondary">Spring Framework</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-secondary">Spring Boot</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-secondary">PostgreSQL/MySQL</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Cloud (Azure/AWS)</span>
                                </div>
                            </div>
                        </div>

                        {/* Mobile */}
                        <div className='p-8 bg-card border'>
                            <div className="flex items-center gap-3 mb-6">
                                <TabletSmartphone className="w-6 h-6 text-primary" />
                                <span className="text-base font-mono tracking-widest text-primary uppercase">
                                    Mobile
                                </span>
                            </div>
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">React Native</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Firebase</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-secondary">REST APIs</span>
                                </div>
                            </div>
                        </div>

                        {/* Tools */}
                        <div className='p-8 bg-card border'>
                            <div className="flex items-center gap-3 mb-6">
                                <Code className="w-6 h-6 text-primary" />
                                <span className="text-base font-mono tracking-widest text-primary uppercase">
                                    Tools
                                </span>
                            </div>
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between items-center">
                                    <span className="text-secondary">Git / GitHub</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Docker</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Unit Testing</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-muted-foreground">CI/CD</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 py-24 md:py-20">
                <div className='max-w-6xl mx-auto'>
                    <div className="border-b mb-8 flex justify-between">
                        <h2 className="text-4xl md:text-5xl font-bold text-white">
                            Recent Activities
                        </h2>
                        <span className='font-mono m-0'>
                            view_all.sh
                        </span>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='projects flex secondary-card border p-8'>
                            <div className='w-16 justify-items-center'>
                                <GraduationCap className='w-8 h-8 text-secondary'/>
                            </div>
                            <div className='flex flex-col ml-8'>
                                <div className='mb-4'>
                                    <div className='flex justify-between'>
                                        <span className='text-xl font-bold'>
                                            Gradify: Automated Grading & Result Management System
                                        </span>
                                        <span className='text-muted-foreground text-sm font-mono'>
                                            Capstone Project
                                        </span>
                                    </div>
                                        
                                    <p className='font-mono text-sm'>
                                        Designed and developed a comprehensive system for academic institutions to streamline grading processes.
                                        Implemented using ReactJS and Spring Boot.
                                    </p>
                                </div>
                                <div className='flex gap-3 text-xs'>
                                    <span className='text-secondary bg-muted py-1 px-2'>
                                        REACTJS
                                    </span>
                                    <span className='text-secondary bg-muted py-1 px-2'>
                                        SPRING BOOT
                                    </span>
                                    <span className='text-primary bg-muted py-1 px-2'>
                                        AZURE
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className='experience flex secondary-card border p-8'>
                            <div className='w-16 justify-items-center'>
                                <BriefcaseBusiness className='w-8 h-8 text-secondary'/>
                            </div>
                            <div className='flex flex-col ml-8'>
                                <div className='mb-4'>
                                    <div className='flex justify-between'>
                                        <span className='text-xl font-bold'>
                                            Software Developer Intern @ Alliance Software Inc.
                                        </span>
                                        <span className='text-muted-foreground text-sm font-mono'>
                                            Internship
                                        </span>
                                    </div>
                                        
                                    <p className='font-mono text-sm'>
                                        Contributed to web application development. Assisted in debugging, code reviews, and feature implementation for internal management tools.
                                    </p>
                                </div>
                                <div className='flex gap-3 text-xs'>
                                    <span className='text-primary bg-muted py-1 px-2'>
                                        FULL-STACK
                                    </span>
                                    <span className='text-secondary bg-muted py-1 px-2'>
                                        SPRING FRAMEWORK
                                    </span>
                                    <span className='text-secondary bg-muted py-1 px-2'>
                                        REACT NATIVE
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>

            <section className="mt-42 px-6">
                <Footer/>
            </section>
        </>
    )
}