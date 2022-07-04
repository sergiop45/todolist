import React, {Component} from 'react';
import "../css/TodoItens.css"

class TodoItens extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.delete = this.delete.bind(this);
    }

    delete(key) {
        this.props.deletar(key);
    }




    render() {
        return(
            <div>
                <h3>Lista de Tarefas</h3>
                {this.props.lista.map((item) => {
                    return(
                        <div className='item'>
                        <p>{item.key} - {item.text} - </p> 
                        <a className='btnDelete' onClick={() => this.delete(item.key)}>deletar</a>
                        </div>
                    );
                    
                })}
            </div>
        );
    }
}

export default TodoItens;