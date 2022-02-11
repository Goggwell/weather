import React from 'react';
import { debounce } from 'lodash';
import useLocalStorage from 'use-local-storage';

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage(
    'theme',
    defaultDark ? 'dark' : 'light'
  );

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    console.log(theme);
  };

  return (
    <div className='app' data-theme={theme}>
      <h1>Hello world!</h1>
      <button onClick={switchTheme}>Howdy</button>
    </div>
  );
}

export default App;
