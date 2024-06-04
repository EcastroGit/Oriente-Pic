import peñol1 from "../assets/galery/el-peñol1.webp"
import peñol2 from "../assets/galery/el-peñol2.webp";
import carmen1 from "../assets/galery/carmen-viboral1.webp";
import ceja1 from "../assets/galery/la-ceja1.webp";
import saltoBuey1 from "../assets/galery/ceja-saltobuey1.webp";
import guarne1 from "../assets/galery/guarne1.webp";
import cocorna1 from "../assets/galery/cocorna1.webp";
import cocorna2 from "../assets/galery/cocorna2.webp";
import guatape1 from "../assets/galery/guatape1.webp";
import sanCarlos1 from "../assets/galery/san-carlos1.webp";
import sanLuis1 from "../assets/galery/san-luis1.webp";
import sanRafael1 from "../assets/galery/san-rafael1.webp";

export const mainGalery = [
  {
    id:"img1",
    image: peñol1,
    title: "La Piedra del Peñol",
    description: "La Piedra del Peñol es uno de los atributos naturales más característicos de este municipio y atrae gran cantidad de turistas.",
    alt: "El peñol, Antioquia."
  },
  {
    id:"img2",
    image: peñol2,
    title: "El Peñol",
    description: "El Peñol es un municipio situado en zona de embalses y con gran riqueza hídrica y natural.",
    alt: "El peñol, Antioquia."
  },
  {
    id:"img3",
    image: carmen1,
    title: "El Carmen",
    description: "El Carmen es un municipio con gran vocación artística, donde la cerámica y la cultura cautivan a propios y visitantes.",
    alt: "El Carmen, Antioquia"
  },
  {
    id:"img4",
    image: ceja1,
    title: "La Ceja",
    description: "La Ceja, Antioquia es un municipio con gran riqueza natural, pero además posee un importante desarrollo urbano.",
    alt: "La Ceja, Antioquia"
  },
  {
    id:"img5",
    image: saltoBuey1,
    title: "El Salto del buey",
    description: "El Salto del buey es una caída de agua natural ubicada en el municipio de la Ceja, Antioquia.",
    alt: "El Salto del Buey, en la Ceja"
  },
  {
    id:"img6",
    image: guarne1,
    title: "El Alto de La Virgen",
    description: "El Alto de la Virgen es un lugar ubicado en Guarne, Antioquia, sobre la via Medellín-Bogotá, y atrae anualmente gran cantidad de turistas religiosos.",
    alt: "Cocorná"
  },
  {
    id:"img7",
    image: cocorna1,
    title: "Cocorná",
    description: "Cocorná, Antioquia. Municipio con maravillosas fuentes hídricas y rios cristalinos.",
    alt: "La ceja"
  },
  {
    id:"img8",
    image: cocorna2,
    title: "Cocorná",
    description: "El municipio de Cocorná en su zona urbana.",
    alt: "Cocorná"
  },
  {
    id:"img9",
    image: guatape1,
    title: "Guatapé",
    description: "El Embalse de Guatapé es característico por permitir variedad de atracciónes y deportes náuticos.",
    alt: "Guatapé, Antioquia"
  },
  {
    id:"img10",
    image: sanCarlos1,
    title: "San Carlos",
    description: "Un municipio con gran riqueza hídrica y rios cristalinos.",
    alt: "San Carlos, Antioquia"
  },
  {
    id:"img11",
    image: sanLuis1,
    title: "San Luis",
    description: "Un municipio con gran riqueza hídrica y rios color turquesa que maravillan por su belleza.",
    alt: "San Luis, Antioquia"
  },
  {
    id:"img12",
    image: sanRafael1,
    title: "San Rafael",
    description: "Un municipio para maravillarse por su gran riqueza hídrica y disfrutar de sus aguas naturales.",
    alt: "San Rafael, Antioquia"
  }
];

function findImageIndexById(id) {
  return mainGalery.findIndex(item => item.id === id);
}

// Ejemplo de uso
const index = findImageIndexById('img5');
console.log(index); 