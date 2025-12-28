import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../Api/auth.js";

export default function Register() {
  const [successMessage, setSuccessMessage] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    password: "",
    email: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;

    const sanitizedValue =
      name === "email"
        ? value.trim().toLowerCase()
        : value.trim();

    setFormValues((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }));
  }

  const isValid =
    formValues.name !== "" &&
    formValues.password !== "" &&
    formValues.email !== "";

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await registerUser(formValues);

      setSuccessMessage("Conta criada com sucesso!");

      setTimeout(() => {
        setSuccessMessage("");
        navigate("/");
      }, 3000);
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className="register">
      {successMessage && (
        <div className="register__success">{successMessage}</div>
      )}

      <div className="register__container">
        <h2 className="register__title">
          Seja um membro <span className="register__bold">Power!</span>
        </h2>

        <form
          className="register__form form"
          onSubmit={handleSubmit}
          name="register-form"
        >
          <div className="register__item">
            <label className="register__label" htmlFor="name">
              Nome
            </label>
            <input
              className="register__input"
              type="text"
              id="name"
              name="name"
              placeholder="Aqui seu Nome de Usuário"
              required
              value={formValues.name}
              onChange={handleChange}
            />
          </div>

          <div className="register__item">
            <label className="register__label" htmlFor="password">
              Palavra Passe
            </label>
            <input
              className="register__input"
              type="password"
              id="password"
              name="password"
              placeholder="Aqui sua Palavra Passe"
              required
              value={formValues.password}
              onChange={handleChange}
            />
          </div>

          <div className="register__item">
            <label className="register__label" htmlFor="email">
              Email
            </label>
            <input
              className="register__input"
              type="email"
              id="email"
              name="email"
              placeholder="Aqui seu Email"
              required
              value={formValues.email}
              onChange={handleChange}
            />
          </div>

          <button
            className="register__button"
            type="submit"
            disabled={!isValid}
          >
            Tornar-se Membro
          </button>
        </form>
      </div>
    </div>
  );
}