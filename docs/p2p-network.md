---
id: p2p-network
title: P2P Network
sidebar_label: P2P Network
custom_edit_url: https://github.com/hyperion-hyn/map3/edit/master/docs/p2p-network.md
---

## Introduction

Map3 p2p network is the core module of Map3. All Map contents from MapStore are efficiently distributed through p2p network. It's easy and quick for everyone to deploy an edge node to participate freely in the Map3 network.



### Features of P2P Network

* Decentralized: the map contents and services in the network are scattered across all nodes, which can avoid the intervention of intermediate links and servers and avoid possible bottlenecks
* Scalability: with the addition of users, the overall resources and service capacity of the system are also expanded synchronously, which can always meet the needs of users easily.
* Robustness: P2P architectures are inherently attack resistant and fault tolerant. Because services are distributed among nodes, disruption of some nodes or networks has little impact on others. P2P networks can automatically adjust the overall topology and maintain the connectivity of other nodes when some nodes fail. 
* Privacy: as the transmission of information is distributed among nodes without going through a centralized link, the possibility of eavesdropping and leakage of users' privacy information is greatly reduced
* High performance: P2P network environment resources are distributed in multiple nodes to achieve load balancing of the whole network



## Edge Node

Any computer or device that is added to the Map3 network, stores map contents and serves to other devcies called **edge node**. There are two types of edge nodes:

* **Full Edge Node** (FEN): An edge node that downloads and stores all map data, can provide arbitrary content map data to other nodes. FEN requires a lot of disk space. 
* **light Edge Node** (LEN): According to the location of the edge node, it only downloads the map contents of nearby areas. Compared with FEN, LEN is lighter and requires less disk space, so the primary node type in the Map3 network is LEN.



### Geospatial Indexing

When a user uses a map, he mostly views contents near the his location. If the client can quickly find some nearest edge nodes that contain map contents near the user's location, then the Map3 network can serve the user in a more efficient way. Therefore finding the spatial relations between edges and map contents is the key.

Map3 uses [Google's S2 Address](http://s2geometry.io/devguide/s2cell_hierarchy.html) to index locations of both edge nodes and map contents, instead of latitude and longitude coordinate. Google's S2 library, the core geometric library, provide flexible support for **spatial indexing**. Built on that, it is easy to implement spatial query for map contents. 

Edge nodes are responsible for indexing data with addresses that are "close" to their own address. They can get latitude and longitude by GPS, cell phone towers, or other localization capabilities and then convert the coordinate to a S2 address.

The hierarchy of the addressing scheme enables relationships between nodes and map contents to be determined by comparing the lengths of their common prefixes. More similar the two addresses are, nearer the two corresponding locations are. This is good for both the complexity of finding nearby addresses and for load balancing, because the areas with the largest number of users also have the largest map data volume.



## Bootstrap & Discovery

When an edge node first launches, it must perform the bootstrapping process in order to populate its **routing table**. The process requires knowledge of at least one active and well-connected edge node. When it is launching for the first time, the Map3 discovery service can be used to find other active nodes. Once contacting the discovery service, the edge node profile are privoded, including its own node address, IP address, port and node type. The discovery service find and return other edge nodes in close proximity to the node. The returning list should contain both types of edge nodes with their profiles. All discovered edge nodes are added to the node’s routing table, thereby enabling connectivity of the global network topology.

If any edge node receives any message from another edge node, it may update its routing table. Because every message a node transimits include its profile, permitting the recipient to record the sender's existence if necessary. As a result, when a new node attend the network,  it discovers some edge node and saves them to its routing table. At the same time, these discovered nodes also update the new node to their own routing table.

After the new edge node populates its routing table, it starts to download map contents. As for FEN it will download all map contents from other FENs, or map content providers secondly. But for LFE, it only downloads the map contents whose addresses are "close" to its address from other FENs, LFEs or map content providers.



## Routing

Besides edge node, in most case users consume map contents by a **client**, such as map app for smart phone. Compared to edge node, client also need to join the network and discovery some near edge nodes. The process is the same as edge node. However, it neither downloads and stores any map contents in advance nor serves map contents to others.

When a client needs to request some map contents, the first step is to find two parts of edge nodes in its routing table that are nearest to it. One part of edge nodes is LEN, the other part is FEN. And then the client checks whether these LENs contains the map contents or not. If yes, the client can get the contents from these nodes. But if not, the client query the contents from the FENs instead. In one case that there is no availabe FEN near the client, it can but request to the accoording map contents' providers finally.

