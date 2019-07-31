---
id: how-it-works
title: How Map3 Works
sidebar_label: How Map3 Works
custom_edit_url: https://github.com/hyperion-hyn/map3/edit/master/docs/how-it-works.md
---

## Overall Description. 

- Map3 is a decentralized network of nodes. Nodes join the network and discover each other in a p2p manner. A Map3 edge node registers to proxy and cache certain map contents. Overtime, the network learns where to distribute the spatial data according to the locality characteristics (spatial sharding).
- Map3 can be deployed on multiple platforms: cloud server, NAS, edge data center (e.g. located at the 5g tower), smartphones and etc. Map3 node running on underutilized resources on the edge (especially 5g edge) can greatly reduce the cost and latency of the map service.
- Users can search and find map contents and their respective address on the Mapstore. All map data are cryptographically signed by the map owner. For some proprietary map contents, users need to submit authorization proof (e.g. a JWT access token) to the Map3 edge to access the contents. Some contents may be encrypted on the network for data privacy and can be decrypted with a Proxy Re-encryption scheme.
- All map services are encrypted. For compatibility with existing map technologies, all map3 services are now served with HTTPs enabled. Map3 supports both keyless and self-self HTTPs modes. 
  - The keyless architecture is primarily for meeting the security requirement of web browsers (website content certificate verification). For example, you can access Map3 via https://tile.map3.network/...*content_address* without throwing out a security warning. The private key of the certificate never exist on the Map3 node.
  - The self-signed architecture is for other clients to use p2p HTTPs services.
- clients can integrate the map3-client plug-in to popular map clients, e.g. Mapbox or leaflet, to discover available nodes and route services more robustly. 

In the case of hosting Map3 nodes for incentives:
- For higher SLA level requirements, users may need to pay the Edge node some fees for the services. The fee payment will be performed via a token payment channel. 
- To host Map3 nodes to earn token, the node operator needs to stake some tokens in a smart contract on the blockchain. Every single data served out of the nodes needed to be cryptographically signed with the node's private key. So every single data will firstly be signed by the owner (published on the p2p key store) and then the Map3 node. If the node serves wrong data, users can perform a fraud-proof on the blockchain to claim the staked tokens. 

## Design requirements and breakdowns

Deriving from "What Map3 is", we have:
- Decentralized p2p network for maps
  - open participation
  - p2p bootstrap, discovery and routing
  
- Hosting rich community map contents
  - a platform, the Mapstore to publish map contents and configure map policies
  - an map data access URL pattern
- Strong privacy and trust protocol
  - https (keyless, self-signed)
  - data verification and fraud proof
  - federated nodes (mutual TLS) 
  - proxy re-encryption of private map data
- Compatible with existing map technologies
  - A map3-client library for service discovery and robust service routing (e.g. fail-over)

And some optimization technique:
- cross-platform deployment
- spatial sharding: routing spatial data and compute to the right node and learn over time.

For the specifics, please refer to the technical documents and issue trackers on the code repository. 