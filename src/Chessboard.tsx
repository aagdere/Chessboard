import { useState, KeyboardEvent } from 'react';
import Button from '@mui/material/Button'
import ChessboardExt from 'chessboardjsx';
import SvgIcon from '@mui/material/SvgIcon'
import { ArrowLeft, ArrowRight } from '@mui/icons-material'

export default function Chessboard({ fens, width }: { fens: string[], width: number }) {
  // SET UP BOARD

  console.log("Inside Chessboard")

  const [moveIndex, setMoveIndex] = useState(0)

  const moveBack = () => {
    if (moveIndex > 0) {
      setMoveIndex(moveIndex - 1)
    }
  }

  const moveForward = () => {
    if (moveIndex < fens.length - 1) {
      setMoveIndex(moveIndex + 1)
    }
  }

  const onKey = (event: KeyboardEvent): void => {
    if(event.key === 'ArrowRight'){
      moveForward();
    } else if (event.key === 'ArrowLeft'){
      moveBack();
    }
  }

  return (
    <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} onKeyDown={onKey} tabIndex={0}>
        <ArrowLeft onClick={moveBack} />
        <div style={{border: '1px solid rgb(133, 133, 133)', width }}>
          <ChessboardExt position={fens[moveIndex]} transitionDuration={50} width={width} />
        </div>
        <ArrowRight onClick={moveForward} />
    </div>
  );
}