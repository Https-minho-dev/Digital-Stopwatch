# Pro Chrono - Digital Stopwatch

A modern, professional digital stopwatch application with a sleek dark-themed interface. Built with vanilla JavaScript, HTML, and CSS, featuring precise time tracking with centisecond accuracy and lap recording functionality.

## Features

- ⏱️ **Precise Timing**: Accurate stopwatch with centisecond (0.01s) precision
- 🎯 **Lap Recording**: Track multiple lap times during a session
- 🎨 **Modern UI**: Beautiful glassmorphism design with dark theme
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- ⚡ **Smooth Animations**: Polished button interactions and transitions
- 🎛️ **Intuitive Controls**: Simple and clear button layout

## Technologies Used

- **HTML5**: Semantic markup structure
- **CSS3**: Modern styling with CSS variables, flexbox, and glassmorphism effects
- **Vanilla JavaScript**: No dependencies, pure JavaScript implementation

## File Structure

```
Digittal_Stopwatch/
│
├── index.html      # Main HTML structure
├── style.css       # Styling and layout
├── script.js       # Stopwatch logic and functionality
└── README.md       # Project documentation
```

## Getting Started

### Installation

No installation required! Simply open the `index.html` file in any modern web browser.

1. Clone or download this repository
2. Open `index.html` in your preferred web browser
3. Start using the stopwatch!

### Usage

1. **Start**: Click the "Start" button to begin timing
2. **Pause**: Click "Pause" to temporarily stop the timer
3. **Lap**: While running, click "Lap" to record the current time without stopping
4. **Reset**: Click "Reset" to clear the timer and all recorded laps

## Features in Detail

### Time Display
- Format: `MM:SS.CC` (Minutes:Seconds.Centiseconds)
- Large, easy-to-read display with accent color highlighting
- Updates every 10 milliseconds for smooth animation

### Lap Recording
- Record unlimited lap times during a session
- Laps are displayed in reverse chronological order (newest first)
- Scrollable container for long lap lists

### Button States
- Buttons are intelligently enabled/disabled based on stopwatch state
- Visual feedback with hover effects and disabled states
- Color-coded buttons for different actions:
  - 🟢 **Start**: Green
  - 🔵 **Pause**: Blue
  - ⚫ **Lap**: Grey
  - 🔴 **Reset**: Red

## Browser Compatibility

Works on all modern browsers that support:
- ES6 JavaScript
- CSS Grid and Flexbox
- CSS Custom Properties (Variables)
- Backdrop Filter (for glassmorphism effect)

## Customization

The application uses CSS custom properties for easy theming. You can modify colors in the `:root` section of `style.css`:

```css
:root {
    --bg: #0f172a;           /* Background color */
    --card: #1e293b;          /* Card/container color */
    --accent: #38bdf8;        /* Accent color (display text) */
    --text: #f1f5f9;          /* Primary text color */
    --danger: #f43f5e;        /* Reset button color */
    --success: #10b981;       /* Start button color */
}
```

## License

This project is open source and available for personal and educational use.

## Credits

- API Reference: [WorldTimeAPI](http://worldtimeapi.org)

---

**Enjoy your precise time tracking!** ⏱️

