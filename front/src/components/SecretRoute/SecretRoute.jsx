import "./SecretRoute.css";

export default function SecretRoute() {
    return (
        <div className="secret-route">
            <h2 className="secret-route__title">Área protegida</h2>

            <p className="secret-route__text">
                <span className="bold">Obrigado por testar o meu projeto.</span>
                Esta página existe apenas para demonstrar
                a implementação de uma rota protegida com autenticação.
            </p>

            <p className="secret-route__text">
                <span className="bold">Thank you for testing my project.</span>
                This page exists solely to demonstrate
                the implementation of a protected route with authentication.
            </p>
        </div>
    );
}