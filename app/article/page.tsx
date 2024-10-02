
"use client"

import ArticleCard from '@/components/ArticleCard'
import NavBar from '@/components/NavBar'
import { db } from '@/lib/db'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { EffectCards } from 'swiper/modules';

import 'swiper/css/bundle';
import 'swiper/css/effect-cards';

import 'swiper/css/navigation'; 
import 'swiper/css/pagination'; 
import 'swiper/css/virtual';



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
const [articles, setArticles] = useState<ArticleWithTagsAndComments[]>([])

useEffect( () => {
  const fetchArticles = async () =>  {
    const response = await fetch('/api/article')
    const data: ArticleWithTagsAndComments[] = await response.json()
    setArticles(data)
  }

  fetchArticles()
}, [])

  return (
    <div className='mt-28'>
        <NavBar/>
        <h1 className='text-2xl pb-10'>Blog</h1>

        <div className='mx-[200px]'>
         
        <Swiper
        modules={[EffectCards]}
        effect={'cards'}
        grabCursor={true}
         className='swiper-container'
         spaceBetween={30}
         slidesPerView={3}
         pagination={{ clickable: true }}
        >
          {/* Liste des articles */}
          {articles.map((article: any) => (
          <SwiperSlide key={article.id}>
                    <Link key={article.id} href={`/article/${article.id}`}>
                        <ArticleCard article={article}/>
                    </Link>
                  
        </SwiperSlide>
            ))}  
            </Swiper>
        </div>
      </div>

  )
}

export default ArticlePage