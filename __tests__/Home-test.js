import 'react-native';
import React from 'react';
import Home from '../src/Views/Home/Home';
import renderer from 'react-test-renderer';

describe("<Home />", () => {
  test("if ContentList is rendered", () =>{
    const { getByText } = renderer(<Home />);
    expected(getByText("ContentList")).toBeInTheDocument()
  })  
})
