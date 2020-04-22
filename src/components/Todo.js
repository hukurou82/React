import React from 'react'

class Todo extends React.Component {
    render() {
        const { text, completed } = this.props
        
        return (
            <div>
                <label>
                    <input type="checkbox"
                    checked={completed}
                    onChange={this.handleChangeCompleted} />
                    {text}
                </label>
                <button type="button" class="btn btn-outline-primary">編集</button>
                <button type="button" class="btn btn-outline-danger">削除</button>
            </div>
        )
    }

    handleChangeCompleted = () => {
        const { onChange, id, completed } = this.props
        onChange(id, !completed);
    }
}

export default Todo;