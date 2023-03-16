import React from "react";

const Home = () => {
  const Email = window.localStorage.getItem("Email");
  const Senha = window.localStorage.getItem("Senha");

  React.useEffect(() => {
    window.localStorage.clear();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <h1>Dados que iriam para um API</h1>
      <p>
        Seu e-mail: <span style={{ fontWeight: "bold" }}>{Email}</span>
      </p>
      <p>
        Sua Senha: <span style={{ fontWeight: "bold" }}>{Senha}</span>
      </p>
    </div>
  );
};

export default Home;
