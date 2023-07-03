const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      rooms: 5,
      m: 500
    }
];

let ContHT = "";
let Prop = document.getElementById("Caja");
propiedadesJSON.forEach(Caracteristica => {
  ContHT +=   `
  <div class="propiedad">
    <div class="img" style="background-image: url('${Caracteristica.src}')"></div>
    <section>
      <h5>${Caracteristica.name}</h5>
      <div class="d-flex justify-content-between">
        <p>Cuartos: ${Caracteristica.rooms}</p>
        <p>Metros: ${Caracteristica.m}</p>
      </div>
      <p class="my-3">${Caracteristica.description}</p>
      <button class="btn btn-info">Ver más</button>
    </section>
  </div>
  `;
})

Prop.innerHTML = ContHT

let TotalFiltro = document.querySelector("#TituloTotal");
TotalFiltro.innerHTML = propiedadesJSON.length.toString();

function PropFilter () {
  let Cuartos = parseInt(document.querySelector("#Cuartos").value);
  let MetrosD = parseInt(document.querySelector("#MetrosDesde").value);
  let MetrosH = parseInt(document.querySelector("#MetrosHasta").value);

  if(Cuartos <= 0 || MetrosD <= 0 || MetrosH <= 0){
    alert("Por favor coloque un numero mayor a 0 en los campos solicitados.");
    return;
  }

  if(isNaN(Cuartos) || isNaN(MetrosD) || isNaN(MetrosH)){
    alert("En los campos es obligatorio que coloque un numero.");
    return;
  }

  const PopFiltro = propiedadesJSON.filter(Carac => {
    return(Carac.rooms === Cuartos && Carac.m >= MetrosD && Carac.m <= MetrosH);  
  });

  if (PopFiltro.length.toString() == 0) {
    alert("Mal especificada las características de las propiedades");
  } 
  else {
    let ContHT = "";
    let Prop = document.getElementById("Caja");
    PopFiltro.forEach(Caracteristica => {
      ContHT +=   `
      <div class="propiedad">
        <div class="img" style="background-image: url('${Caracteristica.src}')"></div>
        <section>
          <h5>${Caracteristica.name}</h5>
          <div class="d-flex justify-content-between">
            <p>Cuartos: ${Caracteristica.rooms}</p>
            <p>Metros: ${Caracteristica.m}</p>
          </div>
          <p class="my-3">${Caracteristica.description}</p>
          <button class="btn btn-info">Ver más</button>
        </section>
      </div>
    `;
  })

  Prop.innerHTML = ContHT
  }

  let TotalFiltro = document.querySelector("#TituloTotal");
  TotalFiltro.innerHTML = PopFiltro.length.toString();

}; 

function Reset (){
  let Cuartos = parseInt(document.querySelector("#Cuartos").value);
  let MetrosD = parseInt(document.querySelector("#MetrosDesde").value);
  let MetrosH = parseInt(document.querySelector("#MetrosHasta").value);
  Cuartos = "";
  MetrosD = "";
  MetrosH = "";
  location.reload();
}


