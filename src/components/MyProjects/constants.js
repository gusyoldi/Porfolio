import CompartiUnDatoImg from '../../assets/images/ProjectsImg/comparti-un-dato.png'
import EdefiImg from '../../assets/images/ProjectsImg/edefi-img.png'
import OchentaNoventaImg from '../../assets/images/ProjectsImg/ochentaNoventa.jpg'
import PigGameImg from '../../assets/images/ProjectsImg/pig-game-img.png'
import ReactPizzaImg from '../../assets/images/ProjectsImg/react-pizza.png'
import CSS from '../../assets/images/Technologies/css-icon.svg'
import JAVASCRIPT from '../../assets/images/Technologies/javascript-icon.svg'
import NETLIFY from '../../assets/images/Technologies/netlify-icon.svg'
import NEXT from '../../assets/images/Technologies/next-icon.svg'
import REACT from '../../assets/images/Technologies/react-icon.svg'
import STRAPI from '../../assets/images/Technologies/strapi-icon.svg'
import SUPABASE from '../../assets/images/Technologies/supabase-icon.svg'
import TAILWIND from '../../assets/images/Technologies/tailwind-icon.svg'
import TYPESCRIPT from '../../assets/images/Technologies/typescript-icon.svg'
import VERCEL from '../../assets/images/Technologies/vercel-icon.svg'
import VITE from '../../assets/images/Technologies/vite-icon.svg'

const projects = [
  {
    id: 'react-pizza',
    title: 'React-Pizza',
    subtitle: 'E-commerce',
    image: ReactPizzaImg,
    toProject: 'https://react-pizza-gus.netlify.app/',
    toGithub: 'https://github.com/gusyoldi/react-pizza',
    description:
      'Proyecto de e-commerce de pizzas realizado con React.js y Tailwind. Permite a los usuarios seleccionar pizzas, personalizarlas y agregarlas a un carrito de compras. La aplicación gestiona el estado del carrito y calcula el total de la compra en tiempo real. Incluye geolocalizacion.',
    coreTechs: [VITE, REACT, TYPESCRIPT, TAILWIND],
    otherTechs: [NETLIFY],
  },
  {
    id: 'comparti-un-dato',
    title: 'Compartí un dato',
    subtitle: 'App conectada a Supabase',
    image: CompartiUnDatoImg,
    toProject: 'https://comparti-un-dato-gustavoyoldi.netlify.app/',
    toGithub: 'https://github.com/gusyoldi/Today-I-learned',
    description:
      'Aplicación mobile-first desarrollada con React y una base de datos en Supabase. Permite a los usuarios compartir datos, votarlos (interesante / muy interesante / falso) y filtrarlos por categoría. Éste proyecto me sirvió para practicar integración con APIs, manejo de estado en React y trabajo con CRUD real, además del despliegue en Netlify.',
    coreTechs: [REACT, CSS, SUPABASE],
    otherTechs: [NETLIFY],
  },
  {
    id: 'ochenta-noventa',
    title: 'Ochenta Noventa',
    subtitle: 'Landing page',
    image: OchentaNoventaImg,
    toProject: 'https://ochentanoventa.com.ar',
    toGithub: 'https://github.com/gusyoldi/landing-OchentaNoventa',
    coreTechs: [NEXT, REACT, TYPESCRIPT, TAILWIND],
    otherTechs: [VERCEL, STRAPI],
  },
  {
    id: 'todo-o-nada',
    title: 'Todo o nada',
    subtitle: 'Juego PvP',
    image: PigGameImg,
    toProject: 'https://pig-game-gus.netlify.app/',
    toGithub: 'https://github.com/gusyoldi/pig-game',
    coreTechs: [JAVASCRIPT, CSS],
    otherTechs: [NETLIFY],
  },
  {
    id: 'liga-edeﬁ',
    title: 'Liga EDEFI',
    subtitle: 'Web pública',
    image: EdefiImg,
    toProject: 'https://web.edefi.com.ar/',
    coreTechs: [REACT],
    otherTechs: [TAILWIND],
  },
]

export default projects
