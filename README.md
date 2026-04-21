# UdaanPath (Gov Schemes Frontend)

UdaanPath is a modern web application designed to help users discover, understand, and check eligibility for various government schemes. It provides a user-friendly interface with multilingual support to make government resources more accessible.

## 🚀 Features

- **Scheme Discovery:** Browse and search through a comprehensive list of government schemes.
- **Detailed Information:** View specific details, benefits, and requirements for each scheme.
- **Eligibility Checker:** Easily check if you are eligible for specific schemes based on your profile.
- **Financial Literacy:** Access educational resources to improve your financial knowledge.
- **Important Dates Calendar:** Keep track of deadlines and important dates related to various schemes.
- **Multilingual Support:** Built-in Google Translate integration allowing users to view the site in English, Hindi, Marathi, Tamil, and Telugu.
- **Responsive Design:** A fully responsive interface that works seamlessly on desktop and mobile devices.

## 🛠️ Tech Stack

- **Frontend Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **Backend/Services:** [Appwrite](https://appwrite.io/)
- **Deployment:** GitHub Pages (`gh-pages`)

## 💻 Running Locally

To get a local copy up and running, follow these simple steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm (Node Package Manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/swttbhoomi/gov-schemes-frontend.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd gov-schemes-frontend
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application.

## 🌐 Deployment

This project is configured to be deployed on GitHub Pages. To deploy a new version, run the following command:

```bash
npm run deploy
```

This will automatically build the React application and deploy the `dist` folder to the `gh-pages` branch.

## 📁 Project Structure

- `src/components/`: Reusable React components (Navbar, Footer, etc.)
- `src/pages/`: Main page components (Home, Schemes, Eligibility, etc.)
- `src/data/`: Static data or mock data for schemes
- `src/context/` & `src/hooks/`: React state management and custom hooks
- `src/appwrite.js`: Configuration for Appwrite services

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 
Feel free to check the [issues page](https://github.com/swttbhoomi/gov-schemes-frontend/issues).

---

Built with ❤️ by the UdaanPath Team.
