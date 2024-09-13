"use client"

import React, { useEffect, useState } from 'react'
import Tag from '@/components/Tag'
import { formatDate } from '@/lib/utils'
import NavBar from '@/components/NavBar'
import Comment from '@/components/Comment'

const ArticleDetailPage = ({ params }: { params: { articleId: string } }) => {

    const [article, setArticle] = useState<ArticleWithTagsAndComments | null>(null)

    useEffect(() => {
        const fetchArticle = async () => {
            const response = await fetch(`/api/article/${params.articleId}`)
            const data: ArticleWithTagsAndComments = await response.json()
            console.log(data)
            setArticle(data)
        }
        fetchArticle()
    }, [params.articleId])

    return (
        <div className='group border border-slate-500 p-6 rounded-md hover:bg-slate-700 mt-28'>
            {article && ( 
                <div>
                    <NavBar />
                    <h1 className='text-2xl'>{article?.title}</h1>
                    <div className='my-5 flex flex-wrap gap-3'>
                        {article.tags.map((tagArticle: TagArticleType) => (
                            <Tag key={tagArticle.tag.id} text={tagArticle.tag.name} />
                        ))}
                    </div>
                    <p>{article?.text}</p>

                    <h2 className='text-xl mt-10'>Commentaires <span className='text-xl italic'>({article.comments.length || 0})</span></h2>
                    {article.comments && article?.comments.length > 0 ? (
                        article.comments.map((comment: CommentType) => (
                            // <div key={comment.id} className='mt-10 group border border-slate-500 p-6 rounded-md' >
                            //     <h2 className='pb-3'>{comment.userId} <span className='text-gray-500 text-sm italic'>publié le {formatDate(comment.createdAt)}</span></h2>
                            //     <p>{comment.text}</p>
                            // </div>
                            <Comment key={comment.id} comment={comment}/>
                        ))
                    ) : (
                        <p>Aucun commentaire.</p>
                    )}
                    </div>
            )}
        </div>
    )
}

export default ArticleDetailPage