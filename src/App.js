import {Component} from 'react';
import '../src/css/App.css'
import TodoList from './components/TodoList';

class App extends Component {
    
  render() {
    return(
      <div>
        <TodoList />
      </div>
    );
  }
}

export default App;