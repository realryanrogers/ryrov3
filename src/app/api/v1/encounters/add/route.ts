import { Prisma, PrismaClient } from "@prisma/client"

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
        var encounterPacket = {
            encounterDateTime: new Date(Date.now()),
            duration: 10,
            enhanced: false,
            rating: 2,
            intensity: 1,
            strength: 2,
            activities: [],
            positions: [],
        }


        if(bod["datetime"] != null){
            console.log(bod["DateTime"])
            encounterPacket["encounterDateTime"] = new Date(bod["DateTime"])
        }
        if(bod["duration"] != null){
            encounterPacket["duration"] = parseInt(bod["duration"])
        } 
        //set enhanced
        if(bod["enhanced"] != null){
            if(bod["enhanced"]==0){
                encounterPacket["enhanced"] = false
            } else {
                encounterPacket["enhanced"] = true
            } 
        }
        //set rating
        if(bod["rating"] != null){
            encounterPacket["rating"] = parseInt(bod["rating"])
        }

        if(bod["intensity"] != null){
            encounterPacket["intensity"] = parseInt(bod["intensity"])
        }

        if(bod["activities"] != null){
            encounterPacket["activities"] = JSON.parse(bod["activities"])
        }

        if(bod["positions"] != null){
            encounterPacket["positions"] = JSON.parse(bod["positions"])
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
        if(parseInt(bod["party"]) == 2){
            //set up the encounter
        } else {
            console.log("Creating Session")
            const soloResult = await prisma.soloSession.create({
                data: {
                    datetime: encounterPacket.encounterDateTime,
                    TimeElapsed: encounterPacket.duration,
                    enhanced: encounterPacket.enhanced,
                    rating: encounterPacket.rating,
                    finish: connectFinishId,
                    notes: bod["notes"]
                }
                
            })
            return Response.json(soloResult)
        }

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
