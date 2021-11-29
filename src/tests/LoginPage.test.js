import React from'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import LoginPage from '../pages/LoginPage/LoginPage';
Enzyme.configure({ adapter: new Adapter() });

describe('LoginPage Tests', () => {
    const loginInstance = shallow(<LoginPage/>);

    it('should show the title', () => {
        const element = loginInstance.find('h1');
        expect(element.text()).toBe('Barons Team');
    });

    it('should render two forms', () => {
        const element = loginInstance.find('Form');
        expect(element.length).toEqual(2);
    });

    it('should set the username', () => {
        const loginInstance = shallow(<LoginPage/>)
        const changeUsername = loginInstance.find('#username').simulate('change', {target: {name: "username", value: "rpatel"}});
        const usernameField = loginInstance.find('#username');
        expect(usernameField.prop('value')).toBe('rpatel');
        
    });

    it('should set the password', () => {
        const loginInstance = shallow(<LoginPage/>)
        const changePassword = loginInstance.find('#password').simulate('change', {target: {name: "password", value: "password123"}});
        const passwordField = loginInstance.find("#password");
        expect(passwordField.prop('value')).toEqual('password123');
    });

});


