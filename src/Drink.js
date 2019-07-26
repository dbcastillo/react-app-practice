import React from 'react';


class Drink extends React.Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <h1></h1>
                <h3></h3>
                <img src={this.props.image} />
            </div>
        )
    }
}

export default Drink