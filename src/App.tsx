import React from 'react';
import logo from './logo.svg';
import './App.css';
import Chessboard from './Chessboard';
import { Chess } from 'chess.js';

function App() {

  console.log("Inside App")

  const defaultPgn = `[Event "Live Chess"]
[Site "Chess.com"]
[Date "2022.05.07"]
[Round "?"]
[White "Arisjan"]
[Black "MatthewsDeep"]
[Result "1-0"]
[ECO "C53"]
[WhiteElo "1046"]
[BlackElo "1089"]
[TimeControl "300"]
[EndTime "17:27:11 PDT"]
[Termination "Arisjan won by resignation"]

1. e4 e5 2. Nf3 Nc6 3. Bc4 Bc5 4. c3 d6 5. d4 exd4 6. cxd4 Bb6 7. O-O Nf6 8. Nc3
O-O 9. e5 dxe5 10. dxe5 Nd7 11. e6 fxe6 12. Bxe6+ Kh8 13. Qc2 Qe7 14. Ng5 g6 15.
Nd5 Nd4 16. Qc3 Rf6 17. Be3 Ne2+ 18. Kh1 Nxc3 19. Nxe7 Rxe6 20. Bxb6 Rxe7 21.
Bd4+ Kg8 22. Bxc3 b6 23. Rfe1 Rf7 24. Nxf7 Kxf7 1-0`;

  const getFens = () => {
    console.log("Inside getFens")
    // need 2 chess objects to get FENs
    const chess1 = new Chess()
    const chess2 = new Chess()
    const startPos = chess2.fen()

    chess1.load_pgn(defaultPgn)

    let fens = chess1.history().map((move: string) => {
      chess2.move(move)
      return chess2.fen()
    })

    // above does not capture fen of starting position
    return [startPos, ...fens]
  }

  return (
    <Chessboard width={800} fens={getFens()} />
  );
}

export default App;
