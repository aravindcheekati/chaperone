
# Chaperone Website

Chaperone is a plant ecommerce Website.

## Run Locally

To clone a project using any terminal, follow these steps:

```bash
  git clone https://github.com/aravindcheekati/chaperone
```

Go to the project directory and Install dependencies

```bash
  npm install
```

Start the server using following command

```bash
  npm run dev
```


## API Reference

##### In this application, we employed dummy JSON data, located in "src/data/products.json", to simulate product information. This data was used to facilitate development and testing processes without reliance on a live data source.

## Features

- Products List
- Profile and Cart Icons in Navbar
- Search Products
- Pagination
- View Product Details
- Add Product to Cart
- View Cart
- Remove Product from Cart



### Products List

Developed reusable, responsive product card components, seamlessly integrated and rendered on the homepage to enhance user experience and maintain design consistency.

### Profile and Cart Icons in Navbar

I have developed a reusable Navbar component, incorporating both a profile section and a cart section for enhanced user accessibility within the navigation bar.

### Search Products

Implemented dynamic search functionality in the product catalog. When the user enters a query in the search input field, products matching the input string are automatically displayed in real-time. If no input is provided, the system defaults to displaying all available products.

### Pagination

Implemented pagination to improve website performance and reduce latency. Initially, the homepage displays 12 products, with an option for users to load an additional 12 products by clicking the 'View More' button. Once all products are displayed, the 'View More' button is automatically hidden.

### View product details

Upon clicking the "View Product" button, the user will be redirected to a new product page. On this page, the user will see a thank-you message displaying the name of the selected product.

### Add to Cart

When the user clicks the "Add to Cart" button, a popup modal is triggered, displaying the details of the selected product. Within this modal, the user will find a "Confirm" button. Upon clicking the "Confirm" button, the product will be added to the shopping cart.

### View Cart

When the user clicks the cart button in the navbar, the cart section will become visible. In this section, the user will see a list of the selected products in their cart.

### Remove product from Cart

"Implemented a 'Remove Product' feature in the cart section. When the user clicks the 'Remove' button, the selected product is efficiently removed from the cart."

## Tech Stack

**Client:** React, ContextAPI, ReactHooks, CSS

**Server:** Node

