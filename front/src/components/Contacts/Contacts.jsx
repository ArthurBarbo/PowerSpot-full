
import "./Contacts.css";
import { useState, useEffect } from "react";


export default function Contacts() {
  const [sucessMessage, setSucessMessage] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
    contactType: "",
    location: ""
  });

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  }
  useEffect(() => {
    const emailIsValid = /^[^\s@]+@[^\s@]+\.com$/.test(formValues.email);

    const isValid = formValues.name.trim() !== "" &&
      formValues.message.trim() !== "" &&
      emailIsValid;

    setIsButtonDisabled(!isValid);
  }, [formValues]);

  function handleSubmit(e) {
    e.preventDefault();
    setSucessMessage("Mensagem enviada com sucesso!");

    setFormValues({ name: "", email: "", message: "" });

    e.target.reset("");
  }
  return (
    <section className="contacts">
      <div className="contacts__container">
        {sucessMessage && (
          <div className="contacts__success">{sucessMessage} </div>
        )}
        <h2 className="contacts__title">Fale Conosco</h2>
        <p className="contacts__subtitle">
          É responsável por um ponto de energia que não aparece no nosso mapa?
          Ou deseja apenas enviar uma mensagem, dúvida ou sugestão?
          Preencha o formulário abaixo e retornaremos o mais rápido possível.
        </p>

        <form className="contacts__form" name="contacts-form" onSubmit={handleSubmit}>
          <div className="contacts__item">
            <label className="contacts__label" htmlFor="contactType">Tipo de contato</label>
            <select
              className="contacts__input"
              id="contactType"
              name="contactType"
              required
              value={formValues.contactType}
              onChange={handleChange}
            >
              <option value="">Selecione uma opção</option>
              <option value="ponto">Cadastrar ponto de energia</option>
              <option value="mensagem">Mensagem geral</option>
              <option value="erro">Reportar erro no mapa</option>
            </select>
          </div>

          {formValues.contactType === "ponto" && (
            <div className={`contacts__extra ${formValues.contactType === "ponto" ? "show" : ""}`}>
              <div className="contacts__item">
                <label className="contacts__label" htmlFor="location">
                  Nome ou Localização do ponto de energia
                </label>
                <input
                  className="contacts__input"
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Ex: Estação Central, Posto Solar X..."
                  required
                  value={formValues.location}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}
          <div className="contacts__item">
            <label className="contacts__label" htmlFor="name">Nome</label>
            <input
              className="contacts__input"
              type="text"
              id="name"
              name="name"
              placeholder="Aqui seu Nome"
              required
              value={formValues.name}
              onChange={handleChange}
            />
          </div>

          <div className="contacts__item">
            <label className="contacts__label" htmlFor="email">Email</label>
            <input
              className="contacts__input"
              type="email"
              id="email"
              name="email"
              placeholder="Aqui seu Email"
              required
              value={formValues.email}
              onChange={handleChange}
            />
          </div>


          <div className="contacts__item">
            <label className="contacts__label" htmlFor="message">Mensagem</label>
            <textarea
              className="contacts__input contacts__textarea"
              id="message"
              name="message"
              placeholder="Escreva sua mensagem..."
              required
              value={formValues.message}
              onChange={handleChange}
            />
          </div>

          <button className="contacts__button" type="submit" disabled={isButtonDisabled}>
            Enviar Solicitação
          </button>
        </form>
      </div>
    </section>
  );
}