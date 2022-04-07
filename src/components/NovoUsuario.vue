<template>
  <div class="container">
    <h1>Novo Usuário</h1>
    <form @submit.prevent.stop="enviarFormulario()">
      <div class="from-group">
        <label for="nome">Nome</label>
        <input
          type="text"
          class="form-control"
          v-model="usuario.nome"
          id="nome"
        />
      </div>

      <div class="from-group">
        <label for="email">E-mail</label>
        <input
          type="email"
          class="form-control"
          v-model="usuario.email"
          id="email"
        />
      </div>

      <div class="from-group">
        <label for="senha">Senha</label>
        <input
          type="password"
          class="form-control"
          v-model="usuario.password"
          id="senha"
        />
      </div>

      <button type="submit" class="btn btn-success mt-2">Salvar</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      usuario: {
        nome: "",
        email: "",
        password: "",
      },
    };
  },

  methods: {
    enviarFormulario() {
      alert(this.usuario.nome);
      axios
        .post("http://localhost:8000/auth/register", this.usuario)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
