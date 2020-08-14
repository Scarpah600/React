import './Mega.css'
import React, {useState} from 'react'

export default props =>{

    function gerarNumero(qtde){
        const numeros = Array(qtde)
        .fill(0)
        .reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1,60,nums)
            
            return [...nums, novoNumero]
        },[])
        .sort((n1,n2) => n1 - n2)
        return numeros
    }
    
    function gerarNumeroNaoContido(min,max,array){
        const aleatorio = parseInt(Math.random() * (max + 1 -min)) - min
    
        return array.includes(aleatorio) ? gerarNumeroNaoContido(min,max,array) : aleatorio
    }
    const [qtde, setQtde] = useState(numeroInicial || 6 )
    const numeroInicial = gerarNumero(qtde)
    const [numeros,setNumeros] = useState(numeroInicial)
    

    return (
        <div className="Mega">
            <h2>Mega Sena</h2>
            <h3>{numeros.join(' ')}</h3>
            <div>
                <label>Qtde do Numero</label>
                <input min="6" max="15" type="number" value={qtde} 
                onChange={e => {
                        setQtde(+e.target.value)
                        setNumeros(gerarNumero(+e.target.value))
                }}
                
                />
            </div>
            <button onClick={_ => setNumeros(gerarNumero(qtde))}>Gerar Numeros</button>
        </div>
    );
};