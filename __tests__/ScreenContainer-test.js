import 'react-native';
import React from 'react';
import ContentList from '../src/Components/ScreenContainer/ScreenContainer';
import renderer from 'react-test-renderer';

describe('<ContentList />', () => {
  test('if Content List is a list', () => {
    const data = [{name: 'bulbasaur', order: 1, id: 1, type: "grass", types:[{},{}], stats:[{},{}]}];
    const renderItem = ({ item }) => (
      <Text>
        {item.id}: {item.name}
      </Text>
    );
    const { getByTestId } = renderer(<ContentList data={data} renderItem={renderItem} testID="flatlist"/>);
    const flatlist = getByTestId;
    expect(flatlist.props.data).toEqual(data);
    expect(flatlist.props.renderItem).toEqual(renderItem);
  });
});
