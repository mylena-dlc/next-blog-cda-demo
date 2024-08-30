import { db } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {

    try {
        // récupérer la liste des articles
        const tags = await db.tag.findMany({
            orderBy: {
            name: 'desc'
            },
        })
        // retourne une réponse au format JSON 
        return NextResponse.json(tags)

    } catch (error) {
        console.log("[TAGS]", error)
        return new NextResponse("Internal Error", { status: 500})
    }

}