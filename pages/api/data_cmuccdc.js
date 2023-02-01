import data from "./data_cmuccdc.json"
export default function handler(req, res) {
    res.status(200).json(data)
  }