**Pages \& Features**

Frontend (React + Tailwind CSS)



Home Page



Hero section with a carousel of bangles



"Shop by Occasion" categories (Wedding, Festive, Daily Wear)



Featured products grid



Shop Page



Filters (color, size, material, price range)



Search bar



Product Details



Large images



Price, description, stock status



“Add to Cart” button



Cart \& Checkout



View products in cart



Remove/update quantity



Proceed to payment



Order Confirmation



Show order details after payment



**Backend (Node.js + Express)**



Product API (CRUD)



Orders API



User Authentication (JWT-based)



Payment integration (Razorpay for India)



Image storage (Cloudinary)



Database (MongoDB Atlas)



**Collections**: products, users, orders, categories





**Tech Stack**

**Frontend: React + Tailwind CSS + Axios**



**Backend: Node.js + Express**



**Database: MongoDB Atlas**



**Payments: Razorpay**



**Hosting:**



**Frontend → Vercel**



**Backend → Render**



**Database → MongoDB Atlas (free tier)**





**banglebazaar/**

**│**

**├── backend/**

**│   ├── config/          # DB connection, Cloudinary config, Razorpay config**

**│   ├── models/          # Product.js, User.js, Order.js**

**│   ├── routes/          # productRoutes.js, userRoutes.js, orderRoutes.js**

**│   ├── controllers/     # productController.js, userController.js, orderController.js**

**│   ├── middleware/      # authMiddleware.js, errorMiddleware.js**

**│   ├── utils/           # helper functions (e.g., generateToken.js)**

**│   ├── server.js**

**│**

**├── frontend/**

**│   ├── public/          # Static images, favicon, manifest.json**

**│   ├── src/**

**│   │   ├── assets/      # Images, icons, styles**

**│   │   ├── components/  # Navbar, Footer, ProductCard, Filters, SEO (Helmet wrapper)**

**│   │   ├── pages/       # Home, Shop, Product, Cart, Checkout**

**│   │   ├── context/     # CartContext, AuthContext**

**│   │   ├── hooks/       # Custom hooks like useCart, useAuth**

**│   │   ├── services/    # API calls (axios setup)**

**│   │   ├── App.js**

**│   │   ├── main.jsx     # (Vite uses main.jsx instead of index.js)**

**│**

**├── .env                 # Environment variables (DB\_URI, CLOUDINARY\_KEY, RAZORPAY\_KEY)**

**├── package.json**





**Creative UI Ideas**

Color palette: Deep maroon + gold accents (luxury look)



Font: Playfair Display (titles) + Open Sans (body)



Product cards: Rounded corners, hover zoom effect



Animated hero carousel showing bangles on models’ hands



"Shop Now" buttons with smooth hover animations





**Payment Integration Flow (Razorpay)**



Frontend: User clicks “Pay” → Call backend API /create-order



Backend: Use Razorpay SDK to create an order → return order details



Frontend: Open Razorpay payment popup



Backend: Verify signature on payment success → Save order





Frontend (React + Vite)

    ↓ (Axios / Fetch)

Backend (Node.js + Express)

    ↓ (Razorpay Node SDK)

Razorpay Payment Gateway

    ↓

Customer Payment

