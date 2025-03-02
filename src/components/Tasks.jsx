import { ChevronRightIcon, TrashIcon } from "lucide-react"

function Tasks({tasks, onTaskClick}) {
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button
                        onClick={() => onTaskClick(task.id)}
                        className={`bg-slate-400 w-full text-white p-2 rounded-md ${task.isCompleted && "line-through"}`}>{task.title} {task.isCompleted?'TRUE':'FALSE'}
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default Tasks