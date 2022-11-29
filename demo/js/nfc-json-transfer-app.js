// document.getElementById('readButton').onclick = function () {
//   popHTML('read-button clicked', { tagToPop: 'console', tagToPopWith: 'div', append: true })
// }

// document.getElementById('writeButton').onclick = function () {
//   popHTML('write-button clicked', { tagToPop: 'console', tagToPopWith: 'div', append: true })
// }

const ndef = new NDEFReader();

readButton.addEventListener("click", async () => {
  try {
    await ndef.scan();
    ndef.onreading = (event) => {
      const decoder = new TextDecoder()
      for (const record of event.message.records) {
        if (record.mediaType === "application/json") {
          const json = JSON.parse(decoder.decode(record.data))
          const article =/^[aeio]/i.test(json.title) ? "an" : "a"
          console.log(`${json.name} is ${article} ${json.title}`)
          const msg = 'read<br/>' + json.name + ' is ' + article + ' ' + json.title
          popHTML(msg, { tagToPop: 'console', tagToPopWith: 'div', append: true })
        }
      }
    }
  } catch (error) {
    console.log('Error reading: ' + error)
    const msg = 'read<br/>Error reading: ' + error
    popHTML(msg, { tagToPop: 'console', tagToPopWith: 'div', append: true })
  }
})

writeButton.addEventListener("click", async () => {
  try {
    const encoder = new TextEncoder();
    await ndef.write({
      records: [
        {
          recordType: "mime",
          mediaType: "application/json",
          data: encoder.encode(JSON.stringify({
            name: "Benny Jensen",
            title: "Banker"
          }))
        },
        {
          recordType: "mime",
          mediaType: "application/json",
          data: encoder.encode(JSON.stringify({
            name: "Zoey Braun",
            title: "Engineer"
          }))
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
