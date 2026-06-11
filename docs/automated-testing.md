# Automated Testing

This project includes automated tests for the core catalogue data, product cards, and request fitting form.

## Testing Tools

The project uses:

- Vitest
- React Testing Library
- Jest DOM matchers
- User Event

## Test Commands

Run all automated tests:

```bash
npm run test:run
```

Run the production build check:

```bash
npm run build
```

## Current Automated Tests

### Dress Data Unit Test

File:

```text
src/data/dresses.test.ts
```

This test checks that:

- The dress data contains at least one dress
- Each dress has required fields
- Measurements are stored as numbers, not strings
- Measurement values are positive numbers

This protects the data decision that measurements should be stored as numbers and displayed with `cm` in the UI.

### Dress Card Component Test

File:

```text
src/components/ui/DressCard.test.tsx
```

This test checks that:

- Dress name displays correctly
- Size and measurements display correctly
- Measurements display with `cm`
- The View Details link points to the correct product detail page

### Request Fitting Form Test

File:

```text
src/pages/RequestFittingPage.test.tsx
```

This test checks that:

- The request fitting form displays correctly
- The form includes name, email, phone, and message fields
- Invalid phone text is rejected
- Valid phone number input shows the demo success message

## Why These Tests Were Added

The first automated tests were added after the core user flow was working:

```text
Home → Shop → Product Detail → Request a Fitting
```

This creates a stable checkpoint before visual design polish and real dress images are added.

The tests focus on user-visible behaviour and important data rules, rather than fragile visual styling details.

## Future Testing Improvements

Possible future improvements:

- Add more form validation tests
- Add route tests for missing dress IDs
- Add Playwright end-to-end tests for the full user journey
- Add accessibility checks before final deployment
