import React from'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import DBPage from '../pages/DBPage/DBPage';
Enzyme.configure({ adapter: new Adapter() });

describe('HWSetsPage Tests', () => {
    const DBPageInstance = shallow(<DBPage/>);

    it('should show the table', () => {
        const element = DBPageInstance.find('h1');
        expect(element.text()).toBe('Data Sets');
    });

});
