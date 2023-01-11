import { taco_table } from '../../tables/taco_table'

export default function handler(req, res) {

    if (req.method == 'GET') {
        res.status(500).json({ error: 'Requisição não permitida' })
    }

    const {categoria} = req.body
    
    const result = taco_table.filter(val => val.category == categoria)

    res.status(200).json({ porcategoria: result })

}
