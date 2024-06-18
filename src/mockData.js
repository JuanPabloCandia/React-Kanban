//generador de Id de manera aleatorio  es v4 as uuidv4
import { v4 as uuidv4 } from "uuid"
const mockData = [
    {
        id:uuidv4(),
        title:"🗒️ Por hacer",
        tasks:[
            {
                id:uuidv4(),
                title:"Estudiar JavaScript"
            },
            {
                id:uuidv4(),
                title:"Estudiar HTML y CSS"
            },
            {
                id:uuidv4(),
                title:"Estudiar React"
            },
        ]
    },
    {
        id:uuidv4(),
        title:"✏️ En Progreso",
        tasks:[
            {
                id:uuidv4(),
                title:"Estudiar JavaScript"
            },
            {
                id:uuidv4(),
                title:"Estudiar HTML y CSS"
            },
            {
                id:uuidv4(),
                title:"Estudiar React"
            },
        ]
    },
    {
        id:uuidv4(),
        title:"✅ Completados",
        tasks:[
            {
                id:uuidv4(),
                title:"Estudiar JavaScript"
            },
        ]
    }
]

export default mockData