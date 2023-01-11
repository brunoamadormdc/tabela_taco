import {taco_table} from '../../tables/taco_table'

export default function handler(req, res) {
  
  if(req == 'POST') {
    res.status(500).json({error:'Requisição não permitida'})
  }
  
  res.status(200).json({ name: taco_table })

}
