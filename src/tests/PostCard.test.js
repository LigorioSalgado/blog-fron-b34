import React from 'react';
import { mount } from 'enzyme';
import { ApolloProvider } from 'react-apollo-hooks';
import {BrowserRouter as Router} from 'react-router-dom';
import mockClient from './mockClient';
import PostCard from '../components/PostCard';



describe("<PostCard/>", () => {

    it("Render works", () => {
        const client  =  mockClient();
        const component = mount(
        <ApolloProvider client={client} >
            <Router>
             <PostCard title="Post de prueba" author="Usuario Prueba" id="21301082341834" />
            </Router>
        </ApolloProvider>
        )
        expect(component).toMatchSnapshot();
    })
    it("Check pass props", () => {
        const client  =  mockClient();
        const component = mount(
        <ApolloProvider client={client} >
            <Router>
             <PostCard title="Post de prueba" author="Usuario Prueba" id="21301082341834" />
            </Router>
        </ApolloProvider>
        )
        expect(component.find(".post-title").text()).toBe("Post de prueba")
        expect(component.find(".post-meta > a").text()).toBe(" Usuario Prueba ")

    })

    it("Check button delete not appear",() => {
        const client  =  mockClient();
        const component = mount(
        <ApolloProvider client={client} >
            <Router>
             <PostCard title="Post de prueba" author="Usuario Prueba" id="21301082341834" />
            </Router>
        </ApolloProvider>
        )
        expect(component.exists("button.btn.btn-danger")).toBe(false)


    });



})