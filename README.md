# Technologic-App

## Overview
Technologic is a community based platform where users can post electronics of their choice and be contacted to sell their products listed. All users can edit and view all posts. Our goal is to create an app that gives the user a seamless experience selling and finding new products.

## Schema
### Schema for Product 
```
const Schema = mongoose.Schema

const Product = new Schema(
  {
    productName: { type: String, required: true },
    condition: { type: String, required: true },
    imgURL1: { type: String, required: true },
    imgURL2: { type: String, required: true },
    imgURL3: { type: String, required: true },
    details: { type: String, required: true },
    price: { type: String, required: true },
    contactInfo: { type: String, required: true },
  }
```
### Schema for User
```
const Schema = mongoose.Schema

const User = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password_digest: { type: String, required: true },
  }
  ```

## Whimsical Design
https://whimsical.com/p3-9RKvnokPd8tk5mvAjAtsvt

## Team Expectations
https://docs.google.com/document/d/1z5VV2ltSWO__pA7WPStm3Mx5NQPo7FpTK8sMyH2bLEI/edit

## MVP
https://github.com/sponticel/Technologic-App/projects/1

- Prioritize communication among team members
- Full CRUD functionality and working routes
- Authentication for users



## Post MVP
- Authorization for only sellers to edit and delete their own products 
- Advanced CSS 
- API Testing using testing libraries
