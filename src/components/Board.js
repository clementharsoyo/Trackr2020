import React, { Component } from 'react';

class Board extends Component {
    drop = (e) => {
        e.preventDefault();
        const card_id = e.dataTransfer.getData('card_id');
        const card = document.getElementById(card_id);
        card.style.display = 'block';
        e.target.appendChild(card);
        console.log(card)
    }

    dragOver = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div id={this.props.id} onDrop={this.drop} onDragOver={this.dragOver} className={this.props.className}> 
                { this.props.children }
            </div>
        )
    }
    
}

export default Board