# Developing Map3

* [Development Setup](#setup)
* [Coding Rules](#rules)

## <a name="setup"> Development Setup

This document describes how to set up your development environment to build and test Map3, and explains the basic mechanics of using `git`, `go`, `docker`, `docker-compose`, `make`, `curl`.

### Installing Dependencies

Before you can build Map3, you must install and configure the following depencies on your machine:

* [Git](http://git-scm.com/): The [Github Guide to Installing Git][git-setup] and [Using Git and Github][using-git] are good sources of information.

* [Go](https://golang.org/): We mainly use golang to develop Map3. 

* [Bash](https://www.gnu.org/software/bash/)

* [make](https://www.gnu.org/software/make/)

* [docker](https://www.docker.com/)

* [docker-compose](https://docs.docker.com/compose/)


### Forking Map3 on Github

To contribute code to Map3, you must have a GitHub account so you can push code to your own
fork of Map3 and open Pull Requests in the [GitHub Repository][github].

To create a Github account, follow the instructions [here](https://github.com/signup/free).
Afterwards, go ahead and [fork](http://help.github.com/forking) the
[main Map3 repository][github].


### Build Map3
to build Map3, you clone the source code repository and use `make` and `docker` to build images:

````shell
# Clone your Github repository
git clone https://github.com/<github username>/docker-map3

# Go to the map3-edge directory:
cd docker-map3/map3-edge/

# Add the main Map3 repository as an upstream remote to your repository
git remote add upstream "https://github.com/hyperion-hyn/docker-map3.git"

# Build Map3:
make build
````

### Running a Local Map3 Node
to debug code, it is often useful to have a local Map3 Node. for this purpose:
1. To start a Map3 node, run:
````shell
make run
````

2. To access the local dashboard, enter the following URL into your web browser:
````text
http://localhost:3000/
````

3. To access a map tile file, execute the following command in shell:
````shell
# via http 
curl --header "X-Forwarded-For: xx.xx.xx.xx" -s -v -i -o/dev/null  http://127.0.0.1/v1/api/tile/14/13347/7110.pbf

# via https
curl --resolve 127-0-0-1.tile.map3.network:443:127.0.0.1 --header "X-Forwarded-For: xx.xx.xx.xx" -s -v -i -o/dev/null  https://127-0-0-1.tile.map3.network:443/v1/api/tile/1/1/1.pbf
````

[git-setup]: https://help.github.com/articles/set-up-git
[using-git]: https://help.github.com/en/categories/using-git
[github]: https://github.com/hyperion-hyn/map3
[deploy-map3]: https://www.map3.network/docs/install.html

