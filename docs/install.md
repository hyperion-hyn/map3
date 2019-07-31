---
id: install
title: Install
sidebar_label: Install
custom_edit_url: https://github.com/hyperion-hyn/map3/edit/master/docs/install.md
---
## Install from script
To launch a map3 edge, you can use the install script using cURL:

````
curl -o- https://hyperion-deploy.s3-ap-southeast-1.amazonaws.com/edge/install.sh | sudo bash
````
or Wget:
````
wget -qO- https://hyperion-deploy.s3-ap-southeast-1.amazonaws.com/edge/install.sh | sudo bash
````

## Build from source
Map3 is composed with serveral project, the map3 service node can be deployed by scripts which can be downloaded via:
```bash
git clone https://github.com/hyperion-hyn/docker-map3
```

The above command will checkout the master branch of Map3. 
```bash
cd map3-edge
```
To build the docker images:
```bash
make build
```

To run map3 service:
```bash
make run
```

Alternatively, you can launch map3 service in backgroud:
```bash
docker-compose down --remove-orphans && docker-compose up --remove-orphans -d
```

