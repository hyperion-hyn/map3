---
id: deploy-ali
title: Deploy Map3 Edge on AliCloud
sidebar_label: Deploy on AliCloud
custom_edit_url: https://github.com/hyperion-hyn/map3/edit/master/docs/deploy-ali.md
---

**Step1: Create an account**

---
* Please refer to Aliyun’s official instructions to create your account. For more details please [click](https://help.aliyun.com/knowledge_detail/37195.html)
    
**Step2: Deploy Map3 edge node**
***Pre-requisite: you need to deposit at least 100 RMB in Aliyun account to deploy an edge node***

---

* Use Open resource orchestration management (ROS) to deploy, please choose the following recommend regions:
    * [N1 of China (Qingdao)](https://ros.console.aliyun.com/#/stack/cn-qingdao/list)
    * [N2 of China (Beijing)](https://ros.console.aliyun.com/#/stack/cn-beijing/list)
    * [N3 of China (Zhangjiakou)](https://ros.console.aliyun.com/#/stack/cn-zhangjiakou/list)
    * [N5 of China (Huhehaote)](https://ros.console.aliyun.com/#/stack/cn-huhehaote/list)
    * [E1 of China (Hangzhou)](https://ros.console.aliyun.com/#/stack/cn-hangzhou/list)
    * [E2 of China (Shanghai)](https://ros.console.aliyun.com/#/stack/cn-shanghai/list)
    * [HK](https://ros.console.aliyun.com/#/stack/cn-hongkong/list)
    * [Singapore](https://ros.console.aliyun.com/#/stack/ap-southeast-1/list)
    * [Malaysia (Kuala Lumpur)](https://ros.console.aliyun.com/#/stack/ap-southeast-3/list)
    * [Indonesia (Jakarta)](https://ros.console.aliyun.com/#/stack/ap-southeast-5/list)
    * [Japan (Tokyo)](https://ros.console.aliyun.com/#/stack/ap-northeast-1/list)
    * [U.S.A (Silicon Valley)](https://ros.console.aliyun.com/#/stack/us-west-1/list)
    * [Germany (Frankfurt)](https://ros.console.aliyun.com/#/stack/eu-central-1/list)
    * [India (Mumbai)](https://ros.console.aliyun.com/#/stack/ap-south-1/list)
    * [UK (London)](https://ros.console.aliyun.com/#/stack/eu-west-1/list) 

    ![](https://static.hyn.space/aliyun-ros/en/001.png)
* Click the right corner “New Resource Stack”
* Follow the steps below on the opened page
    * Choose your preferred region (the example is HK)
    * Choose “URL” in dropdown menu of “Template source”
    * In “Template URL” copy http://map3.oss-cn-hongkong.aliyuncs.com/aliyun-ros-deploy-map3-edge-node.json
    * Click “Next”

  ![](https://static.hyn.space/aliyun-ros/en/002.png)
* Fill in the following information in Stack Management
    * Stack name (Must be between 1 and 64 characters long, must initiate with letters, can contain number, "_" or "-")
    * Use default for “Creation timeout” and “Roll back”
    * Use default for “ECS Image – ubuntu_16”
    * In usual circumstances, there’s no need to change the default “ECS Instance Type”. But when some regions lack resources, and shows no default “ECS Instance Type”, pls select in the dropdown menu for other “ECS Instance Type” and try again
    * Fill in password in “InstanceLoginPassword” and (Please Confirm) “InstanceLoginPassword” - must include Capital Letters, numbers, special letters (at lease 3 types), must be between 8 and 21 characters long
    * Click “Create”
  ![](https://static.hyn.space/aliyun-ros/en/003.png)
  
If the information filled is correct, webpage will jump to “Request Submitted Successfully”. On this page, click “Go to the Events List” to check details of node deployment
![](https://static.hyn.space/aliyun-ros/en/004.png)

“Events List” page will present your node progress. When webpage (will automatically refresh) shows “Stack CREATE Completed” (normally it takes 3-5 min), it means your edge node has been successfully deployed. Click the link in “Related Resource ID” to check “Stack Overview”  
![](https://static.hyn.space/aliyun-ros/en/005.png)

In “Stack Overview” can find the “PublicIp” of the Map3 node just created. IP can be used to view the map service status you initiated
![](https://static.hyn.space/aliyun-ros/en/006.png)

Copy “PublicIp” and paste the address to browser to visit Map services. Pls fill in your contact details in “Support us” and click submit. We will contact you when edge node technology is updated. 
![](https://static.hyn.space/aliyun-ros/en/007.png)

Click the right corner to view individual node Dashboard, both login name and password for dashboard are “admin”

**Step3: Switch “Instance Settings” from bandwidth to subscriptions**

---

Visit Instance Page via the link below (The example is HK): [https://ecs.console.aliyun.com/?spm=5176.2020520101.aliyun_sidebar.aliyun_sidebar_ecs.70a27d33y7jaFa#/server/region/cn-hongkong
](https://ecs.console.aliyun.com/?spm=5176.2020520101.aliyun_sidebar.aliyun_sidebar_ecs.70a27d33y7jaFa#/server/region/cn-hongkong)

Click the click “More” at the right side, and click Instance Settings – Switch to Subscription
![](https://static.hyn.space/aliyun-ros/en/008.png)
In the pop-up page, click “Please click Batch Change”
![](https://static.hyn.space/aliyun-ros/en/009.png)
On pop-up page, choose your preferred service length, and tick “Switch to subscription disk”, and click “OK”. 
![](https://static.hyn.space/aliyun-ros/en/010.png)

#### Now your edge node deployment is complete. ####

**Options: To delete a Node**
***Please follow the instructions below to delete an edge node***

---
On the page of “Stack Management”, click to “delete” the node stack you request
![](https://static.hyn.space/aliyun-ros/en/delete-001.png)
It takes 1-2 minutes to delete a node
![](https://static.hyn.space/aliyun-ros/en/delete-002.png)


### Please send your inquiries to Hyperion Forum via [talk.hyn.space](https://talk.hyn.space) if you have encountered any problems. Or send an email to chenbin@hyn.space for technical issues. ####