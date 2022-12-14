import { table } from "./utils/Airtable";

export default async(req, res) => {
  const {id, fields} = req.body
  try {
    const updatedRecords = await table.update([
      {id, fields},
    ])
    res.statusCode = 200
    res.json(updatedRecords[0])
  } catch(err){    
    res.statusCode = 500
    res.json({msg: 'Something went wrong'})
  }

};  