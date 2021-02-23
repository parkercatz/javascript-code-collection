const playButton = document.getElementById('play')
const resultBlock = document.getElementById('result')
const gifImg = document.getElementById('gif')

playButton.addEventListener('click', function () {
  resultBlock.classList.add('hidden')
  axios.get('https://ruddy-mail.glitch.me/api/gacha').then((response) => {
    gifImg.src = response.data.url
    resultBlock.classList.remove('hidden')
  })
})
