import { Suspense } from "react"
import Posts from "./components/posts"

export default async function PageBlog() {
   type post = {
        id: number,
        title: string,
        content: string
    }
    const post = await fetch('https://jsonplaceholder.typicode.com/posts')
    const promises = await post.json()

    // const Posts: post[] = [
    //     {
    //         id: 1,
    //         title: 'Post 1',
    //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    //     },
    //     {
    //         id: 2,
    //         title: 'Post 2',
    //         content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    //     }
    // ]
    return (
        <>
            <h1>Page Blog</h1>
            <Suspense fallback={<div>Loading...</div>}>
                <Posts promises={promises} />
            </Suspense>
        </>
    )
} 