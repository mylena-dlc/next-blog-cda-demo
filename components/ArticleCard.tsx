import React from 'react'
import { formatDate } from '@/lib/utils'
import  Button  from './Button'
import  Tag  from './Tag'
import { useRouter } from 'next/navigation'
import {MessageSquareIcon, Trash2 } from 'lucide-react'

interface ArticleCardProps {
  article: ArticleWithTagsAndComments
}

const ArticleCard = ({ article }: ArticleCardProps) => {

  const router = useRouter();

  const handleDelete = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this article?');
    if (!confirmDelete) return;

    try {
      const res = await fetch(`/api/article/${article.id}/delete`, {
        method: 'DELETE'
      })
      router.push('/article')
    } catch (error) {
      console.error('Error deleting article')
    }
  }

  return (
    <div className="group border border-slate-500 bg-slate-500 p-6 rounded-md hover:bg-slate-700 cursor-pointer hover:translate-y-2 duration-300" key={article.id}>
    {/* Titre de l'article */}
    <h2 className="text-2xl md:text-xl font-bold">{article.title}</h2>

    {/* date / heure */}
    <p className='text-sm text-slate-300'>{formatDate(article.createdAt)}</p>
    
    {/* Liste des tags */}
    <div className='flex flex-wrap gap-2 my-4'>
      {article.tags.map((tagArticle) => (
        // <span 
        //   className="text-xs rounded-full bg-slate-600 px-3 py-2 group-hover:bg-pink-700 duration-300" key={tagArticle.tag.id}>
        //   {tagArticle.tag.name}
        // </span>
        <Tag key={tagArticle.tag.id} text={tagArticle.tag.name}/>
    ))}
    </div>

    {/* Texte de l'article */}
    <p className='line-clamp-4'> {article.text}</p>
 
    {/* <Button label ='Lire plus...' href='/contact/' /> */}
 
    <div className='sm:top-5 sm:right-5'>
      <button onClick={handleDelete} className="flex gap-2 px-5 rounded-md bg-red-500 hover:bg-red-600 text-xs p-2"><Trash2 size={15}/>Delete</button>
    </div>
    
  </div>
  )
}

export default ArticleCard