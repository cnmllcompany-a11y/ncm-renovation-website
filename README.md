# CNM Renovation - Professional Website

Professional responsive website for CNM Renovation - Home renovation services in Texas. Complete bilingual support (Spanish/English) with modern design and functionality.

## 🚀 **Live Repository**

This is the main repository for the CNM Renovation website, including all implemented features and ready for production deployment.

## 🌟 Key Features

- **🌐 Bilingual**: Complete support for Spanish and English with instant switching
- **📱 Responsive Design**: Optimized for mobile devices and desktop
- **🌙 Dark Theme**: Support for dark and light mode
- **🧭 Intuitive Navigation**: Easy-to-use navigation menu
- **📝 Functional Forms**: Contact forms with validation
- **🖼️ Interactive Portfolio**: Project gallery with real renovation images
- **💾 Persistence**: Selected language is saved between sessions
- **⚡ Instant Change**: Real-time translation without page reload

## 📄 Pages Included

1. **index.html** - Main page with company overview
2. **servicios.html** - Services details and offerings
3. **portfolio.html** - Project gallery with real renovation photos
4. **contact.html** - Contact form and company information

## 🛠️ Technologies Used

- **HTML5**: Semantic structure
- **Tailwind CSS**: Modern CSS framework
- **JavaScript**: Interactive functionality and language system
- **Google Fonts**: Work Sans typography
- **Material Symbols**: Icon system
- **LocalStorage**: Language preference persistence
- **Cloudinary**: Image hosting and optimization

## 🚀 How to Use

1. **Open the site**: Open `index.html` in your web browser
2. **Change language**: Click the 🌐 button in the top right corner
3. **Navigate**: Use the navigation menu to explore pages
4. **Contact**: Use the contact form to send inquiries
5. **Explore**: Browse the portfolio with real project images

## 📧 Email System

The website includes an email sending system using Resend API. Contact forms automatically send messages to `ncmllcompany@gmail.com`.

### Server options:

1. **Node.js Server (Recommended)**:
   ```bash
   npm install
   npm start
   ```

2. **PHP Server**:
   - Ensure PHP is installed
   - The `send-email.php` file handles sending

3. **Direct from browser**:
   - Works without additional server
   - Uses Resend API directly

## 🌐 Language System

The site includes a complete translation system:

- **Instant switching** between Spanish and English
- **Persistence** of selected language
- **Complete translation** of all elements
- **Translated forms** with placeholders in both languages
- **Translated success messages**

## 📁 Project Structure

```
ncm-renovation-website/
├── index.html          # Main page
├── servicios.html      # Services page
├── portfolio.html      # Project gallery
├── contact.html        # Contact form
├── language.js         # Translation system
├── send-email.js       # Email sending system
├── send-email.php      # PHP server for emails
├── server.js           # Node.js server
├── package.json        # Node.js dependencies
├── .htaccess          # Apache configuration
├── .gitignore         # Git ignore rules
└── README.md          # Project documentation
```

## 🎨 Customization

To customize the website:

- **Colors**: Modify Tailwind CSS configuration in each file
- **Images**: Replace image URLs with your own
- **Content**: Update text directly in HTML files
- **Translations**: Modify `language.js` file to add new languages
- **Projects**: Add more projects in `portfolio.html`

## 📞 Contact Information

- **Phone**: 7372355952
- **Email**: ncmllcompany@gmail.com
- **Hours**: Mon - Sat: 8 AM - 9 PM
- **Address**: 123 Main St, Austin, TX 78701
