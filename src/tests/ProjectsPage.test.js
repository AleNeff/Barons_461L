import React from'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import ProjectsPage from '../pages/ProjectsPage/ProjectsPage';
Enzyme.configure({ adapter: new Adapter() });

describe('ProjectsPage Tests', () => {
    const projectsInstance = shallow(<ProjectsPage/>);

    it('should show the table', () => {
        const element = projectsInstance.find('#projects-table h2');
        expect(element.text()).toBe('Projects');
    });

});
