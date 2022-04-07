export const logoutMixin = {
  methods: {
    efetarLogout() {
      // localStorage.removeItem("token");
      this.$store.commit("DESLOGAR_USUARIO");
      this.$router.push({ name: "usuario.entrar" });
    },
  },
};
