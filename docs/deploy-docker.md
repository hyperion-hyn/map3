---
id: deploy-docker
title: Deploy Map3 Edge With Docker
sidebar_label: Deploy with Docker
custom_edit_url: https://github.com/hyperion-hyn/map3/edit/master/docs/deploy-docker.md
---

We keep Docker images with recent snapshot builds from the `master` branch on DockerHub. `map3/deploy-edge` is a docker in docker (dind) version of a map3 edge node. Starts additional grafana and influxdb locally to provide node operators visibility on their nodes.

To pull docker image, run the following command:
```bash
docker pull map3/deploy-edge
```
Start the node by running:
```bash
docker run -it -d -p 80:80 -p 443:443 -p 3000:3000 map3/deploy-edge
```

Since Map3 is currently still in active development, we also offer an auto upgrade solution, so node operators will not need to manually upgrade on each release. To do so, simply download the corresponding repositories ([docker-map3](https://github.com/hyperion-hyn/docker-map3)) and run the following:
```bash
cd docker-map3/map3-edge-in-docker
docker-compose up --build --detach
```