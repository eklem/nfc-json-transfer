const popHTML = function (data, HTML) {
  // HTML = { tagToPop: 'someElement', tagToPopWith: 'span', append: true }  
  console.log('data: ' + JSON.stringify(data))
  console.log('HTML: ' + JSON.stringify(HTML))
  if (!data) {
    console.log('missing data to populate')
  }
  if (!HTML.tagToPop) {
    console.log('missing tag to populate')
  }
  if (!HTML.tagToPopWith) {
    console.log('missing tag to populate with')
  }
  if (!HTML.tagToPopWith) {
    console.log('missing tag to populate with')
  }
  const node = document.createElement(HTML.tagToPopWith)
  node.className = 'nodeElement';
  node.innerHTML = '$ ' + data
  if (!HTML.append) {
    emptyElement(HTML.tagToPop)
  }
  document.getElementById(HTML.tagToPop).appendChild(node)
  scrollTo('nodeElement')
}

const emptyElement = function (elementToEmpty) {
  document.getElementById(elementToEmpty).innerHTML = ''
}

const scrollTo = function (nodeElement, scrollTo) {
  const tags = document.getElementsByClassName(nodeElement)
  tag = tags[tags.length - 1]
  tag.scrollIntoView({behavior: 'smooth'})
  console.log('scrolling')
}