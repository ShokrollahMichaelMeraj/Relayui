# RELAY Logo Assets

This folder contains all logo variations for the RELAY brand.

## Files

- `relay-logo.svg` - Master vector file (use this everywhere possible)
- `relay-logo-512.png` - General purpose PNG (512x512)
- `relay-logo-180.png` - Apple touch icon (180x180)
- `relay-logo-32.png` - Favicon (32x32)
- `relay-og-image.png` - Social media share image (1200x630)

## Usage

### In React Components
```tsx
import logo from '/assets/logo/relay-logo.svg';

<img src={logo} alt="RELAY" />
```

### In HTML
```html
<!-- Favicon -->
<link rel="icon" type="image/png" sizes="32x32" href="/assets/logo/relay-logo-32.png">

<!-- Apple Touch Icon -->
<link rel="apple-touch-icon" sizes="180x180" href="/assets/logo/relay-logo-180.png">

<!-- Open Graph -->
<meta property="og:image" content="https://yourdomain.com/assets/logo/relay-og-image.png">
```

## To Upload Your Logo Files

You can provide your logo files by:
1. Pasting the SVG code directly in chat
2. Providing a URL to the image files
3. Uploading the image file directly (if supported by your interface)

Once you provide the logo, I'll generate all the required sizes automatically.
