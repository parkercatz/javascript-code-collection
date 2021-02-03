/**
 * ギャラリーを初期化する
 * @param {HTMLElement} root ギャラリー全体のルート要素
 */
function initGallery(root) {
  // サムネイル画像
  const thumbnails = root.querySelectorAll('[data-gallery-image]')

  // メイン画像のIDをサムネイルから取得
  const targetIds = Array.prototype.map.call(thumbnails, (tn) => {
    return '#' + tn.getAttribute('data-gallery-image')
  })

  // メイン画像
  const mainImages = root.querySelectorAll(targetIds.join(','))

  // サムネイルのクリックイベントハンドラ
  function onClickThumbnail() {
    // メインの画像を全て隠す
    mainImages.forEach((image) => {
      image.classList.remove('active')
    })

    // 表示するメインの画像のIDを取得
    const id = this.getAttribute('data-gallery-image')

    // 表示するメインの画像を取得
    const target = document.getElementById(id)

    // 要素があったら表示
    if (target) {
      target.classList.add('active')
    }
  }

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener('click', onClickThumbnail)
  })
}

const el = document.getElementById('myGallery')
initGallery(el)
