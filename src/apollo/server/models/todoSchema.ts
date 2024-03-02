import mongoose from "mongoose";
const Schema = mongoose.Schema;
import { TodoType } from "@/Types/todos";

const todoSchema = new Schema<TodoType>({
    title: {
        type: String,
        required: true
    },
    description: String,
    status: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

const Todo = mongoose.model('Todo', todoSchema)
export default Todo