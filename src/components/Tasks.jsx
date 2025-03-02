import { ChevronRightIcon, TrashIcon, CheckIcon } from "lucide-react"
import { useNavigate } from 'react-router-dom'

function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {

    const navigate = useNavigate()

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams()
        query.set("title", task.title)
        query.set("description", task.description)
        navigate(`/task?${query.toString()}`)
    }

    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button
                        onClick={() => onTaskClick(task.id)}
                        className={`bg-slate-400 w-full text-white p-2 rounded-md flex gap-2 ${task.isCompleted && "line-through"}`}
                    >
                        {task.isCompleted && <CheckIcon className="text-green-300"/>}
                        {task.title}
                    </button>
                    <button
                        onClick={() => onSeeDetailsClick(task)}
                        className="bg-slate-400 text-white p-2 rounded-md"
                    >
                        <ChevronRightIcon />
                    </button>
                    <button
                        onClick={() => onDeleteTaskClick(task.id)}
                        className="bg-slate-400 text-white p-2 rounded-md"
                    >
                        <TrashIcon className="text-orange-300"/>
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default Tasks