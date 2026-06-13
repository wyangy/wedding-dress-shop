# Design Polish Plan

The core functionality of the wedding dress catalogue is now working and tested.

The next stage is visual design polish and image preparation.

## Current Status

Completed:

- Core routes are created
- Main user flow works
- Cart and checkout are removed
- Request fitting form works as a front-end demo
- Automated tests are added
- Production build passes

Main user flow:

Home → Shop → Product Detail → Request a Fitting

## Design Goals

The visual direction should feel:

- Elegant
- Bridal
- Soft
- Clean
- Boutique-like
- Easy to read
- Not over-decorated

The design should support the dresses, not distract from them.

## Pages to Polish

### Home Page

Improve:

- Hero section spacing
- Featured Dresses section
- About section
- How It Works section
- Contact CTA

### Shop Page

Improve:

- Page heading
- Product grid spacing
- Product card alignment
- Mobile layout

### Product Detail Page

Improve:

- Image gallery layout
- Measurement section
- Request a Fitting button
- Mobile layout

### Request Fitting Page

Improve:

- Selected dress summary
- Form spacing
- Success and error messages
- Mobile layout

## Image Plan

Each dress should eventually include:

- Story hero image
- Front view
- Back view
- Detail image
- Flaw or condition image if needed

Placeholder images can remain during layout work, but final dress images should be added before deployment.

## Testing During Design Polish

After major design changes, run:

npm run test:run

npm run build

Also manually check:

- Home page
- Shop page
- Product detail page
- Request fitting page
- Mobile layout

## Next Steps

1. Polish the Home page visual layout
2. Polish the Shop page and product cards
3. Polish the Product Detail page image gallery
4. Polish the Request Fitting page
5. Add real dress images
6. Run tests and build before deployment
