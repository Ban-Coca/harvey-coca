import { ArrowUpRight, CodeXml, Network, SquareTerminal } from "lucide-react"
import { ContactForm } from "@/components/ContactForm"
import background from '@/assets/Technical Background.png'
import Footer from '@/components/Footer';
import { motion } from 'motion/react';

export const Contact = () => {
    const handleNavigate = (url: string) => {
        if (url) window.open(url, '_blank');
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <>
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="px-4 sm:px-6 py-12 sm:py-24 md:py-20 max-w-6xl mx-auto flex flex-col">
                <div className="mb-20">
                    <motion.h1 variants={itemVariants} className="">Establish Connection.</motion.h1>
                    <motion.p variants={itemVariants} className="">Open for collaboration on full-stack applications and enterprise solutions. I operate with high availability for mission-critical backend projects.</motion.p>
                </div>

                
                <div className="grid grid-cols-5 grid-rows-4 gap-4">
                    <div className="col-span-3 row-span-4 bg-card border p-8">
                        <div className="flex items-center text-secondary font-mono text-sm gap-2 mb-12">
                            <SquareTerminal />
                            <p>POST /API/V1/CONTACT</p>
                        </div>

                        <ContactForm/>
                    </div>

                    <motion.div variants={itemVariants} whileHover={{ scale: 1.02 }} className="col-span-2 row-span-2 col-start-4 bg-card border p-8">
                        <p className="text-2xl mb-4">
                            Directory
                        </p>
                        <div className="flex flex-col gap-2 text-sm">
                            <motion.div variants={itemVariants} whileHover={{ x: 6 }} className="flex justify-between items-center bg-background border p-2 cursor-pointer" onClick={() => handleNavigate('https://github.com/Ban-Coca')}>
                                <div className="flex items-center gap-4 ">
                                    <CodeXml className="w-3.5 h-3.5"/>
                                    <p>GitHub</p>
                                </div>
                                
                                <ArrowUpRight className="text-white/20"/>
                            </motion.div>

                            <motion.div variants={itemVariants} whileHover={{ x: 6 }} className="flex justify-between items-center bg-background border p-2 cursor-pointer" onClick={() => handleNavigate('https://www.linkedin.com/in/harvey-coca-007553327/')}>
                                <div className="flex items-center gap-4 ">
                                    <Network className="w-3.5 h-3.5"/>
                                    <p>LinkedIn</p>
                                </div>
                                
                                <ArrowUpRight className="text-white/20"/>
                            </motion.div>
                        </div>
                        
                    </motion.div>

                    <motion.div 
                        className="col-span-2 row-span-2 col-start-4 row-start-3 bg-card border relative"
                        style={{
                            backgroundImage: `url(${background})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                        variants={itemVariants}
                        whileHover={{ scale: 1.01 }}
                    >
                        <span className="font-mono bg-card text-secondary text-xs p-2 absolute left-0 bottom-0">
                            SERVER_STATUS: ONLINE
                        </span>
                    </motion.div>
                </div>
            </motion.div>

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