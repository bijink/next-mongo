import { ObjectId } from "mongodb"
import clientPromise from "../../../lib/mongodb"

export default async (req, res) => {
  const { movieId } = req.query

  try {
    const client = await clientPromise
    const db = client.db("sample_mflix")
    const data = await db.collection("movies").findOne({ _id: new ObjectId(movieId) })

    res.json(data)
  } catch (e) {
    console.error(e)
  }
}
