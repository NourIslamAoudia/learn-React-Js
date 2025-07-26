# 🚀 React Basics - Guide Complet

![React Logo](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

## 📋 Table des Matières

1. [Introduction](#introduction)
2. [Prérequis](#prérequis)
3. [Installation](#installation)
4. [Concepts Fondamentaux](#concepts-fondamentaux)
5. [Components](#components)
6. [Props](#props)
7. [State](#state)
8. [Hooks](#hooks)
9. [Événements](#événements)
10. [Rendu Conditionnel](#rendu-conditionnel)
11. [Listes et Clés](#listes-et-clés)
12. [Formulaires](#formulaires)
13. [Cycle de Vie](#cycle-de-vie)
14. [Projet Exemple](#projet-exemple)
15. [Ressources](#ressources)

## 🎯 Introduction

React est une bibliothèque JavaScript développée par Facebook pour construire des interfaces utilisateur interactives. Elle utilise une approche basée sur les composants et un DOM virtuel pour des performances optimales.

### Pourquoi React ?

- **Composants Réutilisables** : Créez une fois, utilisez partout
- **DOM Virtuel** : Performances optimisées
- **Écosystème Riche** : Large communauté et nombreuses bibliothèques
- **Unidirectionnel** : Flux de données prévisible

## 📚 Prérequis

Avant de commencer avec React, vous devez maîtriser :

- ✅ HTML5 & CSS3
- ✅ JavaScript ES6+ (arrow functions, destructuring, modules)
- ✅ Concepts de programmation (fonctions, objets, tableaux)
- ✅ NPM ou Yarn (gestionnaires de paquets)

## 🛠️ Installation

### Option 1 : Create React App (Recommandé pour débuter)

```bash
# Installer Create React App globalement
npm install -g create-react-app

# Créer un nouveau projet
npx create-react-app mon-app-react

# Naviguer dans le dossier
cd mon-app-react

# Démarrer le serveur de développement
npm start
```

### Option 2 : Vite (Plus rapide et moderne)

```bash
# Créer un projet avec Vite
npm create vite@latest mon-app-react -- --template react

# Installer les dépendances
cd mon-app-react
npm install

# Démarrer le serveur
npm run dev
```

## 🔑 Concepts Fondamentaux

### Architecture React

```
┌─────────────────────────────────────┐
│           Application React          │
├─────────────────────────────────────┤
│         Component Principal          │
│              (App.js)               │
├──────────────┬──────────────────────┤
│  Component A │    Component B       │
├──────┬───────┼──────────┬───────────┤
│ Comp │ Comp  │   Comp   │   Comp    │
│  A1  │  A2   │    B1    │    B2     │
└──────┴───────┴──────────┴───────────┘
```

### JSX (JavaScript XML)

JSX permet d'écrire du HTML dans JavaScript :

```jsx
// JSX
const element = <h1>Bonjour, React!</h1>;

// Équivalent JavaScript
const element = React.createElement('h1', null, 'Bonjour, React!');
```

## 🧩 Components

Les composants sont les blocs de construction de React.

### Composant Fonctionnel (Recommandé)

```jsx
// Composant simple
function Welcome(props) {
  return <h1>Bonjour, {props.name}!</h1>;
}

// Avec arrow function
const Welcome = (props) => {
  return <h1>Bonjour, {props.name}!</h1>;
};

// Utilisation
<Welcome name="Alice" />
```

### Composant de Classe (Legacy)

```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Bonjour, {this.props.name}!</h1>;
  }
}
```

## 📦 Props

Les props permettent de passer des données aux composants.

### Exemple Basic

```jsx
// Parent Component
function App() {
  return (
    <div>
      <UserCard 
        name="Jean Dupont" 
        age={25} 
        email="jean@example.com" 
      />
    </div>
  );
}

// Child Component
function UserCard({ name, age, email }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Âge: {age} ans</p>
      <p>Email: {email}</p>
    </div>
  );
}
```

### Props avec Valeurs par Défaut

```jsx
function Button({ text = "Cliquez ici", color = "blue" }) {
  return (
    <button style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}
```

## 🔄 State

Le state permet de gérer les données dynamiques d'un composant.

### useState Hook

```jsx
import React, { useState } from 'react';

function Counter() {
  // Déclaration du state
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Vous avez cliqué {count} fois</p>
      <button onClick={() => setCount(count + 1)}>
        Incrémenter
      </button>
      <button onClick={() => setCount(count - 1)}>
        Décrémenter
      </button>
      <button onClick={() => setCount(0)}>
        Réinitialiser
      </button>
    </div>
  );
}
```

### State Complexe

```jsx
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: inputValue,
        completed: false
      }]);
      setInputValue('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Ajouter une tâche"
      />
      <button onClick={addTodo}>Ajouter</button>
      
      <ul>
        {todos.map(todo => (
          <li 
            key={todo.id}
            onClick={() => toggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

## 🪝 Hooks

Les Hooks permettent d'utiliser le state et d'autres fonctionnalités dans les composants fonctionnels.

### useEffect

```jsx
import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Effet : démarrer le timer
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // Cleanup : arrêter le timer
    return () => clearInterval(interval);
  }, []); // [] = effet exécuté une seule fois

  return <div>Temps écoulé : {seconds} secondes</div>;
}
```

### useContext

```jsx
// Créer un contexte
const ThemeContext = React.createContext();

// Provider
function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Header />
      <Content />
    </ThemeContext.Provider>
  );
}

// Consumer
function Header() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header className={theme}>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Changer le thème
      </button>
    </header>
  );
}
```

## 🎯 Événements

React utilise des événements synthétiques pour une compatibilité cross-browser.

```jsx
function EventExamples() {
  const handleClick = (e) => {
    console.log('Bouton cliqué!', e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire soumis!');
  };

  const handleChange = (e) => {
    console.log('Valeur:', e.target.value);
  };

  return (
    <div>
      {/* Click Event */}
      <button onClick={handleClick}>
        Cliquez-moi
      </button>

      {/* Submit Event */}
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Envoyer</button>
      </form>

      {/* Mouse Events */}
      <div
        onMouseEnter={() => console.log('Mouse enter')}
        onMouseLeave={() => console.log('Mouse leave')}
      >
        Survolez-moi
      </div>
    </div>
  );
}
```

## 🔀 Rendu Conditionnel

### If/Else avec Ternaire

```jsx
function Greeting({ isLoggedIn, username }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Bienvenue, {username}!</h1>
      ) : (
        <h1>Veuillez vous connecter</h1>
      )}
    </div>
  );
}
```

### && Opérateur

```jsx
function Notification({ messages }) {
  return (
    <div>
      {messages.length > 0 && (
        <p>Vous avez {messages.length} nouveaux messages</p>
      )}
    </div>
  );
}
```

### Switch avec Objet

```jsx
function StatusMessage({ status }) {
  const messages = {
    loading: <p>Chargement...</p>,
    success: <p>✅ Succès!</p>,
    error: <p>❌ Erreur!</p>
  };

  return messages[status] || <p>Status inconnu</p>;
}
```

## 📝 Listes et Clés

```jsx
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button>Supprimer</button>
        </li>
      ))}
    </ul>
  );
}

// Mauvaise pratique : utiliser l'index comme clé
{todos.map((todo, index) => (
  <li key={index}>{todo}</li> // ❌ Éviter
))}

// Bonne pratique : utiliser un ID unique
{todos.map(todo => (
  <li key={todo.id}>{todo.text}</li> // ✅ Recommandé
))}
```

## 📋 Formulaires

### Formulaire Contrôlé

```jsx
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Données du formulaire:', formData);
    // Envoyer les données au serveur
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nom"
        required
      />
      
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Message"
        rows="4"
        required
      />
      
      <button type="submit">Envoyer</button>
    </form>
  );
}
```

## 🔄 Cycle de Vie

### Avec useEffect (Composants Fonctionnels)

```jsx
function LifecycleDemo() {
  const [count, setCount] = useState(0);

  // ComponentDidMount
  useEffect(() => {
    console.log('Composant monté');
    
    // ComponentWillUnmount
    return () => {
      console.log('Composant démonté');
    };
  }, []);

  // ComponentDidUpdate
  useEffect(() => {
    console.log('Count mis à jour:', count);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}
```

## 🚀 Projet Exemple

### Todo App Complète

```jsx
import React, { useState, useEffect } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');

  // Sauvegarder dans localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: input,
        completed: false
      }]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="todo-app">
      <h1>📝 Ma Todo List</h1>
      
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ajouter une tâche..."
        />
        <button type="submit">Ajouter</button>
      </form>

      <div className="filters">
        <button 
          onClick={() => setFilter('all')}
          className={filter === 'all' ? 'active' : ''}
        >
          Toutes
        </button>
        <button 
          onClick={() => setFilter('active')}
          className={filter === 'active' ? 'active' : ''}
        >
          Actives
        </button>
        <button 
          onClick={() => setFilter('completed')}
          className={filter === 'completed' ? 'active' : ''}
        >
          Complétées
        </button>
      </div>

      <ul className="todo-list">
        {filteredTodos.map(todo => (
          <li key={todo.id} className={todo.completed ? 'completed' : ''}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span>{todo.text}</span>
            <button onClick={() => deleteTodo(todo.id)}>🗑️</button>
          </li>
        ))}
      </ul>

      <p className="stats">
        {todos.filter(t => !t.completed).length} tâche(s) restante(s)
      </p>
    </div>
  );
}

export default TodoApp;
```

### CSS pour la Todo App

```css
.todo-app {
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  background: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.todo-app h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

.todo-app form {
  display: flex;
  margin-bottom: 20px;
}

.todo-app input[type="text"] {
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px 0 0 5px;
  font-size: 16px;
}

.todo-app button {
  padding: 10px 20px;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
  font-size: 16px;
}

.todo-app button:hover {
  background: #45a049;
}

.filters {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.filters button {
  padding: 5px 15px;
  background: #e0e0e0;
  border-radius: 5px;
}

.filters button.active {
  background: #4CAF50;
  color: white;
}

.todo-list {
  list-style: none;
  padding: 0;
}

.todo-list li {
  display: flex;
  align-items: center;
  padding: 10px;
  background: white;
  margin-bottom: 5px;
  border-radius: 5px;
}

.todo-list li.completed span {
  text-decoration: line-through;
  opacity: 0.6;
}

.todo-list input[type="checkbox"] {
  margin-right: 10px;
}

.todo-list span {
  flex: 1;
}

.todo-list button {
  background: #f44336;
  padding: 5px 10px;
  border-radius: 3px;
  font-size: 12px;
}

.stats {
  text-align: center;
  color: #666;
  margin-top: 20px;
}
```

## 📚 Ressources

### Documentation Officielle
- 📖 [React Documentation](https://react.dev/)
- 🎓 [React Tutorial](https://react.dev/learn)
- 🔧 [React DevTools](https://react.dev/learn/react-developer-tools)

### Tutoriels Recommandés
- 🎥 [React Course - Beginner's Tutorial](https://www.youtube.com/watch?v=bMknfKXIFA8)
- 📝 [React Handbook](https://www.freecodecamp.org/news/react-beginner-handbook/)
- 🚀 [React Patterns](https://reactpatterns.com/)

### Outils et Bibliothèques
- 🔄 [React Router](https://reactrouter.com/) - Navigation
- 🗄️ [Redux](https://redux.js.org/) - Gestion d'état
- 🎨 [Material-UI](https://mui.com/) - Composants UI
- 📦 [Axios](https://axios-http.com/) - Requêtes HTTP
- 🧪 [React Testing Library](https://testing-library.com/react) - Tests

### Communauté
- 💬 [React Discord](https://discord.gg/react)
- 🐦 [React Twitter](https://twitter.com/reactjs)
- 📱 [React Native](https://reactnative.dev/) - Applications mobiles

## 🎯 Prochaines Étapes

1. **Maîtriser les Fondamentaux**
   - Composants et Props
   - State et Hooks
   - Gestion des événements

2. **Concepts Avancés**
   - Context API
   - Custom Hooks
   - Performance Optimization

3. **Écosystème React**
   - React Router
   - State Management (Redux/Zustand)
   - Server-Side Rendering (Next.js)

4. **Bonnes Pratiques**
   - Tests unitaires
   - Code splitting
   - Accessibilité

---

## 📄 License

Ce guide est sous licence MIT. Vous êtes libre de l'utiliser et de le modifier.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

---

⭐ **Happy Coding!** ⭐
