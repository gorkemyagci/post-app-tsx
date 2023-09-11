import PostItem from '@/components/Posts/PostItem';
import axios from 'axios'
import React from 'react'

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

interface PostItemProps {
    postItem: Post;
}


const Posts = async ({ postItem }: PostItemProps) => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = res.data;
    return (
        <div className='max-w-4xl mx-auto my-10 flex items-center gap-10 flex-col'>
            <h1 className='text-3xl font-semibold text-indigo-500'>Posts</h1>
            <ul className='flex items-start flex-col gap-5 w-full'>
                {posts.map((post, _) => {
                    return (
                        <PostItem key={post.id} post={post} />
                    )
                })}
            </ul>
        </div>
    )
}

export default Posts