---
id: install
title: Install
sidebar_label: Install
custom_edit_url: https://github.com/hyperion-hyn/map3/edit/master/docs/install.md
---
## Prerequisites

The install script only supports the following operating systems, please click the corresponding link to view the operating system requirements.

* [Amazon Linux](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/docker-basics.html)
* [CentOS](https://docs.docker.com/install/linux/docker-ce/centos/#os-requirements)
* [Debian](https://docs.docker.com/install/linux/docker-ce/debian/#os-requirements)
* [Fedora](https://docs.docker.com/install/linux/docker-ce/fedora/#os-requirements)
* [MacOS](https://docs.docker.com/docker-for-mac/install/)
* [RHEL(RedHat)](https://docs.docker.com/install/linux/docker-ee/rhel/#os-requirements)
* [Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/#os-requirements)

## Install from script
To launch a map3 edge, you can use the install script using cURL:

```bash
curl -o- https://hyperion-deploy.s3-ap-southeast-1.amazonaws.com/edge/install.sh | sudo bash
```
or Wget:
```bash
wget -qO- https://hyperion-deploy.s3-ap-southeast-1.amazonaws.com/edge/install.sh | sudo bash
```

