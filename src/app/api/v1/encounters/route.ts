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

        
        
    } catch (error) {
        return new Response('Not Ok')
    }

    


    return new Response("ok")
}