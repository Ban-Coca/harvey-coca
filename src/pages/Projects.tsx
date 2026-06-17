import { SquareTerminal, LayoutGrid, ShieldCog, ChevronRight, Code, ShieldCheck, Building2 } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import Footer from '@/components/Footer';

export const Projects = () => {

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    const titleVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8 },
        },
    };

    return (
        <>
            <div className="px-4 sm:px-6 py-12 sm:py-24 md:py-20 max-w-6xl mx-auto flex flex-col">
                <motion.div 
                    className="border-b pb-8 mb-8"
                    initial="hidden"
                    animate="visible"
                    variants={titleVariants}
                >
                    <h1 className="text-3xl sm:text-5xl md:text-6xl text-white">
                        Projects
                    </h1>
                    <span className="text-sm sm:text-base text-muted-foreground max-w-2xl">
                        A technical documentation of backend architectures, distributed systems, and performance-critical services built for high-scale environments.
                    </span>
                </motion.div>

                <motion.div 
                    className="flex flex-col sm:flex-row pt-4 gap-3 sm:gap-4 border-b pb-8 sm:pb-16 mb-8"
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="shrink-0">
                        <LayoutGrid className='h-6 w-6 sm:h-8 sm:w-8 text-secondary'/>
                    </div>

                    <div className='flex flex-col gap-4 flex-1'>
                        <h3 className='font-bold text-base sm:text-lg'>
                            Rewards & Recognition (RnR) App
                        </h3>
                        <span className='text-xs sm:text-base text-muted-foreground'>
                            Contributed to the development of an enterprise-level employee engagement platform. Focused on building robust backend services and seamless mobile integration for real-time employee appreciation.
                        </span>
                        
                        <div className='bg-card border p-3 sm:p-4 font-mono text-xs sm:text-sm text-muted-foreground flex flex-col gap-1'>
                            <span className='flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-1'>
                                <p>
                                    Feature Implementation
                                </p>
                                <span className='text-muted bg-secondary p-1 border whitespace-nowrap'>
                                    MOBILE_PUSH
                                </span>
                            </span>
                            <span className='flex gap-2 items-center'>
                                <p>
                                    Implemented cross-platform push notifications using React Native Expo and integrated with Spring Framework 5.x REST APIs.
                                </p>
                            </span>
                        </div>

                        <div className='flex flex-wrap gap-2 font-mono text-xs text-muted-foreground'>
                            <div className='flex flex-wrap gap-2'>
                                <span className='bg-card border p-1'>
                                    Spring 5.1
                                </span>
                                <span className='bg-card border p-1'>
                                    React Native
                                </span>
                                <span className='bg-card border p-1'>
                                    Expo
                                </span>
                                <span className='bg-card border p-1'>
                                    Azure
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
                
                <motion.div 
                    className="flex flex-col sm:flex-row pt-4 gap-3 sm:gap-4 border-b pb-8 sm:pb-16 mb-8"
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="shrink-0">
                        <ShieldCog className='h-6 w-6 sm:h-8 sm:w-8 text-secondary'/>
                    </div>

                    <div className='flex flex-col gap-4 flex-1'>
                        <h3 className='font-bold text-base sm:text-lg'>
                            Developer Security Tooling Research
                        </h3>
                        <span className='text-xs sm:text-base text-muted-foreground'>
                            Conducted in-depth research for Alliance Software Inc. on modern DevSecOps tools. Evaluated integration capabilities and security effectiveness for enterprise-level software development life cycles.
                        </span>
                        
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4'>
                            <div className='bg-card border p-3 sm:p-4 font-mono text-xs sm:text-sm text-muted-foreground flex gap-2 items-start sm:items-center'>
                                <span className='shrink-0 mt-1 sm:mt-0'>
                                    <ShieldCheck size={20}/>
                                </span>
                                <span className='flex flex-col'>
                                    <p className='text-muted-foreground text-xs'>
                                        Tools Evaluated
                                    </p>
                                    <p className='text-white text-xs sm:text-sm'>
                                        Snyk, Mend, Claude Code
                                    </p>
                                </span>
                            </div>
                            <div className='bg-card border p-3 sm:p-4 font-mono text-xs sm:text-sm text-muted-foreground flex gap-2 items-start sm:items-center'>
                                <span className='shrink-0 mt-1 sm:mt-0'>
                                    <Building2 size={20}/>
                                </span>
                                <span className='flex flex-col'>
                                    <p className='text-muted-foreground text-xs'>
                                        Organization
                                    </p>
                                    <p className='text-white text-xs sm:text-sm'>
                                        Alliance Software Inc.
                                    </p>
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-2 font-mono text-xs text-muted-foreground'>
                            <div className='flex flex-wrap gap-2'>
                                <span className='bg-card border p-1'>
                                    SAST
                                </span>
                                <span className='bg-card border p-1'>
                                    DevSecOps
                                </span>
                                <span className='bg-card border p-1'>
                                    SCA
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    className="flex flex-col sm:flex-row pt-4 gap-3 sm:gap-4 pb-16"
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="shrink-0">
                        <SquareTerminal className='h-6 w-6 sm:h-8 sm:w-8 text-secondary'/>
                    </div>

                    <div className='flex flex-col gap-4 flex-1'>
                        <h3 className='font-bold text-base sm:text-lg'>
                            Gradify (Capstone Project)
                        </h3>
                        <span className='text-xs sm:text-base text-muted-foreground'>
                            Served as Tech Lead for a comprehensive academic management platform. Spearheaded the backend architecture design and successfully managed deployment on Azure App Service, ensuring scalability and high availability.
                        </span>
                        
                        <div className='bg-card border p-3 sm:p-4 font-mono text-xs sm:text-sm text-muted-foreground flex flex-col gap-1'>
                            <span className='flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-1'>
                                <p>
                                    Technical Implementation
                                </p>
                                <span className='text-muted bg-secondary p-1 border whitespace-nowrap'>
                                    AZURE_CLOUD
                                </span>
                            </span>
                            <span className='flex gap-2 items-start'>
                                <ChevronRight size={16} className="shrink-0 mt-0.5"/>
                                <p>
                                    Led a cross-functional team in developing a full-stack solution using Spring Boot and ReactJS.
                                </p>
                            </span>
                            <span className='flex gap-2 items-start'>
                                <ChevronRight size={16} className="shrink-0 mt-0.5"/>
                                <p>
                                    Architected microservices-ready backend with automated CI/CD pipelines via GitHub Actions to Azure.
                                </p>
                            </span>
                        </div>

                        <div className='flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-4 font-mono text-xs text-muted-foreground flex-wrap'>
                            <div className='flex flex-wrap gap-2'>
                                <span className='bg-card border p-1'>
                                    Spring Boot
                                </span>
                                <span className='bg-card border p-1'>
                                    ReactJS
                                </span>
                                <span className='bg-card border p-1'>
                                    Tailwind
                                </span>
                                <span className='bg-card border p-1'>
                                    Azure
                                </span>
                            </div>

                            <div className='flex items-center gap-1 text-muted-foreground'>
                                <Code size={16}/>
                                <Link to="https://github.com/Ban-Coca/Gradify-Frontend" target='_blank'>
                                    GitHub
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.section 
                className="mt-8 sm:mt-12 px-4 sm:px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
            >
                <Footer/>
            </motion.section>
        </>
        
        
    )
}