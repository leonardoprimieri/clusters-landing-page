import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";
import img4 from "../../assets/image4.png";
import img5 from "../../assets/image5.jpg";
import img6 from "../../assets/image6.png";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));

const slideContent = [
  {
    text: `Necessário 3 (pode ser mais ou menos, depende de sua necessidade) computadores Raspberry PI.`,
    image: img5,
  },
  {
    text: `3 Cabos de rede conectados a 1 switch para realizar a comunicação entre eles`,
    image: img1,
  },
  {
    text: `1 cabo de rede para conectar o Switch a internet banda larga`,
    image: "",
  },
  {
    text: `Alimentação deles se dá por cabos USB conectados a um HUB`,
    image: "",
  },
  {
    text: `3 Cartões microSD 8GB (1 para cada Raspberry)`,
    image: "",
  },
  {
    text: `Baixar a ISO do sistema operacional Raspbian Lite SEM DESKTOP (para melhor optimização) e grava-lá nos microSD.`,
    image: "",
  },
  {
    text: `Monitor e teclado conectados ao Raspberry para realizar as configurações iniciais.`,
    image: "",
  },
  {
    text: `Configurar o Cluster SSH para configurar todos os Raspberry ao mesmo tempo.`,
    image: img3,
  },
  {
    text: `Configurar o Raspbian como S.O dos Raspberry`,
    image: "",
  },
  {
    text: `Configurar o MPICH: Protocolo que gerencia a comunicação distribuída dos aparelhos em rede`,
    image: img2,
  },
  {
    text: `Configurar o MPi4py: Tradutor de Python para MPICH, permitindo que o cluster execute scripts em Python`,
    image: img6,
  },
  {
    text: `Definir o Cluster SSH: Configurar as SSH Keys de cada Raspberry, para que a cada comando executado pelo aparelho Mestre, não seja solicitado a senha dos aparelhos Servos`,
    image: "",
  },
  {
    text: `Configurar o MachineFile para os arquivos de todos os Raspberry poderem se comunicar `,
    image: "",
  },
  {
    text: `Exemplo de como fica a execução final desse cluster`,
    image: img4,
  },
];

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        icon="developer.svg"
        id="intro"
      />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />

      <h1>Passo a passo</h1>
      <AwesomeSlider>
        {slideContent.map((item, idx) => (
          <div className="lp-slide">
            {item.image && <img src={item.image} alt="RASP" />}
            Passo {idx + 1}: {item.text}
          </div>
        ))}
      </AwesomeSlider>
      <div style={{ marginTop: "10rem" }}>
        <h1>Integrantes</h1>
        <ul className="members_ul">
          <li>Leonardo Merlo Primieri</li>
          <li>Gabriel Forchesatto</li>
          <li>Guilherme Dalazen</li>
          <li>Demétrio Webber</li>
          <li>Varlei de Cesare</li>
        </ul>
      </div>
    </Container>
  );
};

export default Home;
