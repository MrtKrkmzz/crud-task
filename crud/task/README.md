# React + TypeScript + Vite
## React + TypeScript CRUD Uygulaması

Bu proje, kullanıcıları ve gönderilerini Bootstrap ile şık bir şekilde listeleyen basit bir React uygulamasıdır.

### Kurulum (Setup)

1. Depoyu klonlayın (veya dosyaları indirin):
  ```sh
  git clone <repo-link>
  cd task
  ```
2. Gerekli paketleri yükleyin:
  ```sh
  npm install
  ```
3. Uygulamayı başlatın:
  ```sh
  npm run dev
  ```
4. Tarayıcıda açılan adresi ziyaret edin (genellikle http://localhost:5173 veya http://localhost:5174).

### Özellikler
- Kullanıcılar ve gönderiler tek ekranda, kartlar halinde gösterilir.
- Bootstrap ile modern ve okunaklı bir arayüz.
- Sadece veri listeleme (CRUD işlemleri yoktur).

### Notlar
- Proje Vite, React, TypeScript ve Bootstrap kullanır.
- Kodda gereksiz dosya ve karmaşıklık yoktur.

---

## English

This is a simple React + TypeScript project that lists users and their posts in a modern Bootstrap card layout.

### Setup
1. Clone the repo (or download files):
  ```sh
  git clone <repo-link>
  cd task
  ```
2. Install dependencies:
  ```sh
  npm install
  ```
3. Start the app:
  ```sh
  npm run dev
  ```
4. Open the shown address in your browser (usually http://localhost:5173 or http://localhost:5174).

### Features
- Users and their posts are shown together in cards.
- Modern, clean UI with Bootstrap.
- Only data listing (no CRUD actions).

---
Herhangi bir sorunda bana ulaşabilirsiniz!
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
