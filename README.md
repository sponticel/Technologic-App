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

