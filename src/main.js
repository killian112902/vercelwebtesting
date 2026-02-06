const root = document.getElementById('app')

function render() {
  const now = new Date().toLocaleString()
  root.innerHTML = `
    <main class="container">
      <h1>Hello — this site is deployed on Vercel</h1>
      <p>Build time: <strong>${now}</strong></p>
      <p>
        Visit the <a href="https://vercel.com/docs" target="_blank" rel="noreferrer">Vercel docs</a> to learn more.
      </p>
      <footer>Sample Vite + Vercel site</footer>
    </main>
  `
}

render()
