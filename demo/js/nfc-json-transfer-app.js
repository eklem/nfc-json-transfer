// document.getElementById('readButton').onclick = function () {
//   popHTML('read-button clicked', { tagToPop: 'console', tagToPopWith: 'div', append: true })
// }

// document.getElementById('writeButton').onclick = function () {
//   popHTML('write-button clicked', { tagToPop: 'console', tagToPopWith: 'div', append: true })
// }

const ndef = new NDEFReader()

readButton.addEventListener('click', async () => {
  try {
    await ndef.scan()
    ndef.onreading = (event) => {
      const decoder = new TextDecoder()
      const records = event.message.records
      const msgDecoder = 'Read</br>TextDecoder created'
      popHTML(msgDecoder, { tagToPop: 'console', tagToPopWith: 'div', append: true })
      for (const record of event.message.records) {
        const soFar = 'Got inside the for-loop'
        popHTML(soFar, { tagToPop: 'console', tagToPopWith: 'div', append: true })
        if (record.mediaType === 'application/json') {
          const isJson = 'record is JSON data'
          popHTML(isJson, { tagToPop: 'console', tagToPopWith: 'div', append: true })
          const jsonString = decoder.decode(record.data)
          const msg = 'Read</br>' + jsonString
          popHTML(msg, { tagToPop: 'console', tagToPopWith: 'div', append: true })
        } else {
          const notJson = 'Read</br>Message not JSON.'
          popHTML(notJson, { tagToPop: 'console', tagToPopWith: 'div', append: true })
        }
      }
    }
  } catch (error) {
    console.log('Error reading: ' + error)
    const msg = 'read<br/>Error reading: ' + error
    popHTML(msg, { tagToPop: 'console', tagToPopWith: 'div', append: true })
  }
})

writeButton.addEventListener('click', async () => {
  try {
    const encoder = new TextEncoder()
    const data = [
      {
        name: 'Benny Jensen',
        title: 'Banker'
      },
      {
        name: 'Zoey Braun',
        title: 'Engineer'
      }
    ]
    const dataString = JSON.stringify(data)
    await ndef.write({
      records: [
        {
          recordType: 'mime',
          mediaType: 'application/json',
          data: encoder.encode(dataString)
        }
      ]
    })
    popHTML('write', { tagToPop: 'console', tagToPopWith: 'div', append: true })
  } catch (error) {
    console.log('Error writing ' + error)
    const msg = 'write<br/>Error writing:  ' + error
    popHTML(msg, { tagToPop: 'console', tagToPopWith: 'div', append: true })
  }
})
