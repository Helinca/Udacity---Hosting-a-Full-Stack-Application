# Hosting a Full-Stack Application

This application is provided by Udacity as an alternative starter project. The udagram application is a fairly simple application that includes all the major components of a Full-Stack web application.

## Access Website

Use the following link:  [http://elena-ud-last-pr-frontend.s3-website-us-east-1.amazonaws.com](http://elena-ud-last-pr-frontend.s3-website-us-east-1.amazonaws.com) to access the website.


## Hosting

This website is hosted on AWS. Elastic Beanstalk is used for the Backend API, two S3 Buckets for the frontend and uploaded images, and a RDS database running Postgres.

![Image](doc/images/Infrastructure.drawio.png)




## CI / CD Pipeline

 The CircleCi is connected to the project on Github and is used to automatically deploy the website to the AWS, and it is set to automatically execute when code is pushed into the master Github project. 

![Image](doc/images/PipelineArchitecture.drawio.png)




