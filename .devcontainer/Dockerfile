FROM node:18-bullseye-slim

RUN apt-get update && apt-get install -q -y \
    git

WORKDIR /workspaces/planet-exploration

RUN npm install csv-parse