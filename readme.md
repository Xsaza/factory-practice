To run application using **docker** follow next steps:

1. Run `make build` (or manual `docker build -t factory-practice-img:0.0.1 .`). This command will build app docker image.
2. Run `make run` (or manual `docker run -d --name factory-practice -p 3000:3000 factory-practice-img:0.0.1`). This command will run app docker container.
3. Go to `localhost:3000` to see application working

- Run `make stop` (or manual `docker stop factory-practice && docker rm factory-practice`) to stop and remove app docker container.
- Run `make delete` (or manual `docker rmi -f factory-practice-img:0.0.1`) to remove app docker image.

To run application **in your local environment** follow next steps:

1. Run `npm i` to install required dependencies.
2. Run `npm start` to start webpack-dev-server.
3. Go to `localhost:3000` to see application working
