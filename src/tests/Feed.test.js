import React from 'react';
import {act} from 'react-dom/test-utils';
import { mount } from 'enzyme';
import { ApolloProvider } from 'react-apollo-hooks';
import { BrowserRouter as Router } from 'react-router-dom';
import mockClient from './mockClient';
import Feed from '../components/Feed';
import gql from 'graphql-tag';

const QUERY_POST = gql`
	query GETPOST{
		getPosts{
			_id,
			title,
			author{
				first_name,
				last_name
			}
		}
	}

`;

const ALL_POST_MOCK = [
    {
        request:{
            query:QUERY_POST,
            variables:{}
        },
        result:{
            data:{
                getPosts:[
                    {_id:"7236817648264872364",title:"Post title 1", author:{first_name:"Prueba",last_name:"prueba"}},
                    {_id:"7236817648264872364",title:"Post title 2", author:{first_name:"Prueba",last_name:"prueba"}},
                    {_id:"7236817648264872364",title:"Post title 3", author:{first_name:"Prueba",last_name:"prueba"}},
                    {_id:"7236817648264872364",title:"Post title 4", author:{first_name:"Prueba",last_name:"prueba"}}
                ]
            }
        }
    
    
}]

const waitForNexTick = () => new Promise(resolve =>  setTimeout(resolve));

describe("<Feed />",() => {
    it("Render works", () => {
        const client =  mockClient(ALL_POST_MOCK);

        const component = mount(
            <ApolloProvider client={client}>
                <Router>
                    <Feed/>
                </Router>
            </ApolloProvider>
        )

        expect(component).toMatchSnapshot()

    });

    it("Check post count match",async() => {

       act(() => {
            const setTests = async() => {
                const client =  mockClient(ALL_POST_MOCK);
                await waitForNexTick()
    
                const component = mount(
                    <ApolloProvider client={client}>
                        <Router>
                            <Feed/>
                        </Router>
                    </ApolloProvider>
                )
    
            expect(component.find('.post-preview')).toHaveLength(4);
    
            }
            setTests();

        })
    
        


    })


})