import React from "react";
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import Layout from '../common/Layout';


const SINGLE_POST = gql`

	query getSinglePost($id:ID!){
		getOnePost(id:$id){
			title
			content
			cover
			author{
				first_name
				last_name
			}
		}
	}

`

function Post({match}){
	const { id } = match.params
	const { loading, data, errors } = useQuery(SINGLE_POST,{variables:{id}})

	console.log(loading)
	if(loading) return <h2>Cargando...</h2>
	if(errors) return <h2>{`Errores: ${errors}`}</h2>

	return(
		<Layout head={data.getOnePost.title} 
		cover={data.getOnePost.cover}
		subhead={`Escrito por:${data.getOnePost.author.first_name}  ${data.getOnePost.author.last_name} `}>
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-lg-10 mx-auto">
						<p>{data.getOnePost.content}</p>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Post;

