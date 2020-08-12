import React, {useState} from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    const [a,b] = [1,2]
    const [nome, setNome] = useState('?')
    let idade = 0
    let nerd = false

    function fornecerInf(nomeParam,idadeParam,nerdParam){
        nome = nomeParam
        idade = idadeParam
        nerd = nerdParam  
    }

    return (
        <div>
            <div>Pai</div>

            <IndiretaFilho quandoClicar={fornecerInf}></IndiretaFilho>
        </div>
    )
}