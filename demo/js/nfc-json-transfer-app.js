// document.getElementById('readButton').onclick = function () {
//   popHTML('read-button clicked', { tagToPop: 'console', tagToPopWith: 'div', append: true })
// }

// document.getElementById('writeButton').onclick = function () {
//   popHTML('write-button clicked', { tagToPop: 'console', tagToPopWith: 'div', append: true })
// }

readButton.addEventListener("click", async () => {
  console.log("User clicked scan button")
  try {
    const ndef = new NDEFReader()
    await ndef.scan()
    console.log("> Scan started")

    ndef.addEventListener("readingerror", () => {
      console.log("Argh! Cannot read data from the NFC tag. Try another one?")
    })

    ndef.addEventListener("reading", ({ message, serialNumber }) => {
      console.log(`> Serial Number: ${serialNumber}`)
      console.log(`> Records: (${message.records.length})`)
      const msg = 'Read<br/>Serial number: ' + serialNumber + '<br>Records: ' + message.records.length + '<br>message: ' + message
      popHTML(msg, { tagToPop: 'console', tagToPopWith: 'div', append: true })
    })
  } catch (error) {
    console.log('Error reading: ' + error)
    const msg = 'Read<br/>Error reading: ' + error
    popHTML(msg, { tagToPop: 'console', tagToPopWith: 'div', append: true })
  }
})

writeButton.addEventListener("click", async () => {
  console.log("User clicked write button")
  try {
    const ndef = new NDEFReader()
    await ndef.write('Hello world!')
    console.log('> Message written')
    popHTML('write-button clicked', { tagToPop: 'console', tagToPopWith: 'div', append: true })
  } catch (error) {
    console.log('Error writing ' + error)
    const msg = 'Write<br/>Error writing:  ' + error
    popHTML(msg, { tagToPop: 'console', tagToPopWith: 'div', append: true })
  }
})
