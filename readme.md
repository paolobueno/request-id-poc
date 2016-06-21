# Request Id POC

Small `express` proof of concept for creating a bunyan-based logger module that can grab a request id from `continuation-passing-storage` in a way that's transparent to the client.


# Running

```
npm install
npm start

curl http://localhost:3000/
curl http://localhost:3000/users
```
