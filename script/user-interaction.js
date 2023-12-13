class UserInteraction extends HTMLElement {

    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
    }
  
    connectedCallback () {
      document.addEventListener('startChat', (event => {
        this.render();
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
        :host {
          width: 60%;
        }
        .user-interaction{
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem 0;
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
          width: 1.3rem;
          color: rgb(255, 255, 255);
        }

        .message-input form{
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0.5rem;
          border: 1px solid rgb(102, 102, 102);
          border-radius: 1rem;
        }

        .message-input form .form-element{
          width: 90%;
          height: max-content;
        }

        .message-input form .form-element textarea{
          width: 100%;
          max-height: 5rem;
          height: 1.2rem;
          background-color: rgb(52, 53, 65);
          color: hsl(0, 0%, 100%);
          border: none;
          font-family: 'SoehneBuch', Arial;
          font-size: 0.9rem;
          resize: none;
        }

        .message-input form .form-element textarea::placeholder{
          color: rgba(255, 255, 255, 0.5);
          font-weight: 300;
        }

        .message-input form .form-element textarea:focus{
          outline: none;
        }

        .message-input .send-button button{
          display: flex;
          align-items: center;
          padding: 0.1rem 0.2rem;
          background-color: rgb(74, 74, 85);
          border: none;
          border-radius: 0.5rem;
        }

        .message-input .send-button svg{
          width: 1.3rem;
          color:rgba(0, 0, 0, 0.3);
        }

        .message-input .send-button.active button{
          background-color: rgb(255, 255, 255);
          cursor: pointer;
        }

        .message-input .send-button.active svg{
          color:rgb(0, 0, 0);
        }

        .send-button .tooltiptext{
          width: 120px;
          position: absolute;
          opacity: 0;
          margin-top: -5rem;
          margin-left: -3rem;
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

        .send-button .tooltiptext::after {
          content: "";
          position: absolute;
          top: 100%;   
          left: 45%;
          border-width: 5px;
          border-style: solid;
          border-color: rgb(0, 0, 0) transparent transparent transparent;
        }

        .send-button:hover .tooltiptext{
          visibility: visible;
          opacity: 1;
        }
      </style>
      <div class="user-interaction">
        <slot name="examples"></slot>
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
      let sendButton = this.shadow.querySelector('.send-button');
      sendButton.addEventListener('click', (event) => {
        event.preventDefault();
        document.dispatchEvent(new CustomEvent('startChat',{
          detail: {
            prompt: userInput.value,
          }
        }));
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