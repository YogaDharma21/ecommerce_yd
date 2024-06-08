# Ecommerce YD (Next JS)

This is the e-commerce website built using Next.js, Tailwind CSS, Shadcn UI, Sanity, and Stripe.

## Prerequisites

- **Node.js**
- **Npm**

## Installation

1. **Clone the repository:**

```
git clone https://github.com/YogaDharma21/ecommerce_yd.git
```

2. **Navigate to the website folder:**

```
cd ecommerce_yd/website
```

3. **Install the dependencies:**

```
npm install --legacy-peer-deps
```

This command is necessary due to a version mismatch between some of the dependencies. The --legacy-peer-deps flag allows npm to install the necessary packages.

## Configuration

1. Create a .env.local file in the website directory and add the following environment variables:

```
NEXT_PUBLIC_STRIPE_KEY=
NEXT_PUBLIC_SANITY_PROJECTID=
```

Replace the placeholders with your actual Sanity project ID, dataset, and Stripe API keys.

## Running the Development Server

1. Start the development server:

```
npm run dev
```

2. Open your web browser and navigate to http://localhost:3000. You should see the e-commerce website running.

## Building for Production

1. Build the production-ready application:

```
npm run build
```

2. Start the production server:

```
npm start
```
