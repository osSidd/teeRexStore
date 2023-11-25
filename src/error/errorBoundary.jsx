import React from "react";

class ErrorBoundary extends React.Component{
    constructor(){
        super()
        this.state = {
            error: null,
            errorInfo: null
        }
    }

    componentDidCatch(error, errorInfo){
        this.setState({
            error,
            errorInfo,
        })
    }

    render(){
        return this.state.error ? <Fallback error={this.state.error} errorInfo={this.state.errorInfo}/> : this.props.children
    }
}

function Fallback(error, errorInfo){
    return (
        <div>
            <h3>Something went wrong...</h3>
            <details>
                <p>{error.toString()}</p>
                <br /><br />
                <p>
                    {errorInfo.componentStack}
                </p>
            </details>
        </div>
    )
}

export default ErrorBoundary