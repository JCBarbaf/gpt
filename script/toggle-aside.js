class ToggleAside extends HTMLElement {

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
        .toggle-aside {
          height: 50px;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 10px;
          display: flex;
          align-items: center;
          margin: auto;
        }
        .arrow-icon {
          background: none;
          border: none;
          cursor: pointer;
        }
        .line {
          width: 4px;
          height: 12px;
          background-color: rgb(98, 99, 109);
          border-radius: 20px;
          transition: 0.1s ease-in;
          transition-property: transform background-color;
        }
        .toggle-aside:hover .line {
          background-color: rgb(236, 236, 241);
        }
        .line:nth-child(1) {
          transform-origin: 10% 50%;
          transform: translateY(10%);
        }
        .line:nth-child(2) {
          margin-top: -10%;
          transform-origin: 90% 50%;
          transform: translateY(-10%);
        }
        .toggle-aside:hover .line:nth-child(1) {
          transform: translateY(10%) rotate(20deg);
        }
        .toggle-aside:hover .line:nth-child(2) {
          transform: translateY(-10%) rotate(-20deg);
        }
        .toggle-aside.active .line:nth-child(1) {
          transform: translateY(10%) rotate(-20deg);
        }
        .toggle-aside.active .line:nth-child(2) {
          transform: translateY(-10%) rotate(20deg);
        }
        .tooltiptext{
          width: 150px;
          position: absolute;
          opacity: 0;
          transform: translate(1.5rem,0rem);
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

        .toggle-aside:hover .tooltiptext{
          visibility: visible;
          opacity: 1;
        }
      </style>
        <div class="toggle-aside">
        <button class="arrow-icon">
            <div class="line"></div>
            <div class="line"></div>
        </button>
        <span class="tooltiptext">Cerrar aside</span>         
      </div>
      `
      let button = this.shadow.querySelector('button');
      let tooltip = this.shadow.querySelector('.tooltiptext');
      button.addEventListener('click', () => {
        document.dispatchEvent(new CustomEvent('toggleAside'));
        this.shadow.querySelector('.toggle-aside').classList.toggle('active');
        if (tooltip.closest('.toggle-aside').classList.contains('active')) {
          tooltip.innerHTML = "Abrir aside";
        } else {
          tooltip.innerHTML = "Cerrar aside";
        }
      });
      button.addEventListener('mouseenter', () => {
        document.dispatchEvent(new CustomEvent('darkAside'));
      });
      button.addEventListener('mouseleave', () => {
        document.dispatchEvent(new CustomEvent('clearAside'));
      });
    }
  }
  
  customElements.define('toggle-aside-component', ToggleAside);