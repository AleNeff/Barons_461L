import React from'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import HWSetsPage from '../pages/HWSetsPage/HWSetsPage';
Enzyme.configure({ adapter: new Adapter() });

describe('HWSetsPage Tests', () => {
    const HWSetsInstance = shallow(<HWSetsPage/>);

    it('should show the table', () => {
        const element = HWSetsInstance.find('#hwsets-table h2');
        expect(element.text()).toBe('Hardware Sets');
    });

});
