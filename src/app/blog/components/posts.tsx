'use client'

import Link from "next/link"

const Posts = ({promises}: {promises: any[]}) => {
     
  return (
    <div>
        {promises.map((post) => {
            return (
                <div key={post.id}>
                    <div className="flex " style={{display: 'flex', gap: '10px', alignItems: 'center'}}>
                        <Link href={`/blog/${post.id}`}>
                        <span>{post.id}</span>

                        </Link>
                        <h1>{post.title}</h1>
                    </div>
                    <p>{post.content}</p>
                </div>
            )
        })}
    </div>
  )
}

export default Posts