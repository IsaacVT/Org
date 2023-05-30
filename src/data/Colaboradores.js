import { v4 as uuid } from "uuid";

const ListaColaboradores = [
  {
    id: uuid(),
    nombre: "Harland Lohora",
    puesto: "Instructor",
    foto: "https://github.com/harlandlohora.png",
    equipo: "Front End",
    fav: false,
  },
  {
    id: uuid(),
    nombre: "Genesys Rondón",
    puesto: "Desarrolladora de software e instructora",
    foto: "https://github.com/genesysaluralatam.png",
    equipo: "Programación",
    fav: true,
  },
  {
    id: uuid(),
    nombre: "Jeanmarie Quijada",
    puesto: "Instructora en Alura Latam",
    foto: "https://github.com/JeanmarieAluraLatam.png",
    equipo: "UX y Diseño",
    fav: false,
  },
  {
    id: uuid(),
    nombre: "Christian Velasco",
    puesto: "Head de Alura  e instructor",
    foto: "https://github.com/christianpva.png",
    equipo: "Programación",
    fav: false,
  },
  {
    id: uuid(),
    nombre: "Jose Gonzalez",
    puesto: "Dev. FullStack",
    foto: "https://github.com/JoseDarioGonzalezCha.png",
    equipo: "Innovación y Gestión",
    fav: false,
  },
  {
    id: uuid(),
    nombre: "Isaac Vega",
    puesto: "Desarrollador de Software",
    foto: "https://github.com/IsaacVT.png",
    equipo: "Software",
    fav: true,
  },
];

export default ListaColaboradores;
