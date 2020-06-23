;(async () => {
  const id = 'particles'
  const container = document.createElement('div')
  container.id = id
  document.body.appendChild(container)
  const particles = await window.tsParticles
    .loadJSON(id, '/els/particles.json')
})()
