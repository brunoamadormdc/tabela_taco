import { taco_table } from '../../tables/taco_table'
import {slugify} from '../../helpers/index'

export default function handler(req, res) {

    if (req.method == 'GET') {
        res.status(500).json({ error: 'Requisição não permitida' })
    }

    const {name} = req.body
        
    const result = taco_table.filter(val => {
       
        if (slugify(val.description).match(slugify(name)) != null) {
            return val
        }
        
    })

    res.status(200).json({ pornome: result })
   

}
