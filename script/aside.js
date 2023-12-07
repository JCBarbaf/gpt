class Aside extends HTMLElement {

    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
    }
  
    connectedCallback () {
      document.addEventListener('toggleAside', (event => {
        this.toggleAside();
      }));
      document.addEventListener('darkAside', (event => {
        this.darkAside();
      }));
      document.addEventListener('clearAside', (event => {
        this.clearAside();
      }));
      this.render()
    }
  
    render () {
      this.shadow.innerHTML =
      /*html*/`
      <style>
        aside {
          height: 100%;
          position: relative;
          background-color: rgb(0, 0, 0);
          min-width: 0px;
          max-width: 0px;
          overflow: hidden;
          transition: 0.1s ease-in;
          transition-property: filter max-width min-width;
          z-index: 500;
        }
        aside.active {
          min-width: 235px;
          max-width: 235px;
        }
        aside.dark {
          filter: brightness(0.5);
        }
      </style>
      <aside class="active">
        <slot name="new-conversations"></slot>
        <slot name="history"></slot>
        <slot name="user"></slot>
      </aside>
      `

    }
    toggleAside() {
      this.shadow.querySelector('aside').classList.toggle('active');
    }
    darkAside() {
      this.shadow.querySelector('aside').classList.add('dark');
    }
    clearAside() {
      this.shadow.querySelector('aside').classList.remove('dark');
    }
  }
  
  customElements.define('aside-component', Aside);