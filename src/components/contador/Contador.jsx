import React, {Component} from 'react'
import "./Contador.css"
import Display from './Display';
import Botoes from './Botoes';
import PassoForm from './PassoForm'


export default class Contador extends Component {

  /*
  JavaScript
    constructor(props){
        super(props)
        this.state = {
            numero: this.props.numeroInicial
        }
        constructor(props){
       super(props)
       this.inc = this.inc.bind(this)
       <PassoForm passo={this.state.passo} /> //Direta
   }
    }

    //Funcao 
    <button onClick={e => this.inc()}>+</button>
    //Forma função owerow
   */

   state = {
       numero: this.props.numeroInicial || 0,
       passo: this.props.passoInicial || 5,
   };

   inc = () =>{
     this.setState({
         numero: this.state.numero + this.state.passo,
     });
   }

   dec = () =>{
    this.setState({
        numero: this.state.numero - this.state.passo
    });
  }

  setPasso = (novoPasso) =>{
      this.setState({
          passo: novoPasso,
      });
  }

    render(){
        return (
        <div className="Contador">
            <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo}  setPasso={this.setPasso}/> 
                <Botoes setInc={this.inc} setDec={this.dec}></Botoes>
        </div>
        );
    }
}