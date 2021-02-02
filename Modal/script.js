// モーダルの開閉の制御
document.querySelectorAll('[data-modal-open]').forEach((el) => {
  // モーダルの開閉の対象の要素の取得
  const targetModal = el.getAttribute('data-modal-open')
  const modal = document.getElementById(targetModal)

  // モーダルを閉じる
  modal.querySelectorAll('[data-modal-close]').forEach((closeEl) => {
    closeEl.addEventListener('click', () => {
      modal.classList.remove('is-open')
    })
  })

  // モーダルを開く
  el.addEventListener('click', () => {
    modal.classList.add('is-open')
  })
})
