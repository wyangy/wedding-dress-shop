# Automated Testing

This project uses automated testing to protect the catalogue data, React components, page behaviour, routing, form validation, navigation, and the main customer journey.

## Testing Tools

The project uses:

- Vitest
- React Testing Library
- Jest DOM matchers
- User Event
- Playwright

## Test Types

### Vitest and React Testing Library

These tests check individual data rules, components, and pages in a simulated browser environment.

They are stored inside the `src` folder.

### Playwright End-to-End Tests

These tests open the website in real browser engines and follow complete user journeys.

They are stored inside the `e2e` folder.

Playwright currently runs tests in:

- Chromium
- Firefox
- WebKit
- Mobile Safari using an iPhone 13 device profile

## Test Commands

Run the Vitest tests:

npm run test:run

Run the Playwright end-to-end tests:

npm run test:e2e

Run both Vitest and Playwright:

npm run test:all

Run the production build check:

npm run build

## Vitest Tests

### Dress Data Unit Test

File: `src/data/dresses.test.ts`

This test checks that:

- The dress data contains at least one dress
- Each dress has the required fields
- Measurements are stored as numbers rather than strings
- Measurement values are positive numbers

This protects the decision to store measurements as numbers and add `cm` only when displaying them in the interface.

### Dress Card Component Test

File: `src/components/ui/DressCard.test.tsx`

This test checks that:

- The dress image appears
- The dress name appears
- The dress size appears
- The View Details link points to the correct product detail page

### Shop Page Catalogue Test

File: `src/pages/ShopPage.test.tsx`

This test checks that:

- Dresses from the catalogue data appear on the Shop page
- Each dress has a View Details link
- Dress cards link to the correct product detail pages

### Product Detail Page Test

File: `src/pages/ProductDetailPage.test.tsx`

This test checks that:

- The selected dress details appear
- Size and measurements display with `cm`
- The Notes to Tailor PDF message appears
- The Request a Fitting link points to the correct fitting page
- Clicking a thumbnail changes the main product image
- An unknown dress ID shows the Dress not found message

### Request Fitting Form Test

File: `src/pages/RequestFittingPage.test.tsx`

This test checks that:

- The fitting request form appears
- Name, email, phone, and message fields are present
- Invalid phone text is rejected
- Valid form input shows the demo success message
- An unknown dress ID shows the Dress not found message

### Home Page Smoke Test

File: `src/pages/HomePage.test.tsx`

This test checks that:

- The main homepage sections render
- Header, Hero, Featured Dresses, About, How It Works, Contact CTA, and Footer are present
- Featured Dresses appears before About
- Contact CTA appears before Footer

## Playwright End-to-End Tests

### Fitting Request Journey

File: `e2e/fitting-flow.spec.ts`

This test follows the main customer journey:

Home → Shop → Product Detail → Request a Fitting → Submit Request

It checks that:

- The homepage loads
- The Shop page can be opened
- A dress detail page can be opened
- The fitting request page can be reached
- A valid form can be completed
- The demo success message appears
- Invalid phone input is rejected

The same journey is tested across desktop browser engines and a mobile Safari device profile.

### Header Navigation

File: `e2e/header-navigation.spec.ts`

This test checks that:

- Shop opens the Shop page
- The logo returns to the homepage
- How It Works scrolls to the correct section
- Contact scrolls to the correct section

### Footer Navigation

File: `e2e/footer-navigation.spec.ts`

This test checks that:

- Shop opens the Shop page
- About scrolls to the correct section
- How It Works scrolls to the correct section
- Contact scrolls to the correct section

## Test Configuration

File: `vitest.config.ts`

Vitest is configured to search for tests only inside `src`. This prevents it from trying to run Playwright files.

File: `playwright.config.ts`

Playwright is configured to:

- Start the Vite development server automatically
- Use the local website as its base URL
- Test Chromium, Firefox, WebKit, and Mobile Safari
- Reuse an existing development server when available
- Produce an HTML test report

## Why These Tests Were Added

Automated tests were introduced after the basic structure and main functionality were working.

The stable customer journey was:

Home → Shop → Product Detail → Request a Fitting

Vitest protects smaller pieces of the application, while Playwright checks that the complete website journey works in real browser engines.

The tests focus on important behaviour rather than fragile styling details. Visual quality, image cropping, spacing, and responsive design are currently checked manually.

## Manual Responsive Checks

The interface should also be inspected manually at:

- Mobile width
- Tablet width
- Desktop width
- Wide desktop width

Manual checks are still necessary for issues such as:

- Text covering an image
- Unattractive image cropping
- Poor spacing
- Visual imbalance
- Design differences from the reference image

## Future Testing Improvements

Possible future improvements include:

- Playwright visual screenshot comparison tests after the design is stable
- Automated accessibility checks
- Tests against the deployed Vercel website
- Additional tests if the fitting form is connected to a real backend
- Testing on a physical mobile device before final submission
