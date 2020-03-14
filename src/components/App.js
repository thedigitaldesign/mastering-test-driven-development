import React, { Component } from "react";

import { Button } from "react-bootstrap";

class App extends Component {
  state = {
    gifts: []
  };

  addGift = () => {
    const { gifts } = this.state;
    const ids = this.state.gifts.map(gift => gift.id);
    const maxId = ids.length > 0 ? Math.max(...ids) : 0;

    gifts.push({
      id: maxId + 1
    });

    this.setState({ gifts });
  };

  render() {
    return (
      <main>
        <h2>Gift Giver</h2>
        <h3>Birthday List</h3>

        <div className="gift-list">
          {
            this.state.gifts.map((gift, index) => {
              return (
                <div key={index}>{gift.id}</div>
              )
            })
          }
        </div>

        <Button className="button-add" onClick={this.addGift}>
          Add Gift
        </Button>
      </main>
    );
  }
}

export default App;
