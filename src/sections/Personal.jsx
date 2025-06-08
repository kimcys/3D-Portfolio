import React from 'react'
import { personals } from '../constants'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

const Personal = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    })

    return (
        <section id="personal" ref={ref} className='mb-40'>
            <div className="w-full padding-x-lg">
                <div className="mx-auto flex flex-col gap-4">
                    {/* Personal Info Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="rounded-xl p-8 flex flex-col gap-2 items-center text-center"
                    >
                        <div className='w-40'>
                            <img
                                src="/images/aiman.png"
                                alt="Aiman Hakim"
                                className="w-full rounded-full object-cover"
                            />
                        </div>
                        <h3 className="text-white text-2xl font-semibold mt-2">Aiman Hakim</h3>
                        <p className="text-white-50 text-lg">  Eat, Sleep, Code, Football 🔁</p>
                    </motion.div>

                    <div className='grid-3-cols gap-6'>
                        {/* Ability Cards */}
                        {personals.map(({ imgPath, title, desc }, i) => (
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.2 * i }}
                                className="card-border rounded-xl px-4 py-6 flex flex-col gap-4 bg-zinc-900"
                            >
                                <div className="flex items-center justify-center rounded-full">
                                    <p className="w-full text-3xl">{imgPath}</p>
                                </div>
                                <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>
                                <p className="text-white-50 text-lg">{desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Personal