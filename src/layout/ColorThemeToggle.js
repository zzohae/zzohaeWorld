import React, { useEffect } from 'react';

export default function ColorThemeToggle({ theme, toggleTheme }) {
  const handleToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    toggleTheme(newTheme); // 부모에서 전달된 toggleTheme 함수 사용
    localStorage.setItem('theme', newTheme); // 테마를 localStorage에 저장
  };

  return (
    <div>
      <button className="modeBtn fcc" onClick={handleToggle}>
        {theme === 'dark' ? '라이트 모드 🌞' : '다크 모드 🌚'}
      </button>
    </div>
  );
}