import { useState, useEffect } from "react";
import "./PopupName.css";


export default function PopupEditName({ isOpen, onClose, currentName, onSave }) {
    const [name, setName] = useState(currentName || "");
    const [error, setError] = useState("");


    useEffect(() => {
        setName(currentName || "");
        setError("");
    }, [currentName, isOpen]);

    const handleChange = (e) => {
        const value = e.target.value.slice(0, 20);
        setName(value);


        if (value.trim() === "") {
            setError("O nome não pode estar vazio");
        } else if (value.length >= 20) {
            setError("O nome não pode ter mais de 20 caracteres");
        } else {
            setError("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() === "" || name.length > 20) return;
        onSave(name);
        onClose();
    };

    return (
        <div className={`popup-edit ${isOpen ? "open" : ""}`}>
            <div className="popup-edit__content">
                <h2 className="popup-edit__title">Editar Nome</h2>

                <form onSubmit={handleSubmit} className="popup-edit__form">
                    <input
                        type="text"
                        value={name}
                        onChange={handleChange}
                        placeholder="Novo nome"
                        className="popup-edit__input"
                        required
                    />
                    {error && <p className="popup-edit__error">{error}</p>}

                    <div className="popup-edit__buttons">
                        <button type="submit" className="popup-edit__save" disabled={!!error}>
                            Salvar
                        </button>
                        <button type="button" className="popup-edit__cancel" onClick={onClose}>
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}