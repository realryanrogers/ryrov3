import { PrismaClient, Prisma } from '@prisma/client'


export async function POST(request: Request){
    try 
    {
        const bod = await request.json()
        console.log(bod["token"])
        if(bod["token"] != process.env.API_TOKEN) {
            return new Response('Not Authorized')
        }
        
    } catch (error) {
        return new Response('Not Ok')
    }
    
    const prisma = new PrismaClient()

    const weights = await prisma.weighIn.findMany()

    return Response.json(weights)
}