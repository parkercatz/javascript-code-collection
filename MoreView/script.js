const moreButton = document.getElementById('more')
const output = document.getElementById('output')

const API_URL = 'https://ruddy-mail.glitch.me/api/list'

let page = 1

moreButton.addEventListener('click', function () {
  axios.get(API_URL + '?page=' + page).then((response) => {
    const row = buildHTML(response.data.items)
    output.appendChild(row)

    if (response.data.last) {
      moreButton.classList.add('hidden')
    }
  })
  page += 1
})

/**
 * 一行分の要素を生成する
 *
 * @param {Array} items
 */
function buildHTML(items) {
  const row = document.createElement('div')
  row.className = 'columns'
  let html = ''
  items.forEach((item) => {
    html +=
      '<img class="column is-one-third img" src="' + item.url + '" alt="">'
  })
  row.innerHTML = html
  return row
}
