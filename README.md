# Option One Solar - React Sales Funnel

A modern, conversion-optimized solar sales funnel built with React, featuring proper Option One Solar branding and proven marketing strategies.

## 🚀 Features

- **Modern React Stack**: Built with React 18, React Router, and modern hooks
- **Proper Branding**: Uses actual Option One Solar colors, fonts, and messaging
- **Conversion Optimized**: Based on proven solar marketing principles
- **Mobile Responsive**: Works perfectly on all devices
- **Analytics Ready**: Pre-configured for Google Analytics and Facebook Pixel
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML
- **Form Validation**: Client-side and server-side validation
- **Progress Tracking**: Visual progress indicators to reduce abandonment
- **Social Proof**: Customer testimonials and trust signals

## 🎯 Funnel Flow

1. **Landing Page**: Hero section with quick quote form
2. **Property Qualification**: Property details and energy usage
3. **Savings Calculator**: Personalized savings projections
4. **Contact Form**: Lead capture with contact preferences
5. **Thank You Page**: Conversion confirmation and next steps

## 📊 Key Marketing Elements

- **Urgency**: Federal tax credit expiration messaging
- **Social Proof**: Customer testimonials and ratings
- **Authority**: 50+ years in business, licensing info
- **Value Prop**: Clear savings projections and benefits
- **Risk Reduction**: Free quotes, no hidden fees, warranties

## 🛠️ Setup Instructions

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone/Download the project**
   ```bash
   # Navigate to the project directory
   cd react-solar-funnel
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## ⚙️ Configuration

### Analytics Setup

1. **Google Analytics**
   - Replace `GA_MEASUREMENT_ID` in `public/index.html` with your GA4 measurement ID
   - Update tracking code in `App.js` if needed

2. **Facebook Pixel**
   - Replace `YOUR_PIXEL_ID` in `public/index.html` with your Facebook Pixel ID

3. **Lead Submission**
   - Update the API endpoint in `ContactForm.js` to point to your CRM/database
   - Configure server-side lead processing

### Customization

#### Brand Colors
Update colors in `src/index.css`:
```css
:root {
  --primary-white: rgb(255, 255, 255);
  --primary-dark: rgb(9, 9, 11);
  --blue-accent: rgb(18, 126, 241);
  /* Add your custom colors */
}
```

#### Content Updates
- Landing page copy: `src/components/LandingPage.js`
- Form fields: `src/components/QualificationForm.js`
- Calculations: `src/components/SavingsCalculator.js`
- Contact info: `src/components/Header.js` and `Footer.js`

#### Calculations
Update solar calculations in `SavingsCalculator.js`:
- Cost per watt
- Average electricity rates
- System efficiency factors
- Incentive amounts

## 🔧 Deployment Options

### Option 1: Netlify (Recommended)
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Configure custom domain
4. Set up form handling for lead capture

### Option 2: Vercel
1. Connect your repository to Vercel
2. Configure build settings
3. Deploy automatically on commits

### Option 3: Traditional Hosting
1. Build the project: `npm run build`
2. Upload `build` folder contents to your web server
3. Configure server to handle React Router (SPA routing)

## 📱 Form Integration

### Lead Capture Options

1. **Direct CRM Integration**
   ```javascript
   // In ContactForm.js
   const response = await fetch('/api/submit-lead', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(leadData)
   });
   ```

2. **Third-Party Services**
   - Zapier webhooks
   - HubSpot forms API
   - Salesforce Web-to-Lead
   - Mailchimp API

3. **Email Notifications**
   - EmailJS for client-side email sending
   - SendGrid API integration
   - SMTP server integration

## 🎨 Customization Guide

### Adding New Form Fields

1. Update the lead data state in `App.js`
2. Add form fields in the appropriate component
3. Update validation in the form component
4. Include in final submission data

### Modifying Calculations

The savings calculator uses these key factors:
- Monthly electric bill amount
- Local electricity rates ($0.25/kWh average)
- System efficiency (85% offset)
- Cost per watt ($3.50 installed)
- Federal tax credit (30%)

Update these values in `SavingsCalculator.js` based on your local market.

### A/B Testing

The funnel is designed for easy A/B testing:
- Swap out headline components
- Test different hero images
- Modify call-to-action buttons
- Adjust form field order

## 📈 Optimization Tips

1. **Page Speed**
   - Images are optimized and lazy-loaded
   - CSS is minimized
   - JavaScript is code-split

2. **Conversion Rate**
   - Progress indicators reduce abandonment
   - Social proof builds trust
   - Clear value propositions
   - Mobile-first design

3. **SEO**
   - Semantic HTML structure
   - Meta tags and schema markup
   - Fast loading times
   - Mobile responsiveness

## 🔒 Security Considerations

- Form validation on both client and server
- HTTPS required for production
- Sanitize all user inputs
- Implement rate limiting
- Use CORS headers appropriately

## 📞 Support

For technical support or customization needs:
- Email: support@yourcompany.com
- Documentation: Check comments in code files
- Issues: Create GitHub issues for bugs

## 📄 License

This project is proprietary software for Option One Solar. Unauthorized distribution is prohibited.

---

**Built with ⚡ by Option One Solar Marketing Team**