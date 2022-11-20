document.getElementById('readButton').onclick = function () {
  popHTML('read-button clicked', { tagToPop: 'console', tagToPopWith: 'div', append: true })
}

document.getElementById('writeButton').onclick = function () {
  popHTML('write-button clicked', { tagToPop: 'console', tagToPopWith: 'div', append: true })
}