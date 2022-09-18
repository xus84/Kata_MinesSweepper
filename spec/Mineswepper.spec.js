

describe('MineSwepper Test', ()=> {
        it('is playing on start', ()=> {
                const quantityOfMines = 1
                const boardConfig = { width: 1, height: 1}
               
                const game = Mineswepper.startWith(boardConfig,  quantityOfMines)

                expect(game.status()).toBe('playing')
        })


}) 
