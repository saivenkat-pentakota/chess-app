import { useState ,useRef} from "react";
import Piece from "./Piece";
import {copyPosition, createPosition} from '../../helper';
import "./Pieces.css";

const Pieces = () => {
    const ref = useRef()

    const [state,setState] = useState(createPosition())

    const calculateCoords = e => {
        const { width, left, top } = ref.current.getBoundingClientRect();
        const size = width / 8;
        const y = Math.floor((e.clientX - left) / size);
        const x = 7 - Math.floor((e.clientY - top) / size);
        return { x, y };
    }
    
    const onDrop = e => {
        const newPosition = copyPosition(state);
        const { x, y } = calculateCoords(e);
        const data = e.dataTransfer.getData('text');
        const [p, rank, file] = data.split(",");
        if (p && rank !== undefined && file !== undefined && x >= 0 && x <= 7 && y >= 0 && y <= 7) {
            newPosition[rank][file] = '';
            newPosition[x][y] = p;
            setState(newPosition);
        } else {
            console.error("Invalid data dropped or out of bounds coordinates:", data, x, y);
        }
    }
    
    
    

    const onDragOver = e => e.preventDefault()

  return <div
  ref={ref}
  onDrop = {onDrop}
  onDragOver={onDragOver}
  className="pieces"
  >
    {state.map((r,rank)=>
    r.map((f,file)=>
    state[rank][file]
    ? <Piece
        key = {rank +'-'+file}
        rank = {rank}
        file={file}
        piece= {state[rank][file]}
        />
        :null
    ))}

  </div>

}

export default Pieces;
