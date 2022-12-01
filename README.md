# nfc-json-transfer

## Intended functionality
P2P - Mobile to mobile NFC transfer of JSON data

Transfer any JSON between phones, using NFC Web API. First version will use NFC tags since [P2P isn't supported in web-nfc yet](https://github.com/w3c/web-nfc/issues/529).

One phone should be set to send/write, the other recieve/read. Then transfer the tag back and forth. until all data is transferred.

## No dependency
No dependencies. Should work together with [otp-encryption-decryption-lib](https://github.com/eklem/otp-encryption-decryption-lib) for generating the actual JSON to be transferred, but `nfc-json-transfer` is created to transport any JSON objects/arrays.

## Possible features
* [ ] Set phone in send mode
* [ ] Set phone in receive mode
* [ ] Clear tag
* [ ] write data to tag
* [ ] slice data in two if not possible to store on tag (repeat until successs)
* [ ] keep track of how much data is written -> create some meta-data for number of elements in array left (for both writing and reading side to be happy)
* [ ] Finished transferring true/false
* [ ] join data in receiving end when all array elements read 
* [ ] Receive data, empty tag and possibly add `received: true` to tag. Keep track of how much is left to receive.
* [ ] Show an OK at the end on both phones (all transfers OK, and no data registered left to transfer). This is what's needed before i.e. adding keys to indexedDB.

## Demo-to-be
[eklem.github.io/nfc-json-transfer/demo/](https://eklem.github.io/nfc-json-transfer/demo/)

Some stuff slightly working. Will break every now and then.

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
