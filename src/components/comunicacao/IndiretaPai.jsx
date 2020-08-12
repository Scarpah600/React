import React, {useState} from 'react'
import IndiretaFilho from './IndiretaFilho'

export default props => {
    const [nome, setNome] = useState('?')
    const [idade,setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)
 

    function fornecerInf(nome,idade,nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return (
        <div>
            <div>
                <span>{nome}</span>
                    <span><strong>{idade}</strong></span>
                    <span>{nerd ? 'Verdadedeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho quandoClicar={fornecerInf}></IndiretaFilho>
        </div>
    )
}