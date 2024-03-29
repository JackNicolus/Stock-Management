process.env.NODE_ENV = "development";

import {connect, model, models, Schema} from "mongoose"
const connectionString = "mongodb+srv://admin:bookstoreMS@bookstorems.qgl1qca.mongodb.net/bookstore"

export default async function handler(req, res) {
    await connect(connectionString);
    console.log("req.method", req.method)
    console.log("req.params.id", req.query) //Because this is being run server-side, the console.log results in an output in the terminal (which is on the server) rather than the Dev Console on browsers (because those are client-side)

    const id = req.query.id

    //Get only one document
    if (req.method === 'GET') {
        try {
        const doc = await Author.findOne({ _id : id})
        res.status(200).json(doc)
        } catch (error) {
            console.error(error)
            }
    } 
    
    else if (req.method === 'DELETE') {
        try {
        const deletedDoc = await Author.deleteOne({ _id: id })
        res.status(200).json(deletedDoc)
        } catch (error) {
            console.error(error)
            }
        } 

    else {
        try {
        res.setHeader('Allow', ['GET', 'DELETE'])
        res.status(405).send(`Method ${req.method} Not Allowed`)
    } catch (error){
        console.error(error)
        }
    }
}
    const authorSchema = new Schema({
        id: String,
        firstName: String,
        lastName: String,
        publisher: String
    })

    const Author = models?.author || model('author', authorSchema);
    //if NextJS already uses mongoose and it is already defined, skip the new model creation (models?.Author) = check
    //otherwise, create a new model (model('author', authorSchema))