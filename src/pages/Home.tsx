import Footer from '@/components/Footer';
import { SquareTerminal, Code, TabletSmartphone, GraduationCap, BriefcaseBusiness } from 'lucide-react';
import meImage from '@/assets/me.jpg';
import { motion } from 'motion/react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
    hover: {
        scale: 1.02,
        borderColor: '#9333ea',
        transition: { duration: 0.2 },
    },
};

export const Home = () => {
    return (
        <>
            <motion.section 
                className="px-4 sm:px-6 py-12 sm:py-24 md:py-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <motion.div 
                        className="flex flex-col gap-2 flex-1 w-full"
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants}>
                            <motion.span 
                                className="text-xs sm:text-sm font-medium tracking-widest text-secondary uppercase"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                FULL-STACK DEVELOPER
                            </motion.span>
                            <motion.h1 
                                className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight text-white"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                            >
                                Van Harvey R. Coca
                            </motion.h1>
                        </motion.div>
                        
                        <motion.p 
                            className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed"
                            variants={itemVariants}
                        >
                            Full-stack developer with hands-on experience in backend development, mobile development, and developer tooling research. Seeking to contribute impactful enterprise solutions.
                        </motion.p>
                        <motion.div 
                            className='border-l-4 border-primary gap-2'
                            variants={itemVariants}
                        >
                            <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-relaxed pl-4 sm:pl-6">
                                Passionate about building robust web and mobile applications with a focus on scalable backend architectures and intuitive user interfaces.
                            </p>
                            <span className="font-mono text-secondary text-xs sm:text-sm pl-4 sm:pl-6">
                                $ current_stack --backend="Java" --frontend="React"
                            </span>
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div 
                        className="flex-1 w-full flex justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <motion.img 
                            src={meImage} 
                            alt="Portfolio" 
                            className="rounded-lg h-56 w-56 sm:h-80 sm:w-80 md:h-96 md:w-96 object-cover border-2 border-primary cursor-pointer"
                            whileHover={{ scale: 1.03 }}
                            transition={{ duration: 0.2 }}
                        />
                    </motion.div>
                </div>
            </motion.section>

            <motion.section 
                className="px-4 sm:px-6 py-12 sm:py-24 md:py-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className="max-w-6xl mx-auto">
                    <motion.div 
                        className="border-b mb-8"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white">
                            Technical Core
                        </h2>
                    </motion.div>
                    <motion.div 
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 font-mono"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {/* Core Tech */}
                        <motion.div 
                            className='p-4 sm:p-6 lg:p-8 bg-card border'
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <SquareTerminal className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                                <span className="text-xs sm:text-sm font-mono tracking-widest text-primary uppercase">
                                    Core Tech
                                </span>
                            </div>
                            <div className="space-y-4 text-xs sm:text-sm">
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
                        </motion.div>

                        {/* Mobile */}
                        <motion.div 
                            className='p-4 sm:p-6 lg:p-8 bg-card border'
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <TabletSmartphone className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                                <span className="text-xs sm:text-sm font-mono tracking-widest text-primary uppercase">
                                    Mobile
                                </span>
                            </div>
                            <div className="space-y-4 text-xs sm:text-sm">
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
                        </motion.div>

                        {/* Tools */}
                        <motion.div 
                            className='p-4 sm:p-6 lg:p-8 bg-card border'
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Code className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" />
                                <span className="text-xs sm:text-sm font-mono tracking-widest text-primary uppercase">
                                    Tools
                                </span>
                            </div>
                            <div className="space-y-4 text-xs sm:text-sm">
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
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            <motion.section 
                className="px-4 sm:px-6 py-12 sm:py-24 md:py-20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <div className='max-w-6xl mx-auto'>
                    <motion.div 
                        className="border-b mb-8 flex flex-col sm:flex-row justify-between gap-2 sm:gap-4"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white">
                            Recent Activities
                        </h2>
                        <span className='font-mono text-xs sm:text-sm hidden sm:block'>
                            view_all.sh
                        </span>
                    </motion.div>
                    <motion.div 
                        className='flex flex-col gap-4'
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div 
                            className='projects flex flex-col sm:flex-row gap-4 sm:gap-6 secondary-card border p-4 sm:p-6 lg:p-8'
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <div className='flex-shrink-0 flex justify-center'>
                                <GraduationCap className='w-8 h-8 text-secondary'/>
                            </div>
                            <div className='flex flex-col flex-1'>
                                <div className='mb-4'>
                                    <div className='flex flex-col sm:flex-row sm:justify-between gap-2'>
                                        <span className='text-base sm:text-lg lg:text-xl font-bold'>
                                            Gradify: Automated Grading & Result Management System
                                        </span>
                                        <span className='text-muted-foreground text-xs sm:text-sm font-mono flex-shrink-0'>
                                            Capstone Project
                                        </span>
                                    </div>
                                        
                                    <p className='font-mono text-xs sm:text-sm'>
                                        Designed and developed a comprehensive system for academic institutions to streamline grading processes.
                                        Implemented using ReactJS and Spring Boot.
                                    </p>
                                </div>
                                <div className='flex flex-wrap gap-2 sm:gap-3 text-xs'>
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
                        </motion.div>

                        <motion.div 
                            className='experience flex flex-col sm:flex-row gap-4 sm:gap-6 secondary-card border p-4 sm:p-6 lg:p-8'
                            variants={cardVariants}
                            whileHover="hover"
                        >
                            <div className='flex-shrink-0 flex justify-center'>
                                <BriefcaseBusiness className='w-8 h-8 text-secondary'/>
                            </div>
                            <div className='flex flex-col flex-1'>
                                <div className='mb-4'>
                                    <div className='flex flex-col sm:flex-row sm:justify-between gap-2'>
                                        <span className='text-base sm:text-lg lg:text-xl font-bold'>
                                            Software Developer Intern @ Alliance Software Inc.
                                        </span>
                                        <span className='text-muted-foreground text-xs sm:text-sm font-mono flex-shrink-0'>
                                            Internship
                                        </span>
                                    </div>
                                        
                                    <p className='font-mono text-xs sm:text-sm'>
                                        Contributed to web application development. Assisted in debugging, code reviews, and feature implementation for internal management tools.
                                    </p>
                                </div>
                                <div className='flex flex-wrap gap-2 sm:gap-3 text-xs'>
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
                        </motion.div>
                    </motion.div>
                    
                </div>
            </motion.section>

            <motion.section 
                className="mt-12 px-4 sm:px-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <Footer/>
            </motion.section>
        </>
    )
}