

import Input from './components/formulario/Input'
import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import "./App.css";
import DiretaPai from  "./components/comunicacao/DiretaPai"
import IndiretaPai from "./components/comunicacao/IndiretaPai"
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Lista from './components/repeticao/ListaAlunos'
import Lista2 from './components/repeticao/listaProdutos'
import ParouImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
export default (_) => (
    <div className="App">
        <h1> Fundamentos React</h1>
        <div className="Cards">

            <Card titulo="Componente Controlado" color="#E45F56">
                   <input></input>
            </Card>

            <Card titulo="Comunicação Indireta" color="#8BAD39">
                   <IndiretaPai></IndiretaPai>
            </Card>
            
             <Card titulo="Comunicação Direta" color="#59323C">
                   <DiretaPai></DiretaPai>
            </Card>


            <Card titulo="Usuario Info" color="#982385">
                    <UsuarioInfo usuario= {{nome: 'Gustavo'}}></UsuarioInfo> 
            </Card>
            <Card titulo="ParOu Impar" color="#982385">
                    <ParouImpar numero={21}></ParouImpar>
            </Card>

            <Card titulo="Desafio Repiticao" color="#FF4C65">
                    <Lista2></Lista2>
            </Card>
          
            <Card titulo="Repiticao" color="#FF4C65">
                    <Lista></Lista>
            </Card>

            <Card titulo="Componentes com Filhos" color="#00C8F8">
                <Familia sobrenome="Scarpin">
                <FamiliaMembro nome="Marcio" />
                <FamiliaMembro nome="Cassia"  />
                <FamiliaMembro nome="Gustavo" />
                </Familia>
            </Card>


            <Card titulo="Desafio Aleatório" color="#080">
                <Aleatorio min={10} max={60} />
            </Card>

            <Card titulo="Fragmento" color="#E94C6F">
                <Fragmento />
            </Card>

            <Card titulo="Parametro" color="#E8B71A">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Pedro" nota={9.3} />
            </Card>

            <Card titulo="Parametro2" color="#588C73">
                <ComParametro
                    titulo="Situação do Aluno"
                    aluno="Maria" nota={1.9} />
            </Card>

            <Card titulo="Primeiro" color="#C1C1A3">
                <Primeiro></Primeiro>
            </Card>
        </div>
    </div>
);