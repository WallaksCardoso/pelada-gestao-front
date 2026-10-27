const AMBIENTE_LOCAL =
  window.location.hostname.includes("localhost") || window.location.hostname === "127.0.0.1";

const API_AUTH = AMBIENTE_LOCAL
  ? "http://localhost:8081/api"
  : "https://spring-jwt-auth-jdli.onrender.com/api";

const API_PELADA = AMBIENTE_LOCAL
  ? "http://localhost:8080/api"
  : "https://pelada-gestao.onrender.com/api";
