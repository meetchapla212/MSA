# Microservice Architecture

## Steps to create MSA
1. Create projects for each module.
     1. Customer Module Path: ./Customer
     2. Order Module Path: ./Order
     3. Product Module Path: ./Product
     
2. Create API Layer Server project to redirect request to the module based on path.
     1. API Layer Server Path: ./Server

3. Run node server file in each module and Run API Layer Server.

## Information
1. Any request made to API Layer Server will be redirected to the defined target path.
2. Each module possess their own node server in MSA.
3. Structure will remain same for any projects.
