# Ecommerce YD (Sanity)

This is the Sanity project for the e-commerce website.

## Prerequisites

- **Node.js**
- **Npm**

## Installation

1. **Clone the repository:**

```
git clone https://github.com/YogaDharma21/ecommerce_yd.git
```

2. **Navigate to the sanity folder:**

```
cd ecommerce_yd/sanity
```

3. **Install the dependencies:**

```
npm install
```

## Configuration

1. Create a .env file in the sanity directory and add the following environment variables:

```
SANITY_STUDIO_PROJECTID=
SANITY_STUDIO_DATASET=
```

Replace the placeholders with your actual Sanity project ID and dataset.

## Running the Sanity Studio

1. Start the Sanity Studio:

```
sanity start
```

2. Open your web browser and navigate to http://localhost:3333. You should see the Sanity Studio running.

## Deploying the Sanity Studio

1. Build the Sanity Studio for production:

```
sanity build
```

2. Deploy the Sanity Studio:

```
sanity deploy
```
