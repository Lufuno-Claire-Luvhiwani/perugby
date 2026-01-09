# Favicon White Background

To add a white background to the favicon:

**Option 1: Edit the logo.png file**
- Open `/public/logo.png` in an image editor
- Add a white background layer behind the logo
- Save the file

**Option 2: Create a separate favicon file**
- Create a new image file (e.g., `favicon.png`) with white background
- Update `public/index.html` to use: `<link rel="icon" type="image/png" href="/favicon.png" />`

**Option 3: Use an online tool**
- Use a tool like https://realfavicongenerator.net/ to generate favicons with white backgrounds
- Place the generated files in the `/public` folder

The current favicon uses `/logo.png`. To have a white background, the image file itself needs to include it.


