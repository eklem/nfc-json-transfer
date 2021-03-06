# nfc-json-transfer

## Intended functionality
P2P - Mobile to mobile NFC transfer of JSON data

Transfer JSON between phones, using NFC. First version will use NFC tags since [P2P isn't supported in web-nfc yet](https://github.com/w3c/web-nfc/issues/529).

One phone should be set to send, the other recieve. Then transfer the tag back and forth. untill sucess.

## No dependency
No dependencies. Should work together with [otp-encryption-decryption-lib](https://github.com/eklem/otp-encryption-decryption-lib) for generating the actual JSON to be trnasferred, but `nfc-json-transfer` is created to transport any JSON objects/arrays.

## Possible features
* [ ] Set phone in send mode
* [ ] Set phone in receive mode
* [ ] Clear tag
* [ ] Check how much data the tag can take
* [ ] Send some data. Which is to write as much as possible to the key-tag, and keep track of how much is left of data to send
* [ ] Receive data, empty tag and possibly add `received: true` to tag. Keep track of how much is left to receive.
* [ ] Show an OK at the end on both phones (all transfers OK, and no data registered left to transfer). This is what's needed before i.e. adding keys to indexedDB.

## Development setup

### Install VSCode plugins:

* Live Server by Ritwick Dey
* ngrok for VS Code by philnash

### Set up ngrok account
* Go to [ngrok](https://ngrok.com/) and set up account with i.e. GitHub user
* Log in and go to [endpoint overview](https://dashboard.ngrok.com/cloud-edge/endpoints)

### First time:

* CMD + SHIFT + p
* ngrok config add-authtoken

### Start:

* Start Live server by clicking `Go Live` in bottom right corner.
* CMD + SHIFT + p
* ngrok start
* Port number: 80

### Stop:

* CMD + SHIFT + p
* ngrok stop
* Stop Live server by clicking `Port: 80` in bottom right corner.