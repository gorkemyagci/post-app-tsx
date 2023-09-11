"use client";
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react'

export default function PostItem({ post }: { post: { userId: number, id: number, title: string, body: string } }) {
    const [showDetails, setShowDetails] = useState<boolean>(false);
    const handleDetail = () => {
        setShowDetails(!showDetails);
    }
    return (
        <li className='px-3 py-2 bg-black w-full flex flex-col items-start gap-4 bg-opacity-10 rounded-lg' key={post.id}>
            <div className='flex items-center w-full justify-between'>
                <div className='flex items-center gap-x-2.5'>
                    <span>{post.id} -</span>
                    <p>{post.title}</p>
                </div>
                <button onClick={handleDetail} className='px-2 py-2 rounded-md bg-white text-black'>See Details</button>
            </div>
            <AnimatePresence>
                {showDetails && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, y: -10 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className='w-full flex flex-col items-start gap-2'>
                        <p>{post.body}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </li>
    )
}
