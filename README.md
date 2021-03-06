# Chart
> People Also Bought microservice for a Service-oriented architecture clone of the [stock detail page from Robinhood.com](https://robinhood.com/stocks/AAPL)

## Table of Contents
- [Chart](#chart)
  - [Table of Contents](#table-of-contents)
  - [Related Projects](#related-projects)
  - [Deployment](#deployment)
    - [If Needed](#if-needed)
  - [Requirements](#requirements)
  - [Development](#development)
  - [Build](#build)

## Related Projects
- [Reverse Proxy](https://github.com/Dr-Wing/chart-proxy) that interacts with the other microservices
- Microservices
  - [About](https://github.com/Dr-Wing/about-microservice)
  - [Price Chart](https://github.com/Dr-Wing/chart)
  - [Earnings Chart](https://github.com/Dr-Wing/earnings)

## Deployment
- This microservice requires the [Price Chart](https://github.com/Dr-Wing/chart) microservice to be running. Please deploy that microservice first, if you have not already.
- Create a file in the project directory named `.env`, based on `.env.template`. This file will need:
  1. The URL of the deployed EC2 instance for this service
  2. The URL of the deployed EC2 instance for the price chart service
  3. The absolute path to the private key file in order to authenticate into that instance.

- From your LOCAL computer
```sh
# Makes the environment variables you just defined in `.env` available in your current shell
export $(cat .env)
```

```sh
# Only include the 1 at the end if this is the first time you've run this script on this instance (installs things like docker, docker-compose, etc...)
bash deploy.sh $pathToPEM $instance 1 && bash compose.sh $pathToPEM $instance
```

- (if needed) Enter yes at the prompt.

- The app is now running on the instance in a container at port 4550. The mongo database is available in its own container at port 1100.

### If Needed
- To stop (and clean up after yourself!) or restart the app, run these commands from your local machine (respectively)
```sh
bash compose.sh $pathToPEM $instance 1
```

- To restart the app:
```sh
bash compose.sh $pathToPEM $instance
```

- To connect to the mongo db running in the mongo container (ie, check if there is data there, etc ...), from the ec2 instance, run
```sh
docker exec -i pab_mongo_1 mongo "mongodb://localhost"
```

## Requirements
- docker
- docker-compose

## Development
- From within the root directory:
```sh
npm install
  ```

  ```sh
npm run dev
  ```

  ```sh
npm run start-dev
  ```

## Build
- Creates a webpack bundle, Builds a docker image, and pushes it to dockerhub
```sh
npm run build
```