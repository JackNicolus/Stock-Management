import {connect, model, models, Schema} from "mongoose"
const connectionString = "mongodb+srv://admin:bookstoreMS@bookstorems.qgl1qca.mongodb.net/bookstore"

export default async function handler(req, res) {
    await connect(connectionString);
    console.log("req.method", req.method)
    console.log("req.params.id", req.query) //Because this is being run server-side, the console.log results in an output in the terminal (which is on the server) rather than the Dev Console on browsers (because those are client-side)

    const id = req.query.id

    //Get only one document
    if (req.method === 'GET') {
        const doc = await Customer.findOne({ _id : id})
        res.status(200).json(doc)
    } 
    
    else if (req.method === 'DELETE') {
        const deletedDoc = await Customer.deleteOne({ _id: id })
        res.status(200).json(deletedDoc)
    } 
    
    else {
        res.setHeader('Allow', ['GET', 'DELETE'])
        res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}
    const customerSchema = new Schema({
        _id: String,
        firstName: String,
        lastName: String,
        phoneNumber: String

    })

    const Customer = models?.customer || model('customer', customerSchema);
    //if NextJS already uses mongoose and it is already defined, skip the new model creation (models?.Customer) = check
    //otherwise, create a new model (model('customer', customerSchema))