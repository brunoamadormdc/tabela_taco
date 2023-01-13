import {taco_table} from '../../tables/taco_table'
import {onlyUnique} from '../../helpers/index'

export default function handler(req, res) {

  let categorias = taco_table.map(val=> val['Categoria'])
  let unique_categorias = categorias.filter(onlyUnique)

  if(req.method == 'POST') {
    res.status(500).json({error:'Requisição não permitida'})
  }
  
  res.status(200).json({ categorias: unique_categorias })

}
