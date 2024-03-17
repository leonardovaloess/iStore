import React from "react";
import NossosProdutosCard from "../Components/NossosProdutosCard";

const Home = () => {
  return (
    <>
      <div className="container-1">
        <div className="img-container">
          <img
            src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="background-img"
          />
          <h1 className="display-1">Bem Vindo!</h1>
        </div>
        <div className="container-2 mt-5 ">
          <h1>Sobre nós</h1>
          <div className="About-us-container mt-4">
            <p>
              Bem-vindo à nossa loja especializada em produtos Apple, onde a
              tecnologia encontra elegância e inovação. Oferecemos uma ampla
              gama de dispositivos, desde iPhones a MacBooks, em um ambiente
              acolhedor e envolvente. Nossa equipe dedicada está comprometida em
              fornecer suporte excepcional, enquanto nossa loja serve como um
              espaço comunitário para eventos, workshops e celebrações da paixão
              pela inovação. Junte-se a nós e descubra a magia da maçã.
            </p>
          </div>
        </div>
        <div className="container-2 mt-5">
          <h1 className="mt-5">Nossos Produtos</h1>

          <div
            className="nossos-produtos-container mt-5"
            style={{
              display: "flex",
              gap: "2rem",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              padding: "2rem",
              marginBottom: "2rem",
              flexWrap: "wrap",
            }}
          >
            <NossosProdutosCard
              name={"iPhones"}
              img={
                "https://static.lojaonlinetim.com.br/desbloqueados_production/product_images/0001/7424/large.png?1636404625"
              }
              link={"/products"}
            />
            <NossosProdutosCard
              name={"iPads"}
              img={
                "https://www.atacadogames.com/imagem/tablets-e-readers/apple-ipad-10-geracao-mpq13ll-a-10-9-chip-a14-bionic-64gb-azul/2/155931.jpg?pfdrid_c=true"
              }
              link={"/products"}
            />
            <NossosProdutosCard
              name={"Macbooks/Mac"}
              img={
                "https://support.apple.com/library/APPLE/APPLECARE_ALLGEOS/SP854/mbp14-silver2.png"
              }
              link={"/products"}
            />

            <NossosProdutosCard
              name={"Apple watch"}
              img={
                "https://storage.googleapis.com/fixonline/device/image/aws7.png"
              }
              link={"/products"}
            />
          </div>
        </div>

        <div className="container-2 mt-5">
          <h1>Por que escolher a iLovers?</h1>
          <div className="mt-5">
            <p>
              <strong>Qualidade dos Produtos: </strong>
              Os produtos Apple são conhecidos por sua alta qualidade, design
              elegante e durabilidade. Eles geralmente têm uma reputação de
              serem bem construídos e confiáveis.
            </p>
            <p>
              <strong>Ecossistema Integrado: </strong>Muitas pessoas gostam do
              ecossistema integrado da Apple, onde podem usar vários
              dispositivos (como iPhone, iPad, Mac, Apple Watch, etc.) juntos de
              forma harmoniosa. Isso pode proporcionar uma experiência de
              usuário mais consistente e conveniente.
            </p>
            <p>
              <strong>Segurança e Privacidade: </strong>A Apple tem uma
              reputação de ser uma das empresas mais preocupadas com segurança e
              privacidade dos dados dos seus usuários. Muitas pessoas valorizam
              isso e preferem comprar produtos de uma empresa que leve essas
              questões a sério.
            </p>
            <p>
              <strong>Suporte ao Cliente: </strong>A Apple geralmente oferece um
              bom suporte ao cliente, incluindo garantias, serviços de reparo e
              atendimento ao cliente de alta qualidade.
            </p>
            <p>
              <strong>Ecossistema de Aplicativos e Serviços: </strong>A App
              Store oferece uma vasta seleção de aplicativos de alta qualidade,
              muitos dos quais são exclusivos para dispositivos Apple. Além
              disso, a Apple oferece uma variedade de serviços como Apple Music,
              iCloud, Apple TV+ e outros, que podem complementar a experiência
              do usuário.
            </p>
            <p>
              <strong>Atualizações de Software: </strong>A Apple é conhecida por
              fornecer atualizações de software regulares e de longo prazo para
              seus dispositivos, o que pode ajudar a manter os dispositivos
              seguros e atualizados com as últimas tecnologias e recursos.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
