import React from 'react';
import style from './Button.module.scss'

export default class Botão extends React.Component<{tipo? : "button" | "submit" | "reset"| undefined ,texto: string}>{
    render(){
        return(
        
        <button type={this.props.tipo} className={style.botao}>
            {this.props.texto}
        </button>
        
        )
    }
}