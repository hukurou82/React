import React from 'react'

import './App.css';

import Header from './Header'
import Form from './Form'
import Todo from './Todo'
import CheckAll from './CheckAll'


let currentId = 0;

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: []
            /*{
                id: 0,
                text: "洗濯する",
            },
            {
                id: 1,
                text: "宿題する",
            },
            {
                id: 2,
                text: "腹筋する",
            }
        */
        }
    }
    render() {
        const { todos } = this.state
        return (
            <div className="container text-center" >

                <Header />

                <Form onSubmit={this.handleSubmit} />

                <CheckAll allCompleted={
                    todos.length > 0 && todos.every(({ completed }) => completed)
                }
                    onChange={this.handleChangeAllCompleted}
                />

                <select>
                    <option>全て</option>
                    <option>未完了</option>
                    <option>完了済み</option>
                </select>

                <ul className="list-group">
                    {todos.map(({ id, text, completed }) => (
                        <li className="list-group-item" key={id}>
                            <Todo
                                id={id}
                                text={text}
                                completed={completed}
                                onChange={this.handleChangeCompleted} />
                        </li>
                    ))}
                </ul>

                <button type="button" class="btn btn-light" onClick={this.handleClickDeleteCompleted}>完了済みを全て削除する</button>
            </div>/*container*/
        )
    }

    handleSubmit = text => {
        const newTodo = {
            id: currentId,
            text,
            completed: false
        }
        const newTodos = [...this.state.todos, newTodo]
        this.setState({ todos: newTodos })
        currentId++;
    }

    handleChangeAllCompleted = completed => {
        const newTodos = this.state.todos.map(todo => {
            return {
                ...todo,
                completed
            }
        })
        this.setState({ todos: newTodos })
    }

    handleChangeCompleted = (id, completed) => {
        const newTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed,
                }
            }

            return todo;
        })

        this.setState({ todos: newTodos })
    }

    handleClickDeleteCompleted = () => {
        const newTodos = this.state.todos.filter(({ completed }) => !completed)
        this.setState({ todos: newTodos })
    }

}



export default App;