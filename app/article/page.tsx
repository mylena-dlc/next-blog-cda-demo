
"use client"

import ArticleCard from '@/components/ArticleCard'
import { db } from '@/lib/db'
import React, { useEffect, useState } from 'react'


const ArticlePage = () => {

  // récupérer la liste des articles 
  //VERSION 1
  // const articles = await db.article.findMany({
  //   orderBy: {
  //     createdAt: 'desc'
  //   },
  //   include: {
  //     tags: {
  //       include: {
  //         tag: true
  //       }
  //     }
  //   }
  // })

  // VERSION 2 : HOOKS
const [articles, setArticles] = useState([])

useEffect( () => {
  const fetchArticles = async () =>  {
    const response = await fetch('/api/article')
    const data = await response.json()
    setArticles(data)
  }

  fetchArticles()
}, [])


  return (
    <div>
        <h1>Blog</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {/* Liste des articles */}
          {articles.map((article: any) => (
            <ArticleCard article={article}/>
            // le premier: nom de la propriété de la fonction, le deuxieme c'est la valeur, ici l'objet Article
            ))}
        </div>
      </div>

  )
}

export default ArticlePage