import React from 'react'


export default props => {
    const cb = props.quandoClicar
    return (
        <div>
           <div> Filho</div>
            <button onClick={_ => cb('Joao',23,true)}>Clicar Informações</button>
        </div>
    )
}