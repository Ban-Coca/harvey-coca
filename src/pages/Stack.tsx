import { Building2, CircleCheck, CloudCheck, Compass, Database, HardDrive, ShieldCheck, ShieldUser, SquareTerminal, Wrench } from "lucide-react"
import asset from '@/assets/backgroundAsset.png'
import Footer from '@/components/Footer';
import { motion } from 'motion/react';

export const Stack = () => {
    return (
        <>
            <div className="px-4 sm:px-6 py-12 sm:py-24 md:py-20 max-w-6xl mx-auto flex flex-col">
                <div className="">
                    <span className="text-xs tracking-widest font-mono text-secondary">
                        0x02 // CAPABILITIES
                    </span>
                </div>
                <div className="">
                    <div className="flex-1">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            System Architecture &<br />Core Tooling
                        </h1>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-4 mb-12">
                        <p className="text-base sm:text-lg text-gray-300 leading-relaxed md:flex-1">
                            A focused collection of technologies engineered for performance, reliability, and scale. My stack is built around modern compiled languages and cloud-native infrastructure.
                        </p>

                        <div className="border border-blue-500 p-4 sm:p-6 rounded flex-shrink-0 w-full md:w-auto">
                            <div className="text-xs tracking-widest mb-3 font-mono">
                                <span className="text-secondary">■</span> SYSTEM STATUS
                            </div>
                            <div className="text-sm font-mono text-secondary">
                                READY::ALL_SYSTEMS_OPTIMAL
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-16 auto-rows-max lg:auto-rows-auto lg:grid-rows-7">
                    {/* Languages Card */}
                    <div className="lg:col-span-2 lg:row-span-4 bg-card border p-4 sm:p-6 text-base">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-lg sm:text-xl font-bold">
                                Languages
                            </span>
                            <span className="text-primary flex-shrink-0">
                                <SquareTerminal size={20}/>
                            </span>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between text-sm sm:text-base">
                                    <span>Java</span>
                                    <span className="text-secondary font-mono">90%</span>
                                </div>
                                <div className="w-full bg-accent h-1">
                                    <div className="bg-primary h-1" style={{width: '90%'}}></div>
                                </div>
                                <div className="font-mono text-xs sm:text-sm">
                                    Enterprise Applications, Spring Ecosystem
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between text-sm sm:text-base">
                                    <span>JavaScript</span>
                                    <span className="text-secondary font-mono">85%</span>
                                </div>
                                <div className="w-full bg-accent h-1">
                                    <div className="bg-primary h-1" style={{width: '85%'}}></div>
                                </div>
                                <div className="font-mono text-xs sm:text-sm">
                                    Full-stack Development, React, Node.js
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between text-sm sm:text-base">
                                    <span>HTML/CSS</span>
                                    <span className="text-secondary font-mono">90%</span>
                                </div>
                                <div className="w-full bg-accent h-1">
                                    <div className="bg-primary h-1" style={{width: '90%'}}></div>
                                </div>
                                <div className="font-mono text-xs sm:text-sm">
                                    Responsive Design, Tailwind CSS, Accessibility
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between text-sm sm:text-base">
                                    <span>TypeScript</span>
                                    <span className="text-secondary font-mono">90%</span>
                                </div>
                                <div className="w-full bg-accent h-1">
                                    <div className="bg-primary h-1" style={{width: '90%'}}></div>
                                </div>
                                <div className="font-mono text-xs sm:text-sm">
                                    Type-safe Development, Full-stack Apps
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Frameworks & Cloud */}
                    <div className="lg:col-span-3 lg:row-span-4 lg:col-start-3 bg-card border p-4 sm:p-6 text-base">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-lg sm:text-xl font-bold">Frameworks & Cloud</span>
                            <span className="text-primary flex-shrink-0"><CloudCheck size={20}/></span>
                        </div>

                        <div className="flex flex-col sm:flex-row font-mono gap-4">
                            <div className="bg-background p-3 sm:p-4 border flex-1">
                                <p className="mb-2 text-sm sm:text-base">Web & Mobile Frameworks</p>

                                <div className="text-xs sm:text-sm flex flex-wrap gap-2">
                                    <span className="bg-white border text-black px-2 py-1">Spring Boot</span>
                                    <span className="bg-accent px-2 py-1">ReactJS/TS</span>
                                    <span className="bg-accent px-2 py-1">React Native (Expo)</span>
                                    <span className="bg-accent px-2 py-1">Tailwind</span>
                                    <span className="bg-accent px-2 py-1">ShadCN</span>
                                </div>
                            </div>
                            <div className="bg-background p-3 sm:p-4 border flex-1">
                                <p className="mb-2 text-sm sm:text-base">Cloud & DevOps</p>

                                <div className="text-xs sm:text-sm flex flex-wrap gap-2">
                                    <span className="bg-accent px-2 py-1">Azure App Services</span>
                                    <span className="bg-accent px-2 py-1">AWS</span>
                                    <span className="bg-accent px-2 py-1">GitHub</span>
                                    <span className="bg-accent px-2 py-1">Azure DevOps Server</span>
                                    <span className="bg-accent px-2 py-1">Postman</span>
                                    <span className="bg-accent px-2 py-1">Snyk</span>
                                    <span className="bg-accent px-2 py-1">SonarQube</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Data Persistence */}
                    <div className="lg:col-span-3 lg:row-span-3 lg:row-start-5 bg-card border p-4 sm:p-6 text-base">
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-2">
                                <p className="text-lg sm:text-xl font-bold">Data Persistence</p>
                                <span className="text-primary flex-shrink-0"><Database size={20}/></span>
                            </div>
                            <p className="text-sm sm:text-base">Relational & NoSQL strategies for high availability.</p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 font-mono text-xs sm:text-sm">
                                <p className="text-primary flex-shrink-0">PRIMARY</p>

                                <div className="flex-grow border-t border-dashed border-secondary"></div>

                                <div className="flex gap-1 items-center flex-shrink-0">
                                    <p>PostgreSQL</p>
                                    <span className="bg-secondary text-accent px-1 text-xs">LATEST</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 font-mono text-xs sm:text-sm">
                                <p className="text-primary flex-shrink-0">SECONDARY</p>

                                <div className="flex-grow border-t border-dashed border-secondary"></div>

                                <div className="flex gap-1 items-center flex-shrink-0">
                                    <p>MySQL</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 font-mono text-xs sm:text-sm">
                                <p className="text-primary flex-shrink-0">NoSQL</p>

                                <div className="flex-grow border-t border-dashed border-secondary"></div>

                                <div className="flex gap-1 items-center flex-shrink-0">
                                    <p>Mongo/Firebase</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dev Workflow */}
                    <div className="lg:col-span-2 lg:row-span-3 lg:col-start-4 lg:row-start-5 bg-card border p-4 sm:p-6 text-base">
                        <div className="flex justify-between items-center mb-4">
                            <p className="text-lg sm:text-xl font-bold">Dev Workflow</p>
                            <span className="text-primary flex-shrink-0"><Wrench size={20}/></span>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex gap-3 px-3 py-3 bg-background border text-sm sm:text-base">
                                <HardDrive size={18} className="text-secondary flex-shrink-0"/>
                                <p>Git / GitHub Actions CI/CD</p> 
                            </div>
                            <div className="flex gap-3 px-3 py-3 bg-background border text-sm sm:text-base">
                                <ShieldUser size={18} className="text-secondary flex-shrink-0"/>
                                <p>OAuth2 / JWT</p> 
                            </div>
                            <div className="flex gap-3 px-3 py-3 bg-background border text-sm sm:text-base">
                                <ShieldCheck size={18} className="text-secondary flex-shrink-0"/>
                                <p>Snyk / SonarQube</p> 
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Philosophy Section */}
                <div className="bg-card border p-4 sm:p-6 text-base">
                    <div className="flex justify-between items-start mb-8">
                        <h2 className="text-lg sm:text-xl font-bold">Engineering Philosophy</h2>
                    </div>
                    
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-4">
                        <div className="font-mono flex-1">
                            <div className="flex gap-2 text-secondary items-center mb-4">
                                <CircleCheck className="h-4 w-4 flex-shrink-0"/>
                                <span className="text-xs">CODE QUALITY</span>
                            </div>
                            <p className="text-xs sm:text-sm">
                                "Code is for humans to read and only incidentally for machines to execute." I prioritize clean, self-documenting code with strict linting and idiomatic patterns.
                            </p>
                        </div>

                        <div className="font-mono flex-1">
                            <div className="flex gap-2 text-secondary items-center mb-4">
                                <Building2 className="h-4 w-4 flex-shrink-0"/>
                                <span className="text-xs">TEST DRIVEN</span>
                            </div>
                            <p className="text-xs sm:text-sm">
                                100% test coverage isn't the goal; meaningful coverage is. I focus on integration and end-to-end tests that validate business logic and system resilience.
                            </p>
                        </div>

                        <div className="font-mono flex-1">
                            <div className="flex gap-2 text-secondary items-center mb-4">
                                <Compass className="h-4 w-4 flex-shrink-0"/>
                                <span className="text-xs">SYSTEM DESIGN</span>
                            </div>
                            <p className="text-xs sm:text-sm">
                                Simple is better than complex. I build systems that are modular, observable, and failure-tolerant, favoring asynchronous communication where appropriate.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Debug Console */}
                <div 
                    style={{ backgroundImage: `url(${asset})`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
                    className="w-full h-40 sm:h-48 md:h-64 mt-8 sm:mt-12 flex justify-center items-center">
                    <div className="font-mono bg-card border-2 border-foreground flex flex-col justify-center items-center p-4 sm:p-8 text-center">
                        <p className="text-xs">DEBUG_CONSOLE</p>
                        <p className="text-xs sm:text-sm text-secondary">./build --all-capabilities</p>
                    </div>
                </div>
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