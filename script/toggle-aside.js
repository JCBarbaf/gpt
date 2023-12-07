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
          border-radius: 20px;
          transition: 0.1s ease-in;
          transition-property: transform background-color;
          background-color: rgb(98, 99, 109);
        }
        .toggle-aside:hover .line {
          background-color: rgb(236, 236, 241);
        }
        .line:nth-child(1) {
          transform-origin: 10% 50%;
          transform: translateY(10%);
        }
        .line:nth-child(2) {
          transform-origin: 90% 50%;
          transform: translateY(-10%);
          margin-top: -10%;
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
      </style>
        <div class="toggle-aside">
        <button class="arrow-icon">
            <div class="line"></div>
            <div class="line"></div>
        </button>
      </div>
      `
      let button = this.shadow.querySelector('button');
      button.addEventListener('click', () => {
        document.dispatchEvent(new CustomEvent('toggleAside'));
        this.shadow.querySelector('.toggle-aside').classList.toggle('active');
      });
    }
  }
  
  customElements.define('toggle-aside-component', ToggleAside);