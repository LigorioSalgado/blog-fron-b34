import React from 'react';
import Layout from '../common/Layout';
import Input from '../common/Input';
import useForm from '../hooks/useForm';

function Signup(){

    const catchData = (inputs) => {
        console.log(inputs);
    }

    const {handleInputChange,handleSubmit,inputs} = useForm(catchData)

    return(
        <Layout head="Crea tu cuenta" subhead="Crea una cuenta para empezar a escribir">
        <div className="container my-4">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <form onSubmit={handleSubmit}>
                <Input
                  name="first_name"
                  label="Nombre: "
                  type="text"
                  placeholder="Escribe tu nombre"
                  value={inputs.first_name}
                  change={handleInputChange}
                  required={true}
                />
                <Input
                  name="last_name"
                  label="Apellidos: "
                  type="text"
                  placeholder="Escribe tus apellidos"
                  value={inputs.last_name}
                  change={handleInputChange}
                  required={true}
                />
                <Input
                  name="email"
                  label="Email: "
                  type="email"
                  placeholder="Escribe tu email"
                  value={inputs.email}
                  change={handleInputChange}
                  required={true}
                />
                <Input
                  name="password"
                  label="Pasword: "
                  type="password"
                  placeholder="Escribe tu password"
                  value={inputs.password}
                  change={handleInputChange}
                  required={true}
                />
                <Input
                  name="confirm_password"
                  label="Confirma Password: "
                  type="password"
                  placeholder="Vuelve a escribir tu password"
                  value={inputs.confirm_password}
                  change={handleInputChange}
                  required={true}
                />
                <div class="clearfix mt-4">
                  <button type="submit" class="btn btn-primary float-right" >
                    Entrar;
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>

    )

}

export default Signup;