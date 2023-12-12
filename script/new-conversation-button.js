class NewConversationButton extends HTMLElement {

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
        .new-conversation-button {
          position: fixed;
          top: 1%;
          left: 1%;
          z-index: 200;
        }
        button {
          width: 35px;
          height: 35px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: none;
          border: 1px solid rgb(81, 83, 99);
          border-radius: 10px;
          cursor: pointer;
        }
        button:hover {
          background-color: rgb(64, 65, 79);
        }
        button svg {
          width: 20px;
          height: 20px;
        }
        svg * {
          fill: rgb(205, 205, 208);
        }
        .tooltiptext{
          width: 150px;
          position: absolute;
          opacity: 0;
          transform: translate(3rem,-100%);
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

        .tooltiptext::after {
          content: "";
          position: absolute;
          top: 40%;   
          left: -7%;
          border-width: 5px;
          border-style: solid;
          border-color: transparent rgb(0, 0, 0) transparent transparent;
        }

        .new-conversation-button:hover .tooltiptext{
          visibility: visible;
          opacity: 1;
        }
      </style>
      <div class="new-conversation-button">
        <button>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-md"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.7929 2.79289C18.0118 1.57394 19.9882 1.57394 21.2071 2.79289C22.4261 4.01184 22.4261 5.98815 21.2071 7.20711L12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16H9C8.44772 16 8 15.5523 8 15V12C8 11.7348 8.10536 11.4804 8.29289 11.2929L16.7929 2.79289ZM19.7929 4.20711C19.355 3.7692 18.645 3.7692 18.2071 4.2071L10 12.4142V14H11.5858L19.7929 5.79289C20.2308 5.35499 20.2308 4.64501 19.7929 4.20711ZM6 5C5.44772 5 5 5.44771 5 6V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V14C19 13.4477 19.4477 13 20 13C20.5523 13 21 13.4477 21 14V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34314 4.34315 3 6 3H10C10.5523 3 11 3.44771 11 4C11 4.55228 10.5523 5 10 5H6Z" fill="currentColor"></path></svg>
        </button>
        <span class="tooltiptext">Nuevo chat</span>
      </div>         
      `
      let newConversationButton = this.shadow.querySelector('button');
      newConversationButton.addEventListener('click', () => {
        document.dispatchEvent(new CustomEvent('newChat'));
      });
    }
  }
  
  customElements.define('new-conversation-button-component', NewConversationButton);