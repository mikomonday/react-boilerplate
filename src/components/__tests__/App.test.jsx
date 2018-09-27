import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Components
import App from '../App';

// Mocked HOCs
// jest.moc('../path/to/component, () => 'MockedComponent');

// Props
// const mockFn = jest.fn();
// const props = {};

configure({ adapter: new Adapter() });
describe('App | Component Testing', () => {
  const wrapper = shallow(<App />);

  it('displays the App component', () => {
    expect(wrapper.find('#app').exists()).toEqual(true);
  });
});
