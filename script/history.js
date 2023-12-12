class History extends HTMLElement {

    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
    }
  
    connectedCallback () {
      this.render()
    }
  
    render () {
      this.shadow.innerHTML =
      /*html*/`
      <style>
        .history{
          width: 100%;
          max-height: 80vh;
          overflow-x: hidden; 
          overflow-y: auto;
          padding: 1rem 0;
        }

        .history::-webkit-scrollbar{
          width: 0;
          background: transparent; 
        }

        .history:hover::-webkit-scrollbar{
          width: 5px; 
        }

        .history:hover::-webkit-scrollbar-thumb{
          background-color: rgb(135, 135, 135); 
          border-radius: 1rem;
        }

        .history:hover::-webkit-scrollbar-thumb:hover{
          background-color: rgb(199, 199, 199); 
        }

        .history-record{
          margin-bottom: 2rem;
        }

        .history-record-title{
          margin: 0 1rem 1rem 1rem;  
        }

        .history-record-title h3{
          color: hsl(0, 0%, 40%);
          font-family: 'SoehneBuch', sans-serif; 
          font-size: 0.65rem;
          text-transform: capitalize;
        }

        .history-record-messages ul{
          display: flex;
          flex-direction: column;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .history-record-messages ul li{
          max-width: 85%;
          margin: 0 0.5rem;
        }

        .history-record-messages ul li a{
          width: 100%;
          position: relative;
          display: inline-block;
          overflow: hidden;
          padding: 0.5rem;
          color: rgb(255, 255, 255);
          font-family: Arial, Helvetica, sans-serif; 
          font-size: 0.8rem;
          text-decoration: none;
          white-space: nowrap;
          z-index: 0;
        }

        .history-record-messages ul li a::after {
          content: '';
          width: 2rem; 
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.502) 50%, rgb(0, 0, 0) 100%);
          pointer-events: none;
          z-index: 1000;
        } 

        .history-record-messages ul li a:hover{
          background-color: hsl(220, 4%, 13%);
          border-radius: 0.3rem;
        }

        .history-record-messages ul li a:hover::after {
          content: '';
          width: 5rem; 
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          background: linear-gradient(90deg, rgba(32, 33, 34, 0) 0%, rgba(32, 33, 34, 0.5) 50%, rgb(32, 33, 34) 100%);
          z-index: 1000;
        }
      </style>
      <section class="history">
        <article class="history-record">
          <div class="history-record-title">
            <h3>Hoy</h3>
          </div>
          <nav class="history-record-messages">
            <ul>
              <li>
                <a href="">Eliminar nombres de clase</a>
              </li>
            </ul>
          </nav>
        </article>
        <article class="history-record">
          <div class="history-record-title">
            <h3>Ayer</h3>
          </div>
          <nav class="history-record-messages">
            <ul>
              <li><a href="">Tabla de usuarios Mysql</a></li>
              <li><a href="">Eliminar o cambiar nombre</a></li>
            </ul>
          </nav>
        </article>
        <article class="history-record">
          <div class="history-record-title">
            <h3>Últimos 7 días</h3>
          </div>
          <nav class="history-record-messages">
            <ul>
              <li><a href="">Novedades PHP 8.1</a></li>
              <li><a href="">Novedades CSS 2022 destacadas</a></li>
              <li><a href="">Generador CRUD con Express & Sequelize</a></li>
              <li><a href="">Cómo iniciar un proyecto de React</a></li>
              <li><a href="">Novedades PHP 8.1</a></li>
              <li><a href="">Novedades CSS 2022 destacadas</a></li>
              <li><a href="">Generador CRUD con Express & Sequelize</a></li>
              <li><a href="">Cómo iniciar un proyecto de React</a></li>
              <li><a href="">Novedades PHP 8.1</a></li>
              <li><a href="">Novedades CSS 2022 destacadas</a></li>
              <li><a href="">Generador CRUD con Express & Sequelize</a></li>
              <li><a href="">Cómo iniciar un proyecto de React</a></li>
              <li><a href="">Novedades PHP 8.1</a></li>
              <li><a href="">Novedades CSS 2022 destacadas</a></li>
              <li><a href="">Generador CRUD con Express & Sequelize</a></li>
              <li><a href="">Cómo iniciar un proyecto de React</a></li>
              <li><a href="">Novedades PHP 8.1</a></li>
              <li><a href="">Novedades CSS 2022 destacadas</a></li>
              <li><a href="">Generador CRUD con Express & Sequelize</a></li>
              <li><a href="">Cómo iniciar un proyecto de React</a></li>
              <li><a href="">Novedades PHP 8.1</a></li>
              <li><a href="">Novedades CSS 2022 destacadas</a></li>
              <li><a href="">Generador CRUD con Express & Sequelize</a></li>
              <li><a href="">Cómo iniciar un proyecto de React</a></li>
              <li><a href="">Novedades PHP 8.1</a></li>
              <li><a href="">Novedades CSS 2022 destacadas</a></li>
              <li><a href="">Generador CRUD con Express & Sequelize</a></li>
              <li><a href="">Cómo iniciar un proyecto de React</a></li>
            </ul>
          </nav>
        </article>
      </section>
      `
    }
  }
  
  customElements.define('history-component', History);