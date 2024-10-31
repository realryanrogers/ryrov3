import { PrismaClient, Prisma } from '@prisma/client'


export async function POST(request: Request){
    try 
    {
        const bod = await request.json()
        console.log(bod["token"])
        if(bod["token"] != process.env.API_TOKEN) {
            return new Response('Not Authorized')
        }
        if(bod["weight"] == null){
            return new Response('No Weight')
        }

        var encounterDateTime
        if(bod["DateTime"] == null){
            console.log("No DateTime")
            encounterDateTime = new Date(Date.now())
        } else {
            console.log(bod["DateTime"])
            encounterDateTime = new Date(bod["DateTime"])
        }

        const prisma = new PrismaClient();

        const result = await prisma.weighIn.create({
            data: {
                weight: parseFloat(bod["weight"]),
                date: encounterDateTime
            }
        })

        return Response.json(result)

    } catch (error) {
        console.log(error)
        return Response.json(error)
    }
    

}