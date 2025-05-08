import React from 'react';
import { UseTheme } from '../../hooks/UseTheme';

const ThemeSwitcher = () => {
  const { toggleTheme, isDarkMode } = UseTheme();

  const handleThemeChange = (theme) => {
    if ((theme === 'dark' && !isDarkMode) || (theme === 'light' && isDarkMode)) {
      toggleTheme();
    }
  };

  return (
    <div className="bg-surface dark:bg-dark-surface p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium text-text-primary dark:text-dark-text-primary mb-4">
        Theme Preferences
      </h3>
      <div className="space-y-3">
        <div className="flex items-center">
          <input
            id="light-theme"
            name="theme"
            type="radio"
            checked={!isDarkMode}
            onChange={() => handleThemeChange('light')}
            className="h-4 w-4 text-primary focus:ring-primary dark:focus:ring-dark-primary"
          />
          <label
            htmlFor="light-theme"
            className="ml-3 block text-sm font-medium text-text-secondary dark:text-dark-text-secondary"
          >
            Light Mode
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="dark-theme"
            name="theme"
            type="radio"
            checked={isDarkMode}
            onChange={() => handleThemeChange('dark')}
            className="h-4 w-4 text-primary focus:ring-primary dark:focus:ring-dark-primary"
          />
          <label
            htmlFor="dark-theme"
            className="ml-3 block text-sm font-medium text-text-secondary dark:text-dark-text-secondary"
          >
            Dark Mode
          </label>
        </div>
      </div>
    </div>
  );
};

export default ThemeSwitcher;