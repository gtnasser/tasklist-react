import Tasks from './components/Tasks.jsx'
import AddTask from './components/AddTask.jsx'
import { useState } from 'react'
import { v4 } from 'uuid'

function App() {

    const [tasks, setTasks] = useState([{
        id: 1,
        title: "Estudar programação",
        description: "Estudar programação para se tornar um desenvolvedor full stack",
        isCompleted: false
    },
    {
        id: 2,
        title: "Fazer exercícios",
        description: "Fazer exercícios físicos para manter a postura correta e os músculos ativos",
        isCompleted: false
    },
    {
        id: 3,
        title: "Tomar muito café",
        description: "Uma boa dose de cafeína vai ajudar nas longas madrugadas procurando aquele bug no código...",
        isCompleted: false
    },
    ])


    function onTaskClick(taskId) {
        const newTasks = tasks.map((task) => {
            if (task.id === taskId) {
                //task.isCompleted = !task.isCompleted
                //return task
                return { ...task, isCompleted: !task.isCompleted }
            }
            return task
        })
        setTasks(newTasks)
    }

    function onDeleteTaskClick(taskId) {
        const newTasks = tasks.filter((task) => {
            return (task.id !== taskId)
        })
        setTasks(newTasks)
    }

    function onAddTaskSubmit(title, description) {
        const newTask = {
            id: v4(),
            title: title,
            description: description,
            isComplete: false
        }
        setTasks([...tasks, newTask])
    }

    return (
        <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
            <div className="w-[500px] space-y-4">
                <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
                <AddTask onAddTaskSubmit={onAddTaskSubmit} />
                <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick} />
            </div>
        </div>
    )
}

export default App
