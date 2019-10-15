import React, {useState} from 'react';
import {useMutation,useQuery} from 'react-apollo-hooks';
import gql from 'graphql-tag';
import Layout from '../common/Layout';
import Input from '../common/Input';
import useForm from '../hooks/useForm';
import authHOC from '../utils/authHOC';

const CREATE_POST = gql`

    mutation updatePost($id:ID!,$data:PostUpdateInput!){
        updateOnePost(id:$id,data:$data){
            _id
        }

    }

` 

const GET_POST = gql`

    query getPost($id:ID!){
        getOnePost(id:$id){
            title
            content
            cover
        }

    }


    `

function Update({history,match}){
   const [sendPost] =  useMutation(CREATE_POST)
   const [cover,setCover] = useState('');
   const [coverPreview, setCoverPreview] = useState('');

   const query = useQuery(GET_POST,{variables:{id:match.params.id}});


  const catchCover = event => {
      const reader =  new FileReader();
      const file = event.target.files[0];

      reader.onloadend = () => {
        setCover(file)
        setCoverPreview(reader.result);
      }
      reader.readAsDataURL(file);
  }

 const catchData = async(inputs) => {
    delete inputs.cover;
    const newData = cover ? {...inputs,cover} : {...inputs} 
    const { data, error } =  await sendPost({variables:{id:match.params.id, data:newData}})
    if (data) history.push('/')
    if (error) alert(`Errores ${error}`)
 }

 const {inputs,handleInputChange,handleSubmit} = useForm(catchData,query.data);

 if(query.loading) return <h2>Cargando...</h2>

return(
    <Layout head="Modifica tu post" subhead="Formulario para escritores">
        <div className="container">
            <div className="row">
                <div className="col-lg-10 col-md-8 mx-auto">
                    <form onSubmit={handleSubmit}>
                        <Input
                         label="Titulo: "
                         name="title"
                         value={inputs.title}
                         change={handleInputChange}
                         placeholder="Titulo de tu post"
                         type="text"
                         required
                        /> 
                        <div class="control-group">
                            <div class="form-group floating-label-form-group controls">
                                <label>Contenido: </label>
                                <textarea className="form-control" 
                                placeholder="Contenido del post "
                                name="content" onChange={handleInputChange} value={inputs.content} 
                                cols="30" rows="10"></textarea>
                            </div>
                        </div>
                        <Input 
                            label="Cover: "
                            name="cover"
                            change={catchCover}
                            placeholder="Cover de tu post"
                            type="file"
                        
                        />
                        
                        {
                            query.data.getOnePost.cover ? (
                                <>
                                    <h4>Imagen Previa </h4>
                                    <img src={query.data.getOnePost.cover} alt="" className="d-block w-50"/>
                                </>
                            ) : ( <div></div>)

                        }
                       

                        <img src={coverPreview} alt="" className="d-block w-50"/>

                        <div class="clearfix my-4">
                            <button type="submit" class="btn btn-primary float-right" >
                             Guardar
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    </Layout>
)


}

export default authHOC(Update);