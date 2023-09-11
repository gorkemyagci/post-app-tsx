"use client";
import Input from '@/components/commons/Input';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React from 'react'
import toast from 'react-hot-toast';

const AddPost = () => {
    const [title, setTitle] = React.useState<string>('');
    const [body, setBody] = React.useState<string>('');
    const router = useRouter();
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (title && body) {
            const data = await axios.post('https://jsonplaceholder.typicode.com/posts', {
                title,
                body,
            });
            if (data.status === 201 || data.status === 200) {
                toast.success('Post added successfully');
                setTitle('');
                setBody('');
                router.push('/posts');
            }
        } else {
            toast.error('Please fill in both the title and body fields.');
        }
    }
    return (
        <div className='max-w-4xl mx-auto flex items-center h-[calc(100vh-4rem)]'>
            <div className='w-full rounded-2xl bg-black p-5 relative bg-opacity-5 h-[35em]'>
                <h2 className='text-3xl font-semibold text-indigo-500'>Add Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col justify-between h-full mt-5'>
                        <div className='flex flex-col gap-5'>
                            <Input
                                label='Title'
                                value={title}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setTitle(e.target.value);
                                }}
                                type='text'
                                placeholder='Title'
                            />
                            <textarea value={body} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                                setBody(e.target.value);
                            }} className='w-full h-60 rounded-2xl outline-none bg-white p-5 text-black' placeholder='Body' />
                        </div>
                        <button type='submit' className='w-full absolute bottom-3 h-12 rounded-2xl bg-indigo-500 text-white font-semibold'>Add Post</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddPost