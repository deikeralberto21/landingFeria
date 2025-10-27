import './card.css'
interface cardProps {
    title:string,
    description:string,
    previewTitle:string,
    previewDescription:string
    img:string
}
function Card(props : cardProps){
    
    return(
        <div key={props.title} className="container-img py-5 h-9/12 w-sm">
          <div
            style={{
              backgroundImage:
                `url('${props.img}')`,
            }}
            className="relative h-130 w-full bg-cover bg-center bg-no-repeat preview-img-rotate"
          >
            <div className="h-full text-center w-full font-sans text-white bg-black/70 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-extrabold">{props.previewTitle}</h3>
              <p className="w-9/12">
                {props.previewDescription}
              </p>
            </div>

            <div className="text-center content-img-rotate top-0 left-0 h-full w-full text-black bg-white absolute rotate-x-180 flex flex-col justify-center items-center">
              <h3 className="text-2xl font-extrabold">{props.title}</h3>
              <p className="w-9/12">
                {props.description}
              </p>
              <a href="/activities">
                <button
                    type="button"
                    className="focus:outline-none text-white bg-green-400 mt-5 cursor-pointer hover:bg-green-500 font-medium text-sm px-5 py-2.5 me-2 mb-2"
                >
                    Ver mas
                </button>
              </a>
            </div>
          </div>
        </div>
    )
}

export default function SectionCards() {
  return (
    <section
      id="activities"
      style={{ maxHeight: "max-content", minHeight: "100vh" }}
      className="w-full flex flex-wrap justify-center items-center gap-5"
    >
      
      <Card 
        img="https://capital.es/wp-content/uploads/2024/02/Ferias-profesionales-1024x576.jpg" 
        description="Conecta con profesionales líderes del sector médico y cannabis. Intercambia experiencias, establece colaboraciones estratégicas y amplía tu red de contactos con expertos de toda España." 
        title="Networking Profesional" 
        previewDescription="Conecta con profesionales del sector" 
        previewTitle="Networking"
      />
      <Card 
        img="https://paisajetransversal.org/wp-content/uploads/2020/09/espacio-publico-inclusivo-naturalizado-pradogrande-torrelodones-imagen-5-1-1024x576.jpg" 
        description="Descubre las diferentes asociaciones de pacientes y organizaciones ciudadanas. Conoce testimonios reales, comparte experiencias y forma parte de una comunidad comprometida con el bienestar." 
        title="Espacio Ciudadano" 
        previewDescription="Asociaciones y experiencias ciudadanas" 
        previewTitle="Espacio Ciudadano"
      />
    </section>
  );
}
