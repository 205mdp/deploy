# To avoid content being hidden under notches IOS 

Now using node v18.12.0 (npm v8.19.2)


workbox generateSW workbox-config.js


```html
// index.html
// Note that this will set the font color of the iOS Status Bar to white.
<head>
  ...
  <meta name="viewport" content="initial-scale=1, viewport-fit=cover, width=device-width"></meta>
  <meta name="apple-mobile-web-app-capable" content="yes"></meta>
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"></meta>
  ...
</head>

```
The hack: Set the minimum height of the document to 100% plus the height of the safe area on top. This will prevent a white bar in the bottom which gets shown since you moved the document “up”.

Also, add safe area padding to all 4 sides to ensure content is never hidden under the notch regardless of the device orientation:

```css
/* styles.css */

html {
  min-height: calc(100% + env(safe-area-inset-top));
  padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
  ...
  background-attachment: fixed;
  background-image: url('/bg.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

```

Bonus Tip
If you have elements with position: fixed (e.g. toast, sidebar, bottom navigation, etc.) add the safe area padding to their containers or themselves, whichever is relevant. You only need to pad the sides where the notch can possibly be positioned.

```css
/* styles.css */

.left-sidebar {
  padding: env(safe-area-inset-top) 0 0 env(safe-area-inset-left);
}
```