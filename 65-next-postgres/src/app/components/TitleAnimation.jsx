"use client";

import {motion} from 'motion/react';

export default function TitleAnimation(){
    return(
        <>
            <motion.div
            initial={{opacity:0, scale:0.1}}
            animate={{opacity:1, scale:1}}
            transition={{duration:2}}
            >
                <h1>Cats!! Hooray!</h1>
            </motion.div>
        </>
    );
}