# nfc-otp-transfer

## Intended functionality
P2P - Mobile to mobile NFC transfer of OTPs

Transfer OTPs - One-time pads between phones. First version will use NFC tags since [P2P isn't supported in web-nfc yet](https://github.com/w3c/web-nfc/issues/529).

One phone should be set to send (and how many OTPs to send), the other recieve. Then transfer the tag back and forth. untill sucess.

## No dependency
No dependencies, but should work together with [otp-encryption-decryption-lib](https://github.com/eklem/otp-encryption-decryption-lib) for generating the actual keys.

Second basic library to create [otp-encryption-toy](https://github.com/eklem/otp-encryption-toy)

## Possible features
* [ ] Set phone in send mode
* [ ] Set phone in receive mode
* [ ] Clear tag
* [ ] Check how much data the tag can take
* [ ] Send some data. Which is to write as much as possible to the key-tag, and keep track of how much is left of data to send
* [ ] Receive data, empty tag and possibly add `received: true` to tag. Keep track of how much is left to receive.
* [ ] Show an OK at the end on both phones (all transfers OK, and no data registered left to transfer). This is what's needed before i.e. adding keys to indexedDB.
