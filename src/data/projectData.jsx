// src/data/projectsData.js
import MediaBraza from "../assets/projects/Media_Braza.png";
import DanielaPolido from "../assets/projects/Adv_Daniela.png";
import T2W from "../assets/projects/Time2Work.png";
const projects = [
  {
    id: 1,
    name: "Media Braza",
    description:
      "Media Braza é uma Website de mídia social que conecta criadores de conteúdo e marcas.",
    image: MediaBraza, // Coloque suas imagens na pasta public/images
    link: "https://mediabraza.com/",
    technologies: ["React", "HTML", "JavaScript", "CSS"],
  },
  {
    id: 2,
    name: "Adv Daniela Polido",
    description:
      "Landpage sobre Daniela Polido, advogada trabalhista que atual em portugal e brasil.",
    image: DanielaPolido,
    link: "https://advdanielapolido.com/",
    technologies: ["React", "HTML", "JavaScript", "CSS"],
  },
  {
    id: 3,
    name: "Time2Work",
    description:
      "Landopage destinada a aluguel  de salas comerciais,salas para reunioes e coworking.",
    image: T2W,
    link: "https://t2w.pt",
    technologies: ["React", "HTML", "JavaScript", "CSS"],
  },
];

export default projects;
