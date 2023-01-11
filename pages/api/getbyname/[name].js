import {taco_table} from '../../../tables/taco_table'
import {slugify} from '../../../helpers/index.js'

export default function handler(req, res) {
    
    if(req === 'POST') res.status(500).json({erro:'Requisição não permitida'})
    
    const {name} = req.query

    let result = []
    
    result = taco_table.filter(val=> {
        if(slugify(val.description).search(slugify(name)) != -1) return val
    })
    

    res.status(200).json({result:result})

}