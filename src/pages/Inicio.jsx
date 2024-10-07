import React from "react";
import "../assets/stylesheets/App.scss";
import Estadisticas from "../assets/components/Habilidades_rapidas";
import Historia from "../assets/components/Historia";
import ProyectoCard from "../assets/components/ProyectoCard";
import Titulo from "../assets/components/Titulo";
import Icono from "../assets/components/Icono";
import SeccionExtra from "../assets/components/SeccionExtra";
import ConsejosCart from "../assets/components/ConsejosCart";
import Footer from "../assets/components/Footer";
import CorreoCopy from "../assets/components/CorreoCopy";

import { NavHashLink } from 'react-router-hash-link';
import Habilidades_rapidas from "../assets/components/Habilidades_rapidas";
import { useState, useEffect } from 'react';


const handleClick = () => {
  setTimeout(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, 0);
};

export default function Inicio() {
  const [scroll, setScroll] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 200);
    };

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 700);
    };

    // Agregar listeners para scroll y resize
    window.addEventListener("scroll", handleScroll);
    window.addEventListener('resize', handleResize);

    // Limpiar los eventos al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>

      <header className="header">
   
       
       
        <div className="header__text">
        
          <p className="text__hola">¡Hola mundo! </p>
          <p className="text_all">
            Soy <samp className="text__name"> RevayDev</samp>
          </p>

          <span className="text__job">Front-End Developer.</span>
          <div className="links">
          <CorreoCopy initialEmail= "revaydev17@gmail.com" />

          <div className="text__links">
           <a id="discord"  href="https://discord.com/users/1066481602403766313" target="_blank">   <i  className="fa-brands fa-discord"> <span className='GUI'>Discord</span></i> </a>
           <a id="youtube" href="https://www.youtube.com/channel/UCE7NWSOlaZ4IOXfIuBip_kQ" target="_blank">  <i className="fa-brands fa-youtube"> <span className='GUI'>YouTube</span></i> </a>
           <a id="github" href="https://github.com/revay3d" target="_blank"> <i className="fa-brands fa-github"><span className='GUI'>GitHub</span></i> </a>
        
        
          </div>
        
          </div>
        </div>
        <span className="flash flash--normal"></span>
      
      
      </header>
      

      <div className={`aviso ${scroll ? "ocultar" : " "} `}>
    <NavHashLink to="/#sobre_mi"><i class="fa-solid fa-chevron-down"></i></NavHashLink>
      </div>
      <main>
      <div className="Habilidades-rapidas">
<Habilidades_rapidas icon="fa-solid fa-palette" title="Diseñador UX/UI"> </Habilidades_rapidas>
<Habilidades_rapidas icon="fa-solid fa-laptop-code" title="Front-End"> </Habilidades_rapidas>
<Habilidades_rapidas icon="fa-solid fa-robot" title="Dev-Bots.py"> </Habilidades_rapidas>
</div>

        <div className="contenedor">
       <div className="Contendedor_Elementos">    
       <span className="contenedor_encabesado"> <i class="fa-solid fa-flask"></i> <h1>Experiencia</h1></span>

<div className="historia">

              <Historia
                titulo="Desarrollador SafeBox"
                fecha="Mayo 2024"
                texto="Dueño del programa SafeBox. Es un programa para ocultar tu informacon con una contraseña, puede ser usada en una USB o de forma local."
                tipo="secundario"
              />

              <Historia
                titulo="Desarrollador R.T.B"
                fecha="Septiembre 2024"
                texto='Desarrollador web y diseñador del proyecto "Reinventa tu botella". Su mision es reciclar las botellas y recompenzar a los estudiantes por lograr eso.'
                tipo="secundario"
              />

              <Historia
                titulo="Desarrollador InkyOS"
                fecha="Julio 2024"
                texto="Dueño de uno de los sistemas operativo modificado de windows. Creado para las escuelas. Actualmente esta en desarrollo."
                
             />
            </div>
            </div>

            <div className="Contendedor_Elementos">
            <span className="contenedor_encabesado"> <i class="fa-solid fa-graduation-cap"></i> <h1>Certificados</h1></span>

            <div className="Certificado"><img src="img/Certificado.png" alt="Revay" /></div>
            </div>
<div id="proyectos"></div>

            <div className="Contendedor_Elementos">
            <span className="contenedor_encabesado" id="proyectos"><i class="fa-solid fa-code"></i> <h1>Proyectos</h1></span>

            <section className="proyectos" >
            <article className="proyecto__carta">
        
            <div>
              <img
                className="proyecto__imagen"
                src="img/safebox.webp"
                alt="SafeBox"
              />
 <div className="proyecto__informacion">

              <div className="proyecto__lenguajes">
                <i className="fa-brands fa-python"></i>
                
              </div>
              </div>
            </div>

            <ProyectoCard
              titulo="SafeBox"
              descripcion="Aplicación Windows en desarrollo para almacenar y gestionar archivos como PDF, Word, fotos, y códigos de forma segura."
              texto_url1="Code"
              icono_url1= {<i class="fa-brands fa-github"></i>  }
              vercion={ <span className='proyecto__version'>V1.0</span> }
              url1="https://github.com/revay3d/SafeBox"
              codigo={true}
            />
          </article>

          <article className="proyecto__carta">
        
        <div>
          <img
            className="proyecto__imagen"
            src="img/TempCat.png"
            alt="SafeBox"
          />
<div className="proyecto__informacion">

          <div className="proyecto__lenguajes">
          <i className="fa-brands fa-html5"></i>

            <i className="fa-brands fa-react"></i>
            <i className="fa-brands fa-sass"></i>
          </div>
          </div>
        </div>

        <ProyectoCard
          titulo="TempCat"
          descripcion="Sitio web de un server de minecraft hecho para informar a sus usuarios, lo cree para aprender react y diseño web profecional."
          texto_url1="Code"
          icono_url1= {<i class="fa-brands fa-github"></i>  }
          url1="https://github.com/revay3d/TempCat"
          codigo={true}

          texto_url2="PreView"
          icono_url2= {<i class="fa-solid fa-link"></i>  }
          url2="https://revay3d.github.io/TempCat/"
          info={true}
        />
      </article>

      <article className={`proyecto__carta  ${isSmallScreen ? '' : 'proyecto_card '}`}>

        
        <div>
          <img
            className="proyecto__imagen"
            src="img/BotPy.png"
            alt="Discord.py"
          />
<div className="proyecto__informacion">

<div className="proyecto__lenguajes">
<i className="fa-brands fa-python"></i>

          <i className="fa-brands fa-html5"></i>
          <i className="fa-brands fa-css3"></i>
          </div>
          </div>
        </div>

        <ProyectoCard
          titulo="Discord.py"
          descripcion="Bot Discord v14 por RevayDev: envía mensajes y embeds sencillos, diseñado exclusivamente para uso personal."
          texto_url1="Code"
          icono_url1= {<i class="fa-brands fa-github"></i>  }
          url1="https://github.com/revay3d/Discord.py"
          codigo={true}

          texto_url2="Tutorial"
          icono_url2= {<i class="fa-solid fa-link"></i>  }
          url2="https://youtu.be/g-XOB3019QU?si=MsZelB_tcek0QNcO"
          info={true}

    
        />
          
      </article>
          </section>
</div>
<div  id="habilidades"></div>
          <div className="Contendedor_Elementos">
          <span className="contenedor_encabesado"><i class="fa-solid fa-briefcase"></i> <h1>Habilidades</h1></span>

<div className="contenedor-habilidades">
  <div className="contenedor-habilidades__interiro">
  <h2>Front-End</h2>
<div className="interior__contenedor-Icon">
<img src="icons/Webp/HTML.webp" alt="" />
  <img src="icons/Webp/CSS.webp" alt="" />
  <img src="icons/Webp/React.webp" alt="" />
  <img src="icons/Webp/Sass.webp" alt="" />
</div>
</div>

<div className="contenedor-habilidades__interiro">
  <h2>UX/UI</h2>
<div className="interior__contenedor-Icon">
<img src="icons/Webp/Canva.webp" alt="" />
  <img src="icons/Webp/Ibispaint.webp" alt="" />
  <img src="icons/Webp/Figma.webp" alt="" />
  <img src="icons/Webp/Noticio.webp" alt="" />
</div>
</div>


<div className="contenedor-habilidades__interiro">
  <h2>Lenguajes</h2>
<div className="interior__contenedor-Icon">
<img src="icons/Webp/Python.webp" alt="" />
  <img src="icons/Webp/MongoDB.webp" alt="" />

</div>
</div>

<div className="contenedor-habilidades__interiro">
  <h2>Aprendido</h2>
<div className="interior__contenedor-Icon">
<img src="icons/Webp/js.webp" alt="" />


</div>
</div>

</div>

          </div>

          <div  id="sobre_mi"></div>
          <div className="Contendedor_Elementos">
          <span className="contenedor_encabesado"><i class="fa-solid fa-user"></i><h1>Sobre mi</h1></span>
          <div className="Contendedor_Sobremi">
          <p className="sobremi_descripcion">
          Mi nombre es <span className="resaltar">Roberto Jimenez</span> tambien conocido como RevayDev soy un joven de 17 años y soy de nacionalidad colombiana.
          <br/> <br/>
poseo una gran capacidad para <span className="resaltar">trabajar en equipo como de manera independiente. </span>
Me apasiona aprender y estoy constantemente buscando formas de mejorar mis habilidades.<br/><br/>

Destaco por mi habilidad para asimilar rápidamente nuevos conocimientos y aplicarlos eficientemente en cualquier tarea que se me asigne o enseñe.
          </p>
<div className="FotoAndCopy">
          <div className="fotoUser">
            <div className="fotoUser_decoracion">
<span>-</span>
<span> ❐</span>
<span>X</span>

            </div>
            <div className="img">
<img src="img/RevayDev.png" alt="" />
</div>
          </div>
          <CorreoCopy initialEmail= "revaydev17@gmail.com" />
          </div>
          </div>
          
</div>
     
  


  </div>
       

        

     
      </main>

      <Footer/>
    </>
  );
}
