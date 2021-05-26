import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

export default class Index extends React.Component {
  state = {
    email: '',
    senha: '',
    logado: false
  }

  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  }

  handleChangeSenha = event => {
    this.setState({ senha: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    axios.post(`https://projeto-integrador-4.herokuapp.com/auth/login`, { email: this.state.email, password: this.state.senha })
      .then(res => {
        if (res.status === 200)
          this.setState({ logado: true });
      });
  }

  render() {
    let status = <p>Desconectado</p>
    if (this.state.logado)
      status = <p>Conectado</p>

    return (
      <div>
        <br />
        <form onSubmit={this.handleSubmit}>
          <label>
            Email:
            <input type="email" name="email" onChange={this.handleChangeEmail} />
          </label>
          <label>
            Password:
            <input type="password" name="password" onChange={this.handleChangeSenha} />
          </label>
          <button type="submit">Sign In</button>
        </form>
        {status}
      </div>
    )
  }
}


ReactDOM.render(
  <Index>
  </Index>,
  document.getElementById('root')
);
