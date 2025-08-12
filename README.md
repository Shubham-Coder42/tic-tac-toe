# Tic-Tac-Toe Game 🎮

A modern, interactive tic-tac-toe game built with React and Vite. Play against a friend in this classic strategy game with a sleek, responsive design.

![Game Screenshot](https://via.placeholder.com/800x400/1a1a2e/eee?text=Tic-Tac-Toe+Game)

## 🚀 Live Demo

Play the game live at: [https://shubham-coder42.github.io/tic-tac-toe](https://shubham-coder42.github.io/tic-tac-toe)

## ✨ Features

- **Interactive Gameplay**: Click to place X's and O's on the board
- **Player Customization**: Edit player names during gameplay
- **Turn Indicators**: Visual highlighting shows whose turn it is
- **Win Detection**: Automatically detects winning combinations
- **Draw Detection**: Identifies when the game ends in a tie
- **Game History**: View the complete move log
- **Restart Functionality**: Reset the game at any time
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Modern UI**: Clean, attractive interface with smooth animations

## 🛠️ Tech Stack

- **Frontend**: React 19 with Hooks
- **Build Tool**: Vite
- **Styling**: CSS3 with modern features
- **Deployment**: GitHub Pages
- **Linting**: ESLint with React-specific rules

## 📁 Project Structure

```
tic-tac-toe/
├── public/
│   ├── bg-pattern.png
│   └── game-logo.png
├── src/
│   ├── components/
│   │   ├── GameBoard.jsx
│   │   ├── GameOver.jsx
│   │   ├── Log.jsx
│   │   ├── PlayersInfo.jsx
│   │   └── Winning_Combinations.js
│   ├── App.jsx
│   ├── index.css
│   └── index.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 How to Play

1. **Start the Game**: The game begins with Player X (default: "Player 1")
2. **Take Turns**: Click any empty square to place your symbol
3. **Win the Game**: Get 3 of your symbols in a row (horizontally, vertically, or diagonally)
4. **Customize Names**: Click on player names to edit them during gameplay
5. **View History**: Check the move log on the right side of the screen
6. **Restart**: Click "Rematch" to start a new game

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shubham-coder42/tic-tac-toe.git
   cd tic-tac-toe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to play the game

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🎨 Game Components

### GameBoard.jsx
- Renders the 3x3 game grid
- Handles square click events
- Displays X and O symbols

### PlayersInfo.jsx
- Shows player names and symbols
- Allows name editing
- Highlights active player

### GameOver.jsx
- Displays winner or draw message
- Provides restart functionality

### Log.jsx
- Shows chronological move history
- Displays player, position, and turn number

### Winning_Combinations.js
- Defines all possible winning combinations
- Used for win detection logic

## 🔧 Development

### Adding New Features

The game is built with modular React components, making it easy to extend:

1. **New Game Modes**: Add difficulty levels or AI opponent
2. **Score Tracking**: Implement persistent score keeping
3. **Sound Effects**: Add audio feedback for moves and wins
4. **Themes**: Create multiple visual themes
5. **Animations**: Enhance with CSS animations

### Code Architecture

- **State Management**: React hooks (useState) for game state
- **Game Logic**: Pure functions for game state calculations
- **Component Structure**: Modular, reusable components
- **Styling**: CSS with BEM-like naming conventions

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   npm run dev -- --port 3000
   ```

2. **Build failures**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **GitHub Pages deployment issues**
   - Ensure `homepage` field in package.json is correct
   - Check that `gh-pages` branch exists

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [React](https://react.dev/)
- Powered by [Vite](https://vitejs.dev/)
- Deployed on [GitHub Pages](https://pages.github.com/)
- Icons and design inspiration from modern web trends

## 📞 Contact

- **GitHub**: [@shubham-coder42](https://github.com/shubham-coder42)
- **Project Link**: [https://github.com/shubham-coder42/tic-tac-toe](https://github.com/shubham-coder42/tic-tac-toe)

---

Made with ❤️ by Shubham
