---
id: cli
title: CLI
sidebar_label: CLI
custom_edit_url: https://github.com/hyperion-hyn/map3/edit/master/docs/cli.md
---

## Executables

| Command | Description |
|----------|----------|
| map3      | Our main map3 command, this is the entry point to all |


./build/map3 --loglevel panic serve --tilesource mbtiles

remember to change the mbtiles address in the config.json file. can use the map3.html at host:port/map3.html to browse data (update the tile source in html)
Download map tiles at  https://openmaptiles.com/downloads/planet/

if logtofile is turned on, logs will be rollingly written to ./server.log.date

## Configuration
| Object | Fields | Description |
|----------|----------|----------|
|server|version|server version|
||apiversion|api version|
||env|OPTIONS: test, dev, prod |
||host|hostname of webserver|
||port|serving port of webserver|
|db|type|OPTIONS: mbtiles, crdb|
||path (mbtiles)|include full path of mbtiles|
||user (crdb)|user account name to access|
||database (crdb)|database to access|
||port (crdb)|port of crdb instance ro connect to|
||host (crdb)|hostname/ip of crdb instance ro connect to|
||dir (crdb)|directory to certs if running crdb in secure mode|
|logging|loglevel|OPTIONS: trace, debug, info, error, warn, fatal, panic|
||logpath|Full path to log directory|

## Rotate Log
Log files are placed into logpath defined in configuration
1. Rolling with ISO8601 timestamp appended on reaching 10M (e.g. stdout-2016-11-04T18-30-00.000.log)
2. Removed when age of file reaches 7 days

| Files | Description |
|----------|----------|
|map3.log|log file for map3 of loglevel info and below|
|map3-error.log|log file for map3 of loglevel error and above|
|access.log|log file for http request of loglevel info and below|
|error.log|log file for http request of loglevel error and above|