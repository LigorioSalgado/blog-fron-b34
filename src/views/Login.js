import React, {useState} from "react";
import Layout from "../common/Layout";
import Input from "../common/Input";
import useForm from "../hooks/useForm";

function Login() {
    const catchData = (inputs) => {
        console.log(inputs);
    }

    const {handleInputChange,handleSubmit,inputs} = useForm(catchData)
  return (
    <Layout head="Inicia Sesion" subhead="Esto es solo para autores">
      <div className="container my-4">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <form onSubmit={handleSubmit}>
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
                value={inputs.Password}
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
  );
}

export default Login;