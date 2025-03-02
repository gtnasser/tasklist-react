## Hints

- um componente é uma função que retorna um HTML. É escrito em JSX. Seu nome inicia com Caixa Alta.

- extensões vscode
    - Tailwind CSS IntelliSense

-- desabilitar no lint a validação de tipos do react
```json
export default [
    rules: {
      'react/prop-types': 'off',
```

- incluir a classe na tag usando a propriedade ```className="NOME_DA_CLASSE"´´´

- incluir uma variavel que, quando atualizada, renderiza novamente o componente
```
import { useState } from 'react'

  const [count, setCount] = useState(0)
```
- referenciar um arquivo de estilos, no componente, ```import './App.css'```

- incluir uma propriedade em um componente
```HTML
  <Tasks property_name={variable_name}/>
```

- mostrar o valor de uma variável na tela (entre chaves **{}**)
```HTML
<h1>{props.tasks[0].title}</h1>
```

- alterando um item de um objeto facilmente desestruturando ele
```js
task = {...task, isCompleted: !task.isCompleted}
```

- chamar uma funcao do componente, declaramos a funcao da mesma maneira que uma propriedade
```js
<button onClick={props.onTaskClick}>click mne</button>
```

- chamar uma funcao do componente passando um parametro, declara um array function para retornando o parametro
```js
<button onClick={() => props.onTaskClick(task.id)}>click mne</button>
```

- para o componente filho alterar o estado do omponente pai, cria uma função no componente pai que altera o estado, e passa essa função como uma propriedade para o componente filho executar

- para alterar classes dinamicamente, utilizar o javascript direto na propriedade **className**
```HTML
className={`p-2 rounded-md ${task.isCompleted && "line-through"}`}
```

- pode-se fazer um * destruction* das *props* de um componente, por exemplo, de
```js
function Tasks(props) {
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {props.tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button
                        onClick={() => props.onTaskClick(task.id)}
```
para
```js
function Tasks({tasks, onTaskClick}) {
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button
                        onClick={() => onTaskClick(task.id)}
```

-- ao atualizar uma lista, *lista.push()* não funciona, é necessário incluir o novo elemento no momento de atualizar o estado da variável lista
```js
setTasks([...tasks, newTask])
```

-- uma forma de pegar o valor de um *input* é usando o estado

-- para usar o Router
$npm instal reac-router-dom@6.26.1

main.js, renderizar pelo RouterProvider:
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

- Hook useEffect(funcao, lista) executa a funcao toda vez que um item da lista for alterado. podemos usar para persistir os dados, por exemplo
```js
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])
```

geralmente o fluxo é:
```
componente > API
dados persistidos no state do componente < API
```

hack: se for passada uma lista vazia, a função será execitada uma única vez quando o usuário acessar a aplicação

- o que um componente recebe "dentro" dele pode ser recuperao com *props children*
```js
<Component ...><ChevronRightIcon /></Component>


```

- se as propriedades do componente tiverem o mesmo nome que as variaveis do componente, podemos simplificar o codigo uzando um spread *{...}*, exemplo:
```js
<button onclick={() => onClick(task)} className="text-white"><TrashIcon/></button>
```
pode ser refatorado como um componente
```js
function Button(props){
    return (
        <button {...props} className="text-white">{props.children}</button>
    )
}
```
```js
<Button
    onclick={() => onClick(task)}
    className="text-white"
>
    <TrashIcon/>
</Button>
```

- podemos tambem criar componentes de classe (componentes não funcionais)
```js
import React from 'react'
class Test extends React.Component {
    render() {

    }
}
export default Test
```
