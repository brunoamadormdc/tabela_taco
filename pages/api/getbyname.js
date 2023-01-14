import { taco_table } from '../../tables/taco_table'
import { slugify } from '../../helpers/index'

export default function handler(req, res) {

    if (req.method == 'GET') {
        res.status(500).json({ error: 'Requisição não permitida' })
    }

    const { name } = req.body
    
    let splitted_name = name.split(' ')

    const result = taco_table.filter(val => {
        
        if (slugify(val.nome_do_alimento).match(slugify(name.toLowerCase())) != null) {
            return val
        }

    })

    const startsWithletter = result.filter(val => {
        if(val.nome_do_alimento.toLowerCase().startsWith(name[0].toLowerCase())) return val
    })

    const notstartsWithletter = result.filter(val => {
        if(!val.nome_do_alimento.toLowerCase().startsWith(name[0].toLowerCase())) return val
    })

    const final_result = [...startsWithletter, ...notstartsWithletter]

    res.status(200).json({ pornome: final_result })


}
