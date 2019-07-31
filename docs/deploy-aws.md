---
id: deploy-aws
title: Deploy Map3 Edge on AWS
sidebar_label: Deploy on AWS
custom_edit_url: https://github.com/hyperion-hyn/map3/edit/master/docs/deploy-aws.md
---

**Step1: Create an account and Key Pair**
* Create an account (Please follow AWS instructions)
* Sign in to AWS console
* Create key Pair
    * Choose your preferred country (region)
        * [US East (Ohio)](https://console.aws.amazon.com/ec2/v2/home?region=us-east-1#KeyPairs:sort=keyName)
        * [US East (N. Virginia)](https://us-east-2.console.aws.amazon.com/ec2/v2/home?region=us-east-2#KeyPairs:sort=keyName)
        * [US West (N. California)](https://us-west-1.console.aws.amazon.com/ec2/v2/home?region=us-west-1#KeyPairs:sort=keyName)
        * [US West (Oregon)](https://us-west-2.console.aws.amazon.com/ec2/v2/home?region=us-west-2#KeyPairs:sort=keyName)
        * [Asia Pacific (Mumbai)](https://ap-south-1.console.aws.amazon.com/ec2/v2/home?region=ap-south-1#KeyPairs:sort=keyName)
        * [Asia Pacific (Seoul)](https://ap-northeast-2.console.aws.amazon.com/ec2/v2/home?region=ap-northeast-2#KeyPairs:sort=keyName)
        * [Asia Pacific (Singapore)](https://ap-southeast-1.console.aws.amazon.com/ec2/v2/home?region=ap-southeast-1#KeyPairs:sort=keyName)
        * [Asia Pacific (Sydney)](https://ap-southeast-2.console.aws.amazon.com/ec2/v2/home?region=ap-southeast-2#KeyPairs:sort=keyName)
        * [Asia Pacific (Tokyo)](https://ap-northeast-1.console.aws.amazon.com/ec2/v2/home?region=ap-northeast-1#KeyPairs:sort=keyName)
        * [Asia Pacific (Hong Kong)](https://ap-east-1.console.aws.amazon.com/ec2/v2/home?region=ap-east-1#KeyPairs:sort=keyName)
        * [Canada (Central)](https://ca-central-1.console.aws.amazon.com/ec2/v2/home?region=ca-central-1#KeyPairs:sort=keyName)
        * [EU (Frankfurt)](https://eu-central-1.console.aws.amazon.com/ec2/v2/home?region=eu-central-1#KeyPairs:sort=keyName)
        * [EU (Ireland)](https://eu-west-1.console.aws.amazon.com/ec2/v2/home?region=eu-west-1#KeyPairs:sort=keyName)
        * [EU (London)](https://eu-west-2.console.aws.amazon.com/ec2/v2/home?region=eu-west-2#KeyPairs:sort=keyName)
        * [EU (Paris)	](https://eu-west-3.console.aws.amazon.com/ec2/v2/home?region=eu-west-3#KeyPairs:sort=keyName)
        * [EU (Stockholm)](https://eu-north-1.console.aws.amazon.com/ec2/v2/home?region=eu-north-1#KeyPairs:sort=keyName)
        * [South America (São Paulo)](https://sa-east-1.console.aws.amazon.com/ec2/v2/home?region=sa-east-1#KeyPairs:sort=keyName)
        * [Middle East (Bahrain)](https://me-south-1.console.aws.amazon.com/ec2/v2/home?region=me-south-1#KeyPairs:sort=keyName)
    * Click “Create key Pair” button in the page center to create your first key pair
    ![](https://cdn-images-1.medium.com/max/1600/1*D26GBkbpgfWVZjd1q3UGHw.png)
    * Create your own key pair name
    ![](https://cdn-images-1.medium.com/max/1600/1*6Y3ivlLZpo1_QaQi_NphjQ.png)
    * Click “Create Key Pair” button
        1. The Browser will automatically download a key pair file, please save the file for future logins to Amazon Elastic Compute Cloud (EC2).
        2. File names may vary across different operational systems
    ![](https://cdn-images-1.medium.com/max/1600/1*3pUkD6cttkm0aFY9b_-FsQ.png)
    
**Step2: Deploy Map3 edge node**
* Click the following link to create new stack.
    * [US East (Ohio)](https://us-east-2.console.aws.amazon.com/cloudformation/home#/stacks/create/review?templateURL=https://s3-ap-southeast-1.amazonaws.com/hyn.static/cloud-formation/map3-edge-node-cloud-formation.json&stackName=map3-edge&param_InstanceType=t2.micro&param_SSHLocation=0.0.0.0/0)
    * [US East (N. Virginia)](https://us-east-1.console.aws.amazon.com/cloudformation/home#/stacks/create/review?templateURL=https://s3-ap-southeast-1.amazonaws.com/hyn.static/cloud-formation/map3-edge-node-cloud-formation.json&stackName=map3-edge&param_InstanceType=t2.micro&param_SSHLocation=0.0.0.0/0)
    * [US West (N. California)](https://us-west-1.console.aws.amazon.com/cloudformation/home#/stacks/create/review?templateURL=https://s3-ap-southeast-1.amazonaws.com/hyn.static/cloud-formation/map3-edge-node-cloud-formation.json&stackName=map3-edge&param_InstanceType=t2.micro&param_SSHLocation=0.0.0.0/0)
    * [US West (Oregon)](https://us-west-2.console.aws.amazon.com/cloudformation/home#/stacks/create/review?templateURL=https://s3-ap-southeast-1.amazonaws.com/hyn.static/cloud-formation/map3-edge-node-cloud-formation.json&stackName=map3-edge&param_InstanceType=t2.micro&param_SSHLocation=0.0.0.0/0)
    * [Asia Pacific (Mumbai)](https://ap-south-1.console.aws.amazon.com/cloudformation/home#/stacks/create/review?templateURL=https://s3-ap-southeast-1.amazonaws.com/hyn.static/cloud-formation/map3-edge-node-cloud-formation.json&stackName=map3-edge&param_InstanceType=t2.micro&param_SSHLocation=0.0.0.0/0)
    * [Asia Pacific (Seoul)](https://ap-northeast-2.console.aws.amazon.com/cloudformation/home#/stacks/create/review?templateURL=https://s3-ap-southeast-1.amazonaws.com/hyn.static/cloud-formation/map3-edge-node-cloud-formation.json&stackName=map3-edge&param_InstanceType=t2.micro&param_SSHLocation=0.0.0.0/0)
    * [Asia Pacific (Singapore)](https://ap-southeast-1.console.aws.amazon.com/cloudformation/home#/stacks/create/review?templateURL=https://s3-ap-southeast-1.amazonaws.com/hyn.static/cloud-formation/map3-edge-node-cloud-formation.json&stackName=map3-edge&param_InstanceType=t2.micro&param_SSHLocation=0.0.0.0/0)
    * [Asia Pacific (Sydney)](https://ap-southeast-2.console.aws.amazon.com/cloudformation/home#/stacks/create/review?templateURL=https://s3-ap-southeast-1.amazonaws.com/hyn.static/cloud-formation/map3-edge-node-cloud-formation.json&stackName=map3-edge&param_InstanceType=t2.micro&param_SSHLocation=0.0.0.0/0)
    * [Asia Pacific (Tokyo)](https://ap-northeast-1.console.aws.amazon.com/cloudformation/home#/stacks/create/review?templateURL=https://s3-ap-southeast-1.amazonaws.com/hyn.static/cloud-formation/map3-edge-node-cloud-formation.json&stackName=map3-edge&param_InstanceType=t2.micro&param_SSHLocation=0.0.0.0/0)
    * [Asia Pacific (Hong Kong)](https://ap-east-1.console.aws.amazon.com/cloudformation/home#/stacks/create/review?templateURL=https://s3-ap-southeast-1.amazonaws.com/hyn.static/cloud-formation/map3-edge-node-cloud-formation.json&stackName=map3-edge&param_InstanceType=t3.micro&param_SSHLocation=0.0.0.0/0)
    * [Canada (Central)](https://ca-central-1.console.aws.amazon.com/cloudformation/home#/stacks/create/review?templateURL=https://s3-ap-southeast-1.amazonaws.com/hyn.static/cloud-formation/map3-edge-node-cloud-formation.json&stackName=map3-edge&param_InstanceType=t2.micro&param_SSHLocation=0.0.0.0/0)
    * [EU (Frankfurt)](https://eu-central-1.console.aws.amazon.com/cloudformation/home#/stacks/create/review?templateURL=https://s3-ap-southeast-1.amazonaws.com/hyn.static/cloud-formation/map3-edge-node-cloud-formation.json&stackName=map3-edge&param_InstanceType=t2.micro&param_SSHLocation=0.0.0.0/0)
    * [EU (Ireland)](https://eu-west-1.console.aws.amazon.com/cloudformation/home#/stacks/create/review?templateURL=https://s3-ap-southeast-1.amazonaws.com/hyn.static/cloud-formation/map3-edge-node-cloud-formation.json&stackName=map3-edge&param_InstanceType=t2.micro&param_SSHLocation=0.0.0.0/0)
    * [EU (London)](https://eu-west-2.console.aws.amazon.com/cloudformation/home#/stacks/create/review?templateURL=https://s3-ap-southeast-1.amazonaws.com/hyn.static/cloud-formation/map3-edge-node-cloud-formation.json&stackName=map3-edge&param_InstanceType=t2.micro&param_SSHLocation=0.0.0.0/0)
    * [EU (Paris)](https://eu-west-3.console.aws.amazon.com/cloudformation/home#/stacks/create/review?templateURL=https://s3-ap-southeast-1.amazonaws.com/hyn.static/cloud-formation/map3-edge-node-cloud-formation.json&stackName=map3-edge&param_InstanceType=t2.micro&param_SSHLocation=0.0.0.0/0)
    * [EU (Stockholm)](https://eu-north-1.console.aws.amazon.com/cloudformation/home#/stacks/create/review?templateURL=https://s3-ap-southeast-1.amazonaws.com/hyn.static/cloud-formation/map3-edge-node-cloud-formation.json&stackName=map3-edge&param_InstanceType=t3.micro&param_SSHLocation=0.0.0.0/0)
    * [South America (São Paulo)](https://sa-east-1.console.aws.amazon.com/cloudformation/home#/stacks/create/review?templateURL=https://s3-ap-southeast-1.amazonaws.com/hyn.static/cloud-formation/map3-edge-node-cloud-formation.json&stackName=map3-edge&param_InstanceType=t2.micro&param_SSHLocation=0.0.0.0/0)
    * [Middle East (Bahrain)](https://me-south-1.console.aws.amazon.com/cloudformation/home#/stacks/create/review?templateURL=https://s3-ap-southeast-1.amazonaws.com/hyn.static/cloud-formation/map3-edge-node-cloud-formation.json&stackName=map3-edge&param_InstanceType=t3.micro&param_SSHLocation=0.0.0.0/0)
* Specify Details. Fill in Stack name, select default InstanceType t2.micro (For Hong Kong, Stockholm and Bahrain region, please choose 't3.micro'), and choose the keyname you used when creating key pair in the dropdown menu
    
    Users are recommend to choose ‘t2.micro’, which is a free usage tier.Per month, the AWS free usage tier covers: 750-hour usage and 15GB of bandwidth out aggregated across all AWS services. (Please check [AWS official websites](https://aws.amazon.com/ec2/instance-types/) for more details about **Free Usage Tier**). **When all information filled, click “Create” button to start creating the edge node.**
    ![](https://cdn-images-1.medium.com/max/1600/1*uqeOBPmQs2stSd-wZivOkg.png)
* You have now created an edge node. Wait **2–3 minutes** for the system to confirm.
    ![](https://cdn-images-1.medium.com/max/1600/1*Y-6rlhXoublU1x38hNSKeQ.png)
* Check your edge node operation status by visiting the link below:[https://console.aws.amazon.com/ec2/v2/home#Instances:sort=desc:instanceState](https://console.aws.amazon.com/ec2/v2/home#Instances:sort=desc:instanceState) Choose your preferred region if you need when opening the link above.
  Remember to obtain your public IP (you need **Ipv4** to view individual node Dashboard)
  ![](https://cdn-images-1.medium.com/max/1600/1*_jh-kTTxVRbho7cxbDhyRA.png)
* The node is being prepared
* The node is in operation
    ![](https://cdn-images-1.medium.com/max/1600/1*LN1hZvluj51ZMRJuhA2quA.png)

**Tip. 1** Enter you public IP(IPV4 ONLY) on your browser, you can see your own map node dashboard. The username and password for dashboard is “**admin**”

**Tip. 2** Once you deploy the node, you **don’t** have to always keep your computers live or AWS account logged in.

**Tip. 3** You can raise as many Map 3 notes as you wish as long as you follow the instruction above. But please note that Amazon might **charge** you for this as **t2.micro** has limited free usage and bandwidth.

**Step3: How to delete a node**
* Click “**Create Stack**”dropdown menu, and choose delete Stack
![](https://cdn-images-1.medium.com/max/1600/1*GnKXIreHYOOrP2rEC5U2gw.png)
* Click “**Yes, Delete**” to delete Stack
![](https://cdn-images-1.medium.com/max/1600/1*k-4wfW2QNci3DUVVRPoOTQ.png)
* Confirm your status
![](https://cdn-images-1.medium.com/max/1600/1*EoHdsWkCEXu0_7VwANeE6w.png)
