class Examples extends HTMLElement {

    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
    }
  
    connectedCallback () {
      document.addEventListener('startChat', (event => {
        this.clear();
      }));
      document.addEventListener('newChat', (event => {
        this.render();
      }));
      this.render()
    }
  
    render () {
      this.shadow.innerHTML =
      /*html*/`
      <style>
        .examples{
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.5rem;
        }

        .example{
          width: 45%;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.2rem;
          padding: 0.5rem 0.75rem;
          border: 1px solid rgb(102, 102, 102);
          border-radius: 0.5rem;
        }

        .example:hover{
          background-color: rgb(64, 65, 79);
          cursor: pointer;
        }

        .example-title h2{
          margin: 0;
          color: rgba(255, 255, 255, 0.7);
          font-family: 'SoehneBuch', Arial;
          font-size: 0.8rem;
          font-weight: 400;
        }

        .example-description p{
          opacity: 0.5;
          overflow: hidden;
          margin: 0;
          color: rgb(255, 255, 255);
          font-family: 'SoehneBuch', Arial;
          font-size: 0.75em;
          white-space: nowrap;
          text-overflow: ellipsis;
        }

        .example .example-send{
          width: 10%;
          height: 90%;
          position: absolute;
          right: 0;
          opacity: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(64, 65, 79, 0.911);
          z-index: 1000;
        }

        .example:hover .example-send{
          opacity: 1;
        }

        .example-send-button{
          padding: 0.25rem;
          background-color: rgb(52, 53, 65);
          border-radius: 0.3rem;
        }

        .example-send-button svg{
          width: 0.8rem;
          height: 0.8rem;
        }

        .example-send-button svg path{
          fill: white;
        }

        .example-send-button .tooltiptext{
          width: 150px;
          position: absolute;
          margin-top: -3.5rem;
          opacity: 0;
          margin-left: -5rem;
          padding: 0.5rem 0;
          background-color: black;
          color: #fff;
          border-radius: 0.5rem;
          pointer-events: none; 
          font-family: 'SoehneBuch', sans-serif;
          font-size: 0.8rem;
          text-align: center;
          transition: opacity 0.3s;
          z-index: 1001;
        }

        .example-send-button .tooltiptext::after {
          content: "";
          position: absolute;
          top: 100%;   
          left: 45%;
          border-width: 5px;
          border-style: solid;
          border-color: rgb(0, 0, 0) transparent transparent transparent;
        }

        .example-send-button:hover .tooltiptext{
          visibility: visible;
          opacity: 1;
        }
      </style>
      <section class="examples">
        <article class="example">
            <div class="example-title">
            <h2>Comparar principios del diseño</h2>
            </div>
            <div class="example-description">
            <p>para convertir una fecha al día de la semana correspo...</p>
            </div>
            <div class="example-send">
            <div class="example-send-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z" /></svg>  
                <span class="tooltiptext">Haz click para enviar</span>         
            </div>
        </article>
        <article class="example">
            <div class="example-title">
            <h2>Comparar técnicas de narración</h2>
            </div>
            <div class="example-description">
            <p>en novelas y en películas</p>
            </div>
            <div class="example-send">
            <div class="example-send-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z" /></svg> 
                <span class="tooltiptext">Haz click para enviar</span>                   
            </div>
        </article>
        <article class="example">
            <div class="example-title">
            <h2>Generar nombres</h2>
            </div>
            <div class="example-description">
            <p>para mi equipo de fútbol de fantasía con un tema de rasputin</p>
            </div>
            <div class="example-send">
            <div class="example-send-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z" /></svg>  
                <span class="tooltiptext">Haz click para enviar</span>                  
            </div>
        </article>
        <article class="example">
            <div class="example-title">
            <h2>Sugiere conceptos</h2>
            </div>
            <div class="example-description">
            <p>para un juego de arcade de estilo retro</p>
            </div>
            <div class="example-send">
            <div class="example-send-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z" /></svg>  
                <span class="tooltiptext">Haz click para enviar</span>                  
            </div>
        </article>
      </section>
      `
    }
    clear(){
      console.log('hola')
      this.shadow.innerHTML = ""
    }
  }
  
  customElements.define('examples-component', Examples);