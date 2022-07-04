import {Component} from 'react';
import TodoItens from './TodoItens';
import "../css/TodoList.css"

class TodoList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tarefa: "",
            item: []
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    deleteItem(key) {
        let filtro = this.state.item.filter((item) => {
            return(item.key !== key);
        });
        this.setState({item: filtro});
    }

    addItem(e) {
        let state = this.state;
        let chave = state.item.length;
        if(this._tarefaInput.value != "") {
            let novaTarefa = {
                text: this._tarefaInput.value,
                key: chave + 1
            }
            this.setState({item: [...state.item, novaTarefa]});
        } 
        e.preventDefault();
        this.setState({tarefa: ""});
    }

    render() {
        return(
            <div className='todolist'>
                <h1>Lista de Tarefas</h1>
                <form onSubmit={this.addItem}>
                    <input type="text" placeholder='Nova Tarefa...' 
                    name="tarefa" value={this.state.tarefa} 
                    onChange={(e) => this.setState({tarefa: e.target.value})}
                    ref={(event) => this._tarefaInput = event}></input>
                    <br></br>
                    <button type='submit'>Adcionar Tarefa</button>
                </form>
                <TodoItens lista={this.state.item} deletar={this.deleteItem}/>

            </div>
        )
    }
}

export default TodoList;