import React, {Component} from 'react'

import Board from '../../components/chess/board/board'
import BoardSide from '../../components/chess/board/sidbar'
import {Grid} from '@material-ui/core'

// const fen = 'r2qnk2/p2n1Q1R/2p5/1pPp2p1/3P4/2NBB3/PP3PP1/R3K3 b Q - 4 22'

const pgn = `
[Event "Tournament Games: Kathleen"]
[Site "https://lichess.org/study/CgENvVTu"]
[Result "*"]
[UTCDate "2018.06.18"]
[UTCTime "11:06:02"]
[Variant "Standard"]
[ECO "E70"]
[Opening "King's Indian Defense: Normal Variation"]
[Annotator "https://lichess.org/@/BannerBSchafer"]

1. d4 Nf6 2. c4 g6 3. Nc3 Bg7 4. e4 O-O 5. e5 Ne8 6. Bg5 f6 7. exf6 exf6 8. Be3 d6 9. Bd3 Be6 10. Nge2 c6 11. h4 d5 12. c5 b5 13. h5 f5 14. hxg6 hxg6 15. Nf4 Rf6 16. Qf3 g5 17. Nxe6 Rxe6 18. Qxf5 Bh6 19. Qxe6+ Kg7 20. Rxh6 Nd7 21. Rh7+ Kf8 22. Qf7# *`

class CreatePostPage extends Component {
  render() {
    return (
      <Grid container spacing={16} style={{justifyContent: 'center'}}>
        <Grid item xs={12} sm={8} md={8} lg={8}>
          <Board fen="startpos" />
        </Grid>
        <Grid item style={{flex: 1}}>
          <BoardSide fen="startpos" pgn={pgn} />
        </Grid>
      </Grid>
    )
  }
}

export default CreatePostPage
