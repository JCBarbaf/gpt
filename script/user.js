class User extends HTMLElement {

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
        .user{
          position: absolute;
          bottom: 0;
          display: flex;
          gap: 0.5rem;
          padding: 1rem;
          cursor: pointer;
        }

        .user-logo{
          width: 2rem;
          height: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          border-radius: 50%;
        }

        .user-logo img{
          width: 100%;
        }

        .user-name{
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .user-name h3{
          overflow: hidden;
          margin: 0;
          color: rgb(255, 255, 255);
          font-family: 'SoehneBuch', sans-serif;
          font-size: 0.9rem;
          white-space: nowrap;
        }
      </style>
      <section class="user">
        <div class="user-logo">
          <img src="images/user-avatar.png" alt="avatar de usuario">
        </div>
        <div class="user-name">
          <h3>Carlos Seda</h3>
        </div>
      </section>
      `
    }
  }
  
  customElements.define('user-component', User);