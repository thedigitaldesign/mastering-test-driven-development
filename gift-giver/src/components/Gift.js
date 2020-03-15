import React, { Component } from "react";
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from "react-bootstrap";

export default class Gift extends Component {
  state = {
    person: "",
    gift: ""
  };

  render() {
    return (
      <Form>
        <FormGroup>
          <ControlLabel>Person</ControlLabel>
          <FormControl
            className="input-person"
            onChange={event => this.setState({ person: event.target.value })}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Gift</ControlLabel>
          <FormControl
            className="input-gift"
            onChange={event => this.setState({ gift: event.target.value })}
          />
        </FormGroup>

        <Button
          className="button-remove"
          onClick={() => this.props.removeGift(this.props.gift.id)}
        >
          Remove Gift
        </Button>
      </Form>
    );
  }
}
