---
id: deploy-docker
title: Deploy Map3 Edge With Docker
sidebar_label: Deploy with Docker
custom_edit_url: https://github.com/hyperion-hyn/map3/edit/website/docs/deploy-docker.md
---

We keep Docker images with recent snapshot builds from the `master` branch on DockerHub. `map3/edge` is a light weight version that operates only the minimal functionalities of a map3 edge node. `map3/edge-dashboard` starts additional grafana and influxdb locally to provide node operators visibility on their nodes.

To pull docker image, run the following command:
```bash
docker pull map3/edge
```
Start the node by running:
```bash
docker run -it -p 80:80 -p 443:443 -p 3000:3000 map3/edge
```

Since Map3 is currently still in active development, we also offer an auto upgrade solution, so node operators will not need to manually upgrade on each release. To do so, simply download the corresponding repositories ([map3-edge-dashboard](https://github.com/hyperion-hyn/map3-edge-dashboard.git)/[map3-edge](https://github.com/hyperion-hyn/map3-edge.git)) and run the following:
```bash
cd map3-edge
docker-compose up --build --detach
```