import React, {Component} from 'react'
import "./Contador.css"

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

  setPasso = (e) =>{
      this.setState({
          passo: +e.target.value,
      });
  }

    render(){
        return (
        <div className="Contador">
            <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <div>
                    <label htmlFor="passoInput">Passo:</label>
                    <input id="passoInput" 
                    type="number" 
                    value={this.state.passo}
                    onChange={this.setPasso}/>
                </div>
             <button onClick={this.inc}>+</button>
             <button onClick={this.dec}>-</button>
        </div>
        );
    }
}