import React, { Component } from "react";
import { Button } from "react-bootstrap";
import Gift from "./Gift";
import { max_number } from "./helper";

class App extends Component {
  state = {
    gifts: []
  };

  addGift = () => {
    const { gifts } = this.state;
    const ids = this.state.gifts.map(gift => gift.id);
    const maxId = max_number(ids)

    gifts.push({
      id: maxId + 1
    });

    this.setState({ gifts });
  };

  removeGift = id => {
    const gifts = this.state.gifts.filter(gift => gift.id !== id);

    this.setState({ gifts });
  };

  render() {
    return (
      <main>
        <h2>Gift Giver</h2>
        <h3>Birthday List</h3>

        <div className="gift-list">
          {this.state.gifts.map(gift => {
            return (
              <Gift key={gift.id} gift={gift} removeGift={this.removeGift} />
            );
          })}
        </div>

        <Button className="button-add" onClick={this.addGift}>
          Add Gift
        </Button>
      </main>
    );
  }
}

export default App;
