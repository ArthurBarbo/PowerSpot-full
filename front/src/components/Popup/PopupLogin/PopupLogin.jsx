import { useState, useEffect } from 'react';
import Popup from "../Popup";
import "./PopupLogin.css";
import { Link } from 'react-router-dom';
import { loginUser } from '../../Api/auth';

export default function PopupLogin({ isOpen, onClose, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const emailValid = email.includes('@') && email.length >= 3;
    const passwordValid = password.length >= 6;
    const newErrors = { email: "", password: "" };

    if (!email) {
      newErrors.email = "O email é obrigatório.";
    } else if (!email.includes('@') || email.length < 3) {
      newErrors.email = "Por favor, insira um email válido.";
    }

    if (!password) {
      newErrors.password = "A senha é obrigatória.";
    } else if (password.length < 6) {
      newErrors.password = "A senha deve ter pelo menos 6 caracteres.";
    }
    setErrors(newErrors);
    setIsFormValid(emailValid && passwordValid);
  }, [email, password]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isFormValid) {
      setError("Verifique os campos antes de enviar.");
      return;
    }

    try {
      const data = await loginUser({ email, password });


      localStorage.setItem('token', data.token);

      setError('');
      onClose();

      onLoginSuccess?.(data);

    } catch (err) {
      console.error(err);
      setError(err.message || 'Erro ao fazer login');
    }
  }
  function handleClose() {

    setEmail('');
    setPassword('');
    setError('');
    setErrors({ email: '', password: '' });

    onClose();
  }

  return (
    <Popup isOpen={isOpen} onClose={handleClose}>
      <h2 className='popup-login__title'>Login</h2>
      <form className='popup-login__form' onSubmit={handleSubmit}>
        <div className='popup-login__field'>
          <input className={`popup-login__input ${(!email.includes('@') && email.length > 0) || (error && !email)
            ? 'error'
            : ''}`}
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setError(false)}
            required
          />
          <span className="popup-login__error">{errors.email}</span>
        </div>

        <div className='popup-login__field'>
          <input className={`popup-login__input ${(password.length > 0 && password.length < 6) || (error && !password)
            ? 'error'
            : ''
            }`}
            type="password"
            placeholder="Digite sua senha"
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setError(false)}
            required />
          <span className="popup-login__error">{errors.password}</span>
        </div>


        <button type="submit"
          className="popup-login__submit"
          disabled={!isFormValid}>
          Ver minhas Preferências
        </button>

        <p className={`popup-login__error ${error ? 'visible' : ''}`}>{error || '\u00A0'}</p>

        <p className="popup-login__signup-text">
          Ainda não é um membro? <Link to={"/register"} className="popup-login__signup-link" onClick={onClose}>Seja Power⚡
          </Link>
        </p>
      </form>
    </Popup>
  );
}
