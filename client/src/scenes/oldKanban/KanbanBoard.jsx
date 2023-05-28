//Dragdropcontext
import { DragDropContext } from "react-beautiful-dnd";

export default function KanbanBoard() {
    const [completed, setCompleted] = useState([]);
    const [incomplete, setIncomplete] = useState([]);
    
    
    return (
        <DragDropContext>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "row",
                }}>

                <Column title={"TO DO"} tasks={incomplete} id={"1"} />
                
            </div>

        </DragDropContext>
    )
    
    
    
}