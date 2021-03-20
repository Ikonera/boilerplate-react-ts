import React, { FunctionComponent } from "react"
import ReactDOM from "react-dom"


const App: FunctionComponent = () =>
{
    return (
        <div>
            Hello world
        </div>
    )
}


ReactDOM.render(
    <App />,
    document.querySelector("#root")
)