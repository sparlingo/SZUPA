import { query as q } from "faunadb"
import { faunaClient } from "../../integrations/fauna"

const testQuery = async (req, res) => {
  if (req.method == "GET") {
    let query = await faunaClient.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection("Teams"))),
        q.Lambda((team) => q.Get(team))
      )
    )
    res.status(200).json({ data: query.data })
  }
}

export default testQuery
