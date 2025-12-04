import { useState } from "react";

export function Login() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) return alert("Preencha os campos");

    setLoading(true);

    await fetch(`http://localhost:3000/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Essential for sending JSON data
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .catch((err) => {
        alert(err.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <main className="flex bg-background size-full min-h-dvh justify-center items-center">
      <div className="bg-white gap-12 flex flex-col p-6 rounded-2xl max-w-lg h-129 size-full items-center text-center">
        <div className="flex flex-col gap-4 justify-around items-center  text-center">
          <h1 className="font-Regular text-5xl text-[#1C385B]">Mini SUAP</h1>
          <h2 className="text-xl font-medium text-[#525252]">
            Faça login para acessar seu painel de suporte
          </h2>
        </div>
        <div className="flex flex-col justify-center px-6 w-full gap-4">
          <div className="flex-col flex items-start w-full gap-1">
            <label htmlFor="email" className="font-semibold">
              Email
            </label>
            <input
              required
              id="email"
              name="email"
              type="email"
              placeholder="Informe seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#F3F3F5] rounded-lg py-2 px-4 "
            />
          </div>
          <div className="flex-col flex items-start w-full gap-1">
            <label htmlFor="password" className="font-semibold">
              Senha
            </label>
            <input
              required
              id="password"
              name="password"
              type="password"
              placeholder="Informe sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#F3F3F5] rounded-lg py-2 px-4"
            />
          </div>
          <button
            type="button"
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-[#10345E] rounded-lg py-2 px-4 text-white mt-4"
          >
            {loading ? "Fazendo login..." : "Login"}
          </button>
          <a className="place-self-end hover:border-b border-cyan-500 cursor-pointer hover:text-cyan-500">
            Esqueceu sua senha?
          </a>
        </div>
      </div>
    </main>
  );
}
