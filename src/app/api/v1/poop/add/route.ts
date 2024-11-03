
import { PrismaClient, Prisma } from '@prisma/client'

export async function GET(request: Request){
    return new Response("ok")
}

export async function POST(request: Request){
    try 
    {
        const bod = await request.json()
        console.log(bod["token"])
        if(bod["token"] != process.env.NEXT_PUBLIC_API_TOKEN) {
            return new Response('Not Authorized')
        }

        var poopDateTime = new Date(Date.now())
        var poopHardness = 2
        var poopVolume = 2
        var poopDifficulty = 2

        if(bod["datetime"] != null){
            poopDateTime = new Date(bod["datetime"])
        } 
        if(bod["hardness"] != null){
            poopHardness = parseInt(bod["hardness"])
        }
        if(bod["volume"] != null){
            poopVolume = parseInt(bod["volume"])
        }
        if(bod["difficulty"] != null){
            poopDifficulty = parseInt(bod["difficulty"])
        }

        const prisma = new PrismaClient()

        const poopResult = await prisma.poop.create({
            data: {
                hardness: poopHardness,
                volume: poopVolume,
                datetime: poopDateTime,
                difficulty: poopDifficulty
            }
        })

        return Response.json(poopResult)
        
    } catch (error) {
        return new Response('Not Ok')
    }
    


    return Response.json({})
}