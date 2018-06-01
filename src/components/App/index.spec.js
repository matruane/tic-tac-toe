import React from 'react'
import { shallow } from 'enzyme'

import App from '.'

describe('components:App', () => {
  it('render the App with a game board and nine squares', () => {
    expect(toJson(shallow(<App />))).toMatchSnapshot()
  })
})
