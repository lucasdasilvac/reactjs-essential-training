import React from 'react'
import ReactDOM from 'react-dom'

var style = {
    backgroundColor: 'orange',
    color: 'white',
    fontFamily: 'Arial'
}

// const title = React.createElement(
//     'ul',
//     {id: 'title', className: 'header', style: style},
//     React.createElement(
//         'li',
//         {},
//         'item on our list'

//     )
// )

class Message extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello Everyone</h1>
            </div>
        )
    }
}

ReactDOM.render(
    <Message />,
    document.getElementById('root')
)
