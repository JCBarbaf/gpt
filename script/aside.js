class Aside extends HTMLElement {

    constructor () {
      super()
      this.shadow = this.attachShadow({ mode: 'open' })
    }
  
    connectedCallback () {
      document.addEventListener('toggleAside', (event => {
        this.toggleAside();
      }));
      this.render()
    }
  
    render () {
      this.shadow.innerHTML =
      /*html*/`
      <style>
        aside{
          height: 100%;
          position: relative;
          background-color: rgb(0, 0, 0);
          min-width: 0px;
          max-width: 0px;
          overflow: hidden;
          transition: filter 0.1s ease-in;
        }
        aside:has(close-aside-component:hover) {
          filter: brightness(0.5);
          transition: filter 0.1s ease-in;
        }
        aside.active {
          min-width: 235px;
          max-width: 235px;
        }
      </style>
      <aside class="active">
        <new-conversations-component></new-conversations-component>
        <history-component></history-component>
        <user-component></user-component>
      </aside>
      `

    }
    toggleAside() {
      console.log("hola")
      this.shadow.querySelector('aside').classList.toggle('active')
    }
  }
  
  customElements.define('aside-component', Aside);