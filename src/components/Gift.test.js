import React from "react";
import { shallow } from "enzyme";
import Gift from "./Gift";

describe("Gift", () => {
  const mockRemove = jest.fn();
  const id = 1;
  const props = { gift: { id }, removeGift: mockRemove };
  const gift = shallow(<Gift {...props} />);

  it("renders correctly", () => {
    expect(gift).toMatchSnapshot();
  });

  it("initializes a person and present in `state`", () => {
    expect(gift.state()).toEqual({ person: "", gift: "" });
  });

  describe("when typing into the person input", () => {
    const person = "Flying Butt Punch";

    beforeEach(() => {
      gift
        .find(".input-person")
        .simulate("change", { target: { value: person } });
    });

    it("updates the person in `state`", () => {
      expect(gift.state().person).toEqual(person);
    });
  });

  describe("when typing into the gift input", () => {
    const gift_name = "Wicked Nose Ring";

    beforeEach(() => {
      gift
        .find(".input-gift")
        .simulate("change", { target: { value: gift_name } });
    });

    it("updates the gift in `state`", () => {
      expect(gift.state().gift).toEqual(gift_name);
    });
  });

  describe("when clicking the `Remove Gift` button", () => {
    beforeEach(() => {
      gift.find(".button-remove").simulate("click");
    });

    it("calls the removeGift callback", () => {
      expect(mockRemove).toHaveBeenCalledWith(id)
    });
  });
});
