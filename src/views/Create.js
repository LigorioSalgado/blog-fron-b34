import React, {useState} from 'react';
import {useMutation} from 'react-apollo-hooks';
import gql from 'graphql-tag';
import Layout from '../common/Layout';
import Input from '../common/Input';
import useForm from '../hooks/useForm';
import authHOC from '../utils/authHOC';

const CREATE_POST = gql`

    mutation createPost($data:PostInput!){
        createNewPost(data:$data){
            _id
        }

    }

` 

function Create({history}){
   const [sendPost] =  useMutation(CREATE_POST)
   const [cover,setCover] = useState('');
   const [coverPreview, setCoverPreview] = useState('');

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
    const { data, error } =  await sendPost({variables:{data:{...inputs,cover}}})
    if (data) history.push('/')
    if (error) alert(`Errores ${error}`)
 }

 const {inputs,handleInputChange,handleSubmit} = useForm(catchData);

return(
    <Layout head="Crea un nuevo post" subhead="Formulario para escritores">
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
                            required
                        
                        />

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

export default authHOC(Create);