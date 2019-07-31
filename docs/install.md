---
id: install
title: Install
sidebar_label: Install
custom_edit_url: https://github.com/hyperion-hyn/map3/edit/master/docs/install.md
---

## Build from source
Map3 is written in [Go](https://golang.org/) and can be downloaded via:
```bash
go get -d github.com/hyperion-hyn/map3
```

The above command will checkout the default version of Map3 into your local `GOPATH`. To build the executable:
```bash
go install github.com/hyperion-hyn/map3/cmd/map3
```

Alternatively, you can start the CLI with docker:
```bash
cd $GOPATH/hyperion-hyn/map3

docker-compose down && docker-compose up -d
```