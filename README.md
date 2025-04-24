# Personal Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. This portfolio showcases your projects, skills, and provides a way for visitors to contact you.

## Features

- Responsive design that works on all devices
- Dark/Light mode toggle
- Smooth scrolling navigation
- Dynamic project display
- Contact form with validation
- Mobile-friendly navigation
- Modern UI with animations

## Project Structure

```
myportfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Customize the content to match your personal information

## Customization

### Personal Information
- Update your name, title, and description in the `index.html` file
- Add your profile picture by replacing the placeholder image
- Update the skills list in the About section

### Projects
Edit the `projects` array in `script.js` to add your own projects:
```javascript
const projects = [
    {
        title: "Your Project Title",
        description: "Project description",
        image: "path/to/image.jpg",
        techStack: ["Technology 1", "Technology 2"],
        githubLink: "https://github.com/yourusername/project",
        demoLink: "https://project-demo.com"
    }
];
```

### Contact Form
The contact form is set up with basic validation. To make it functional:
1. Add your email service provider's form handling code
2. Update the form submission logic in `script.js`

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, CSS Variables)
- JavaScript (ES6+)
- Font Awesome Icons

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Contributing

Feel free to submit issues and enhancement requests! 