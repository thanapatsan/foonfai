import data from "./data_yakkaw.json"
export default function handler(req, res) {
    res.status(200).json(data)
  }