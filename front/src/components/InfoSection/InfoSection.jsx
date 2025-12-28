
import "./InfoSection.css"

export default function InfoSection() {
  return (
    <>
      <div className="infoSection">
        <h2 className="infoSection__title" id="sobre-nos">Sobre nós</h2>
        <section className="infoSection__container">
          <h2 className="infoSection__title-content">
            Por que escolher <span className="bold">PowerSpot?</span>
          </h2>
          <p className="infoSection__text">
            PowerSpot é a plataforma definitiva para
            encontrar estações de recarga de veículos
            elétricos de forma <span className="bold">rápida, prática e confiável</span>.
            Nosso site é <span className="bold">100% interativo e dinâmico</span>,
            oferecendo <span className="bold">mapas atualizados em tempo real</span>,
            artigos informativos, dicas e recursos para motoristas elétricos.
          </p>
          <p className="infoSection__text">
            Cada clique é pensado para simplificar sua experiência,
            conectando você aos pontos de recarga mais próximos, mostrando <span className="bold">informações detalhadas</span> de cada estação e permitindo explorar
            conteúdos adicionais com facilidade.
          </p>
          <p className="infoSection__text">
            A interface é moderna e intuitiva,
            adaptando-se perfeitamente a qualquer dispositivo. PowerSpot
            não é apenas um site — é uma experiência completa, combinando
            tecnologia de ponta, design interativo e informações confiáveis,
            para que você tenha <span className="bold">controle total sobre sua jornada elétrica</span>.
          </p>
        </section>

        <section className="infoSection__container">
          <h2 className="infoSection__title-content">
            Descubra mais sobre <span className="bold">PowerSpot</span>
          </h2>
          <p className="infoSection__text">
            Explore nossos <span className="bold">artigos, guias e dicas</span> para aproveitar ao máximo sua
            experiência com veículos elétricos. Navegue pelo mapa interativo e descubra as estações
            mais próximas com apenas alguns cliques.

            experimente criar sua conta gratuita e tenha acesso a recursos exclusivos, como saber os detalhes de cada estação de recarga.
          </p>
        </section>
        <section className="infoSection__container infoSection-last__field">
          <h2 className="infoSection__title-content">Quem desenvolveu o <span className="bold">PowerSpot</span></h2>
          <p className="infoSection__text">
            PowerSpot foi desenvolvido por <span className="bold">Arthur, um Desenvolvedor Júnior apaixonado por tecnologia, interfaces modernas e experiências digitais intuitivas. </span>
            Este projeto foi criado como parte do seu portfólio profissional, demonstrando habilidades em:
            Desenvolvimento Front-end (HTML, CSS, JavaScript, React)
            Design de interfaces modernas e responsivas
            Integração de APIs e criação de componentes reutilizáveis
            Arquitetura modular e boas práticas de desenvolvimento
            O site continua evoluindo como uma plataforma real, com foco em qualidade, usabilidade e inovação.
          </p>
        </section>
      </div>
    </>

  );
}