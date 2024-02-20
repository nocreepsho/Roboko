'use client';

import { useState } from "react";
import Image from "next/image";
import { RobotProps } from "@/types";
import { motion, Variants } from "framer-motion";

import { RobotDetails } from "@/components";

interface RobotCardProps {
    robot: RobotProps;
}

const RoboCard = ({ robot }: RobotCardProps) => {
    const { name, image, price, desc } = robot;

    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 100, color: '#595959' }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut", duration: 0.8 }}
            // viewport={{ once: true }}
            whileHover={{color: '#29b492'}}
            onClick={() => setIsOpen(true)}
            className="robot-card group">
            <div className="robot-card__content">
                <h2 className="robot-card__content-title">
                    {name}
                </h2>
            </div>

            <div className="relative xl:w-[300px] xl:h-[300px] md:w-76 md:h-76 w-60 h-60 my-3 object-contain">

                <Image
                    src={image}
                    alt={name}
                    fill={true}
                    priority
                    className="object-contain rounded-lg"
                />
                <motion.div 
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.9}}
                transition={{ ease: "easeOut", duration: 0.2}}
                className="absolute top-0 left-0 w-full h-full inset-0 border-4 border-primary-green-100 rounded-lg z-10">
                </motion.div>
            </div>

            <RobotDetails isOpen={isOpen} closeModal={()=>setIsOpen(false)} robot={robot}/>
        </motion.div>
    )
}

export default RoboCard