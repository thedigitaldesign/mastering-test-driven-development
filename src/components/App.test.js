import React, { Component } from 'react'

// Packages
import { shallow } from 'enzyme'

// Components
import App from './App'


const app = shallow(<App />)

it('renders correctly', () => {
    expect(app).toMatchSnapshot()
})

it('initializes the `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([])
})
