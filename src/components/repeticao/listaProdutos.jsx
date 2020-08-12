import React from 'react'
import Produtos from '../../data/produto'
import './ListaProdutos.css'

export default (props) => {

    function getLinhas(){

        return Produtos.map((produto,i) => {
            return (
                <tr ket={produto.id} className={i % 2 === 0 ? 'Par': 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>R${produto.preco.toFixed(2).replace('.',',')}</td>
                </tr>
            )
        })
    }  

        return (
            <div className="listaProd">
                <table>
                    <thead>
                        <tr>
                        <th>id</th>
                        <th>nome</th>
                        <th>preco</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {getLinhas()}
                        </tr>
                    </tbody>
                </table>
            </div>
        );
};
        