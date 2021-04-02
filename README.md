# Technologic-App

## Scheema
### Scheema for Product Create
```
const Schema = mongoose.Schema

const Product = new Schema(
  {
    product: { type: String, required: true },
    condition: { type: String, required: true },
    imgURL1: { type: String, required: true },
    imgURL2: { type: String, required: true },
    imgURL3: { type: String, required: true },
    details: { type: String, required: true },
    price: { type: String, required: true },
    contactInfo: { type: String, required: true },
  }
```
### Scheema for Sign Up 
```
const Schema = mongoose.Schema

const Product = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    confirmation: { type: String, required: true },
  }
  ```
### Scheema for Sign In
  ```
  const Schema = mongoose.Schema

const Product = new Schema(
  {
    username: { type: String, required: true },
    password: { type: String, required: true },
  }
```
### Scheema for Edit
```
const Product = new Schema(
  {
    product: { type: String, required: true },
    condition: { type: String, required: true },
    imgURL1: { type: String, required: true },
    imgURL2: { type: String, required: true },
    imgURL3: { type: String, required: true },
    details: { type: String, required: true },
    price: { type: String, required: true },
    contactInfo: { type: String, required: true },
  }
```

## Whimsical Design
https://learus.github.io/react-material-ui-carousel/

## Team Expectations
https://docs.google.com/document/d/1z5VV2ltSWO__pA7WPStm3Mx5NQPo7FpTK8sMyH2bLEI/edit

## Overview
Technologic is a community based platform where users can post items of their choice and be contacted to sell their products listed. Users that sign in are able to create or edit their posts. While all users are able to view all products listed for sale. Our goal is to create an app that which gives the user a seamless experience selling and finding new products.

##