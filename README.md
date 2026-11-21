# Bite & Bliss

A responsive restaurant landing page for **Bite & Bliss**, a food delivery and dine-in experience featuring popular dishes, categories, customer reviews, special offers, and newsletter signup.

## Features

- Responsive desktop and mobile navigation
- Hero section with restaurant highlights
- Food category shortcuts
- Dynamic menu rendered with JavaScript
- Menu filtering by category
- Add-to-cart interaction with toast notifications
- Customer reviews and special offer sections
- Newsletter email validation
- Smooth navigation and modern responsive styling

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Google Fonts
- Unsplash images

## Project Structure

```text
.
├── index.html
├── style.css
├── script.js
└── README.md
```

## Getting Started

No build tools or dependencies are required.

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Open the project folder:

   ```bash
   cd devops21Nov
   ```

3. Open `index.html` in your browser.

For the best development experience, use the Live Server extension in VS Code:

1. Open the project in VS Code.
2. Right-click `index.html`.
3. Select **Open with Live Server**.

## Available Menu Categories

- Burgers
- Pizza
- Pasta
- Desserts
- Drinks

## JavaScript Functionality

The menu is generated from a JavaScript array in `script.js`. Users can:

- Filter dishes by category
- Add dishes to an in-memory cart
- View an updated cart count and total in the browser console
- Receive temporary cart confirmation messages
- Subscribe through a validated newsletter form
- Use the mobile navigation menu

## Customization

- Update the page content in `index.html`.
- Change colors and layout in `style.css`.
- Add or modify menu items in the `foodItems` array in `script.js`.
- Replace Unsplash image URLs with local or hosted images.

## License

This project is currently provided without a specific license. Add a license if you plan to distribute it publicly.
