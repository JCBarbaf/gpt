class UserInteraction extends HTMLElement {

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
        .user-interaction{
          display: flex;
          flex-direction: column;
          gap: 1rem;
          padding: 1.5rem 0;
          width: 60%;
          margin: 0 auto;
        }

        .examples{
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          justify-content: center;
        }

        .example{
          border: 1px solid rgb(102, 102, 102);
          border-radius: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
          justify-content: center;
          padding: 0.5rem 0.75rem;
          position: relative;
          width: 45%;
        }

        .example:hover{
          background-color: rgb(64, 65, 79);
          cursor: pointer;
        }

        .example-title h2{
          color: rgba(255, 255, 255, 0.7);
          font-family: 'SoehneBuch', Arial;
          font-size: 0.8rem;
          font-weight: 400;
          margin: 0;
        }

        .example-description p{
          color: rgb(255, 255, 255);
          font-family: 'SoehneBuch', Arial;
          font-size: 0.75em;
          margin: 0;
          opacity: 0.5;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .example .example-send{
          align-items: center;
          background-color: rgba(64, 65, 79, 0.911);
          display: flex;
          height: 90%;
          justify-content: center;
          opacity: 0;
          position: absolute;
          right: 0;
          width: 10%;
          z-index: 1000;
        }

        .example:hover .example-send{
          opacity: 1;
        }

        .example-send-button{
          background-color: rgb(52, 53, 65);
          border-radius: 0.3rem;
          padding: 0.25rem;
        }

        .example-send-button svg{
          height: 0.8rem;
          width: 0.8rem;
        }

        .example-send-button svg path{
          fill: white;
        }

        .example-send-button .tooltiptext{
          background-color: black;
          border-radius: 0.5rem;
          color: #fff;
          font-family: 'SoehneBuch', sans-serif;
          font-size: 0.8rem;
          margin-top: -3.5rem;
          margin-left: -5rem;
          opacity: 0;
          padding: 0.5rem 0;
          pointer-events: none; 
          position: absolute;
          text-align: center;
          transition: opacity 0.3s;
          width: 150px;
          z-index: 1001;
        }

        .example-send-button .tooltiptext::after {
          border-color: rgb(0, 0, 0) transparent transparent transparent;
          border-style: solid;
          border-width: 5px;
          content: "";
          left: 45%;
          position: absolute;
          top: 100%;   
        }

        .example-send-button:hover .tooltiptext{
          opacity: 1;
          visibility: visible;
        }

        .message-input{
          width: 100%;
        }

        .message-input .attach-button button{
          background-color: rgba(255, 255, 255, 0);
          border: none;
          border-radius: 0.5rem;
          cursor: pointer;
        }

        .message-input .attach-button svg{
          color: rgb(255, 255, 255);
          width: 1.3rem;
        }

        .message-input form{
          align-items: center;
          border: 1px solid rgb(102, 102, 102);
          border-radius: 1rem;
          display: flex;
          justify-content: center;
          padding: 0.5rem;
        }

        .message-input form .form-element{
          height: max-content;
          width: 90%
        }

        .message-input form .form-element textarea{
          background-color: rgb(52, 53, 65);
          border: none;
          color: hsl(0, 0%, 100%);
          font-family: 'SoehneBuch', Arial;
          font-size: 0.9rem;
          height: 1.2rem;
          max-height: 5rem;
          resize: none;
          width: 100%;
        }

        .message-input form .form-element textarea::placeholder{
          color: rgba(255, 255, 255, 0.5);
          font-weight: 300;
        }

        .message-input form .form-element textarea:focus{
          outline: none;
        }

        .message-input .send-button button{
          align-items: center;
          background-color: rgb(74, 74, 85);
          border: none;
          border-radius: 0.5rem;
          display: flex;
          padding: 0.1rem 0.2rem;
        }

        .message-input .send-button svg{
          color:rgba(0, 0, 0, 0.3);
          width: 1.3rem;
        }

        .message-input .send-button.active button{
          background-color: rgb(255, 255, 255);
          cursor: pointer;
        }

        .message-input .send-button.active svg{
          color:rgb(0, 0, 0);
        }

        .send-button .tooltiptext{
          background-color: black;
          border-radius: 0.5rem;
          color: #fff;
          font-family: 'SoehneBuch', sans-serif;
          font-size: 0.8rem;
          margin-top: -5rem;
          margin-left: -3rem;
          opacity: 0;
          padding: 0.5rem 0;
          pointer-events: none; 
          position: absolute;
          text-align: center;
          transition: opacity 0.3s;
          width: 120px;
          z-index: 1001;
        }

        .send-button .tooltiptext::after {
          border-width: 5px;
          border-style: solid;
          border-color: rgb(0, 0, 0) transparent transparent transparent;
          content: "";
          left: 45%;
          position: absolute;
          top: 100%;   
        }

        .send-button:hover .tooltiptext{
          opacity: 1;
          visibility: visible;
        }
      </style>
      <div class="user-interaction">
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
        <section class="message-input">
          <form>
            <div class="attach-button">
              <button>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M9 7C9 4.23858 11.2386 2 14 2C16.7614 2 19 4.23858 19 7V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9C5 8.44772 5.44772 8 6 8C6.55228 8 7 8.44772 7 9V15C7 17.7614 9.23858 20 12 20C14.7614 20 17 17.7614 17 15V7C17 5.34315 15.6569 4 14 4C12.3431 4 11 5.34315 11 7V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V9C13 8.44772 13.4477 8 14 8C14.5523 8 15 8.44772 15 9V15C15 16.6569 13.6569 18 12 18C10.3431 18 9 16.6569 9 15V7Z" fill="currentColor"></path>
                </svg> 
                <input multiple="" type="file" tabindex="-1" class="hidden" style="display: none;">
              </button>
            </div>
            <div class="form-element">
              <textarea placeholder="Message chatDPM..."></textarea>
            </div>
            <div class="send-button">
              <button disabled>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="text-white dark:text-black">
                  <path d="M7 11L12 6L17 11M12 18V7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>            
                <span class="tooltiptext">Enviar mensaje</span>                  
              </button>
            </div>
          </form>
        </section>
      </div>
      `
      let userInput = this.shadow.querySelector('textarea');
      userInput.addEventListener('input', () => {
        if (userInput.value) {
          this.activateSend();
        } else {
          this.deactivateSend();
        }
      });
    }
    activateSend() {
      let sendButton = this.shadow.querySelector('.send-button');
      sendButton.querySelector('button').disabled = false;
      sendButton.classList.add('active');
    }
    deactivateSend() {
      let sendButton = this.shadow.querySelector('.send-button');
      sendButton.querySelector('button').disabled = true;
      sendButton.classList.remove('active');
    }
  }
  
  customElements.define('user-interaction-component', UserInteraction);