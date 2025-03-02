# TaskManager React

### criar projeto [React](https://react.dev/) usando o [Vite](https://vite.dev/guide/)

```shell
$ npm create vite@5.5.2 .
  REACT
  Javascript
$ npm install
```

### instalar o [Tailwindcss](https://r.search.yahoo.com/_ylt=Awriqu71fMNnFwIACKjz6Qt.;_ylu=Y29sbwNiZjEEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1742074357/RO=10/RU=https%3a%2f%2ftailwindcss.com%2f/RK=2/RS=_OgqEZ7ssCh9JJ3KhjMX7xcNyQY-) e dependências, e cria os templates

```shell
$ npm install -D tailwindcss@3.4.10 postcss@8.4.41 autoprefixer@10.4.20
$ npx tailwindcss init -p
```

tailwind.config.js:
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### carregar icones

```shell
$ npm install lucide-react@0.435.0
```

### iniciar o repositório

```shell
$ echo "# todolist-react" >> README.md
$ git init
$ git add .
$ git commit -m "first commit"
```



