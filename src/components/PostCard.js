import React from "react";
import { Link } from 'react-router-dom'
import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';


const DELETE_POST = gql`

    mutation deletePost($id:ID!){
        deleteOnePost(id:$id)
    }
`

function PostCard({ title, author, id, edit, remove }) {
  //Como parametro recibo props
  
  const [deletePost] =  useMutation(DELETE_POST)
  
  return (
    <>
      <div className="post-preview">
        <Link to={`/post/${id}`}>
          <h2 className="post-title">
           {title}
          </h2>
        </Link>
        <p className="post-meta">
          Posted by
          <a href="#"> {author} </a>
        </p>
        <p>
        {
          edit ? <Link to={`/update/${id}`} > Editar </Link> : <></>
        }
        {
          remove ? <button className="btn btn-danger ml-3" onClick={
            () => {
              // eslint-disable-next-line no-restricted-globals
              const affirm = confirm("Desea Borrara este Post")
              if(affirm){
                deletePost({variables:{id}}).then(() => {
                  window.location.reload();
                });
              }
            }
          }> Borrar Post </button> : <></>
        }
        </p>
        
      </div>
      <hr />
    </>
  );
}


export default PostCard;