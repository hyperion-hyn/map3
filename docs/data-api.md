---
id: data-api
title: Data API
sidebar_label: Data API
custom_edit_url: https://github.com/hyperion-hyn/map3/edit/master/docs/data-api.md
---

Map3 provides a unified URI pattern for accessing map resources

https://tile.map3.network/api/{version}/{map provider}/{map name}/{z}/{x}/{y}.{ext}

## Free access layers

### Base Vector Map layer

Hyperion maintains a pipeline to generate a lean global set of vector tiles combining multiple data sources (e.g. OpenStreetMap and OpenAddress).
* Average 30% smaller in size. 
* Faster and better user experience for your customers.
* Weekly update of global data
* Flexible styling. Check our default styles or contact us to submit yours!

Statistics of the vector map:
* Num of POI
23,664,889
* Num of building
360,630,105
* Area of building
6.06577e+10 m2
* Area of landuse
1.83446e+12m2
* Num of transportation line/ways (highway + railway + aerial way + shipping line)
137,107,925

URL: https://tile.map3.network/api/v1/hyn/map3/1/1/1.pbf

### Third Party Data
Third Party Open Source Data that are served through Map3 Network.

#### Mapillary
Mapillary is a leading open mapping provider with global coverage of street-view imagery. 
The Mapillary image layer is best used with MapillaryJS library to provide navigation features 
of image sequences. For more details please also refer to https://www.mapillary.com/developer/tiles-documentation

URL: https://tile.map3.network/api/v0.1/mapillary/sequence_layer/1/1/1.mvt

#### NASA Earth Data
To use base tiles offered on NASA Earth Data https://earthdata.nasa.gov/

Endpoint address:
* https://tile.map3.network/api/v0.1/nasa/blue_marble/{z}/{x}/{y}.jpeg
* https://tile.map3.network/api/v0.1/nasa/true_color/{z}/{x}/{y}.jpeg
* https://tile.map3.network/api/v0.1/nasa/land_water/{z}/{x}/{y}.png

## Authenticated access layer
These layers require a JWT token issued by the map provider to access the content

Just append the Jwt token to the URL as 

https://tile.map3.network/api/{version}/{map provider}/{map name}/{z}/{x}/{y}.{ext}?token={jwt}

You may contact map3@hyn.space to obtain the required JWT token.
