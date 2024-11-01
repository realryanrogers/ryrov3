import { Prisma, PrismaClient } from "@prisma/client"
import type { EncounterActivities, EncounterPositions } from "@prisma/client"

export async function POST(request: Request){
    try 
    {
        console.log("in the try loo")
        const bod = await request.json()
        console.log(bod["token"])
        if(bod["token"] != process.env.NEXT_PUBLIC_API_TOKEN) {
            return new Response('Not Authorized')
        }
        console.log("Creating Packets")
        //setup the stuff that applies to both
        type EncounterPacket = {
            party: number,
            encounterDateTime: Date,
            duration: number,
            enhanced: boolean,
            rating: number,
            intensity: number,
            strength: number,
            activities: EncounterActivities[],
            positions: EncounterPositions[]
        }
        var encounterPacket = {} as EncounterPacket
        if(bod["datetime"] != null){
            console.log(bod["datetime"])
            console.log(new Date(bod["datetime"]))
        }

        encounterPacket.party = bod["party"] != null ? parseInt(bod["party"]) : 1
        encounterPacket.encounterDateTime = bod["datetime"] != null ? new Date(bod["datetime"]) : new Date(Date.now())
        encounterPacket.duration = bod["duration"] != null ? parseInt(bod["duration"]) : 10
        encounterPacket.enhanced = bod["enhanced"] != null ? Boolean(bod["enhanced"]) : false
        encounterPacket.rating = bod["rating"] != null ? parseInt(bod["rating"]) : 2
        encounterPacket.intensity = bod["intensity"] != null ? parseInt(bod["intensity"]) : 2
        encounterPacket.intensity = bod["intensity"] != null ? parseInt(bod["intensity"]) : 2
        if(bod["activities"] != null){
            var ActivityJSON = JSON.parse(bod["activities"])
            const prisma = new PrismaClient()
            const actResult = await prisma.encounterActivities.findMany({
                where: {
                    id: { in: ActivityJSON}
                }
            })
            encounterPacket.activities = actResult
        } else {
            encounterPacket.activities = []
        }

        if(bod["positions"] != null){
            var PositionJSON = JSON.parse(bod["positions"])
            const prisma = new PrismaClient()
            const posResult = await prisma.encounterPositions.findMany({
                where: {
                    id: { in: PositionJSON}
                }
            })
            encounterPacket.positions = posResult
        } else {
            encounterPacket.positions = []
        }
        const prisma = new PrismaClient()
        var finishId = undefined;
        if(bod["finish"] != null){
            console.log("Creating Finish")
            const finishResult = await prisma.finish.create({
                data: {
                    finishLocationId: bod["finish"]["location"] != null ? parseInt(bod["finish"]["location"]) : 1,
                    rating: bod["finish"]["rating"] != null ? parseInt(bod["finish"]["rating"]) : 2,
                    volume: bod["finish"]["volume"] != null ? parseInt(bod["finish"]["volume"]) : 2,
                    strength: bod["finish"]["strength"] != null ? parseInt(bod["finish"]["strength"]) : 2,
                }
            })
            finishId = finishResult.id
        }
        const connectFinishId = typeof finishId !== "undefined" ? { connect : { id: finishId }} : {}
        console.log("Creating Encounter")
        const encounterResult = await prisma.encounter.create({
            data: {
                party: encounterPacket.party,
                datetime: encounterPacket.encounterDateTime,
                TimeElapsed: encounterPacket.duration,
                enhanced: encounterPacket.enhanced,
                rating: encounterPacket.rating,
                intensity: encounterPacket.intensity,
                activities: {connect: encounterPacket.activities},
                positions: {connect: encounterPacket.positions},
                finish: connectFinishId,
                notes: bod["notes"]
            }
            
        })
        return Response.json(encounterResult)
        

    } catch (error) {
        console.log(error)
        return Response.json(error)
    }
}


//API Schema
/**
 * 
 * 
 * {
 *    datetime: DateTime,
 *      party: int - number of people involved. 1 for solo,
 *      duration: int,
 *      finish: {
 *          location: int,
 *          rating: int,
 *          volume: int,
 *          strength: int
 *              },
 *      enhanced: int - 0 for now, 1 for yes
 *      rating: int
 *      intensity: int
 *      activities: array of ints (only applicable for dual)
 *      positions: array of ints (only applicable for dual)
 * }
 * 
 */
