# Automated Testing

This project includes automated tests for the core catalogue data, product cards, product detail page, shop page, homepage structure, image gallery interaction, and request fitting form.

## Testing Tools

The project uses:

- Vitest
- React Testing Library
- Jest DOM matchers
- User Event

## Test Commands

Run all automated tests:

npm run test:run

Run the production build check:

npm run build

## Current Automated Tests

### Dress Data Unit Test

File: src/data/dresses.test.ts

This test checks that:

- The dress data contains at least one dress
- Each dress has required fields
- Measurements are stored as numbers, not strings
- Measurement values are positive numbers

This protects the data decision that measurements should be stored as numbers and displayed with cm in the UI.

### Dress Card Component Test

File: src/components/ui/DressCard.test.tsx

This test checks that:

- Dress name displays correctly
- Size and measurements display correctly
- Measurements display with cm
- The View Details link points to the correct product detail page

### Shop Page Catalogue Test

File: src/pages/ShopPage.test.tsx

This test checks that:

- Dresses from the catalogue data display on the shop page
- Each dress has a View Details link
- The first dress links to the correct product detail page

### Product Detail Page Test

File: src/pages/ProductDetailPage.test.tsx

This test checks that:

- The selected dress details display correctly
- Size and measurements display with cm
- The Notes to Tailor PDF message appears
- The Request a Fitting link points to the correct fitting request page
- The main product image updates when a thumbnail is clicked
- A missing dress ID shows the Dress not found message

### Request Fitting Form Test

File: src/pages/RequestFittingPage.test.tsx

This test checks that:

- The request fitting form displays correctly
- The form includes name, email, phone, and message fields
- Invalid phone text is rejected
- Valid phone number input shows the demo success message
- A missing dress ID shows the Dress not found message

### Home Page Smoke Test

File: src/pages/HomePage.test.tsx

This test checks that:

- The homepage renders the main sections
- Header, Hero, Featured Dresses, About, How It Works, Contact CTA, and Footer are present
- Featured Dresses appears before About
- Contact CTA appears before Footer

## Why These Tests Were Added

The first automated tests were added after the core user flow was working:

Home → Shop → Product Detail → Request a Fitting

This creates a stable checkpoint before visual design polish and real dress images are added.

The tests focus on user-visible behaviour, routing, form validation, image gallery interaction, and important data rules, rather than fragile visual styling details.

## Future Testing Improvements

Possible future improvements:

- Add Playwright end-to-end tests for the full user journey
- Add accessibility checks before final deployment
- Add more form validation tests if the form becomes connected to a real backend
- Add more image tests after real dress images are added
