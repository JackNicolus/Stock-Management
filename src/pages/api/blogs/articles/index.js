import {connect, model, models, Schema} from "mongoose"
const connectionString = 'mongodb+srv://jnclxi:Jackjack88@cluster0.l22ckos.mongodb.net/blogs'


export default async function handler(req, res) {
    await connect(connectionString);
    const docs = await Article.find()
    console.log(docs)

    res.status(200).json(docs)
}



const articleSchema = new Schema({
    title: String,
    content: String,
})

const Article = models?.Article || model('article', articleSchema)