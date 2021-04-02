# Technologic-App

## Scheema
### Scheema for Product Create
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

## Whimsical Design
[Whimsical Diagram](https://learus.github.io/react-material-ui-carousel/)

## Team Expectations
[Expectations Google Doc](https://docs.google.com/document/d/1z5VV2ltSWO__pA7WPStm3Mx5NQPo7FpTK8sMyH2bLEI/edit)

## Overview
Technologic is a community based platform where users can post electronics of their choice and be contacted to sell their products listed. All users can edit and view all posts. Our goal is to create an app that gives the user a seamless experience selling and finding new products.

## Post MVP
- Authorization for only sellers to edit and delete their own products 
- Advanced CSS 
- API Testing using testing libraries
