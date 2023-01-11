import {taco_table} from '../../../tables/taco_table'

export default function handler(req, res) {
    
    if(req === 'POST') res.status(500).json({erro:'Requisição não permitida'})
    
    const {id} = req.query

    const result = taco_table.find(val=> val.id == Number(id))

    res.status(200).json({result:result})

}