import Tasks from './components/Tasks.jsx'
import AddTask from './components/AddTask.jsx'
import { SmilePlus } from "lucide-react"

function App() {
    return (
        <div>
            <h1 className="text-red-500"><SmilePlus />Gerenciador de Tarefas</h1>
            <AddTask />
            <Tasks />
        </div>
    )
}

export default App