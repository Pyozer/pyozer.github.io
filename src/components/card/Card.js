import React, { Component } from 'react';

class Card extends Component {

    render() {
        return (
            <div class="card">
                <div class="card-body">
                    {this.props.children}
                </div>
            </div>
        )
    }

}

export default Card;