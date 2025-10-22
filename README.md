# Juan Daniel Sanchez Ramirez - CV

A modern, responsive curriculum vitae built with Next.js 15, TypeScript, and Tailwind CSS. This CV showcases professional experience, technical skills, and achievements in an elegant, print-friendly format.

## Features

- **Modern Design**: Clean, professional layout with responsive design
- **Print Optimized**: Perfect for printing or saving as PDF
- **Performance Focused**: Built with Next.js 15 and optimized for speed
- **Accessibility**: Screen reader friendly with proper semantic HTML
- **SEO Optimized**: Comprehensive metadata and structured data
- **Interactive Elements**: Print button and smooth interactions

## Technologies Used

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Images**: Cloudinary for optimized image delivery
- **Fonts**: Geist Sans and Geist Mono from Vercel

## Key Sections

- **Professional Summary**: Enhanced with key metrics and achievements
- **Key Achievements**: Highlighted accomplishments with quantifiable results
- **Featured Projects**: Showcase of technical projects and technologies used
- **Work Experience**: Detailed job history with achievements
- **Education**: Academic background and certifications
- **Technical Skills**: Comprehensive skill categorization
- **Soft Skills**: Leadership and communication abilities

## Getting Started

1. **Install Dependencies**:

   ```bash
   npm install
   ```

2. **Run Development Server**:

   ```bash
   npm run dev
   ```

3. **Open Browser**: Navigate to [http://localhost:3000](http://localhost:3000)

4. **Print/Save**: Use the print button or browser print function (Ctrl+P) to save as PDF

## Customization

### Personal Information

Edit `src/app/page.tsx` to update:

- Personal details (name, contact info)
- Professional summary
- Work experience
- Education
- Skills and achievements

### Styling

- Colors: Update the `#018E94` color values throughout components
- Layout: Modify Tailwind classes in components
- Print styles: Edit `src/app/globals.css` print media queries

### Content Structure

- Add new sections by creating components in `src/components/`
- Update the main layout in `src/app/page.tsx`
- Modify metadata in `src/app/layout.tsx`

## Deployment

This CV is optimized for deployment on Vercel:

```bash
npm run build
npm run start
```

Or deploy directly to Vercel:

```bash
vercel --prod
```

## Print/PDF Tips

- Use Chrome or Edge for best PDF generation
- Select "Save as PDF" in print dialog
- Ensure "Background graphics" is enabled for proper styling
- Recommended settings: A4 size, portrait orientation

## License

This project is for personal use. Feel free to use as a template for your own CV.
