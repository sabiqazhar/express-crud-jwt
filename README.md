
# REST API Todo list with JWT

In this backend project, we use tech stacks:
- NodeJS
- Express JS
- Mongoose
- MongoDB Atlas
- JWT


## Before running

- Setup the database local, you can read stuff for install mongo in [here](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/) (for windows, mac and linux) and [here](https://www.linode.com/docs/guides/set-up-mongodb-on-docker/) (for docker)

- Setup database on atlas mongoo, you can read stuff [here](https://docs.rackspace.com/blog/creating-and-connecting-to-a-database-in-mongodb-atlas/)

- if you choose database at atlas mongoo, add and edit  .env adjust your mongoo atlas account


## Run Locally

Clone the project

```bash
  git clone https://github.com/sabiqazhar/express-crud-jwt.git
```

Go to the project directory

```bash
  cd express-crud-jwt
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Features

### Todo route
- ✔️PASSED // GET all todo
- ✔️PASSED // GET todo by id
- ✔️PASSED // POST data todo
- ✔️PASSED // PUT data todo
- ✔️PASSED // DELETE data todo


### User/Auth route
- ✔️PASSED // POST Register user
- ✔️PASSED // POST Login user
