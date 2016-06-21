# Request Id POC

Small `express` proof of concept for creating a bunyan-based logger module that can grab a request id from `continuation-passing-storage` in a way that's transparent to the client.


# Running
Start the server with:

```
npm install
npm start
```

Now on another shell, access the endpoints and observe the logging

```
curl http://localhost:3000/
curl http://localhost:3000/users
```
