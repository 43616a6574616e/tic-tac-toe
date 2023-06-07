const gameBoard = document.querySelector('.gameBoard')
const info = document.querySelector('.info')

const cells = [
    '', '', '', '', '', '', '', '', ''
]

const winCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

let flag = true
info.textContent = `Circle's go first`

const createElements = () => {
    cells.forEach((_cell, index) => {
            const cellElement = document.createElement('div')
            cellElement.classList.add('square')
            cellElement.id = index
            cellElement.addEventListener('click', addSmth)
            gameBoard.append(cellElement)
        }) 
    }


    const addSmth = (e) => {
        e.target.classList.add('squareColor')
        if(flag) {
            info.textContent = `Cross's move`
            const circle = document.createElement('div')
            circle.classList.add('circle')
            e.target.appendChild(circle)
        } else {
            info.textContent = `Circle's move`
            const cross = document.createElement('div')
            cross.classList.add('cross')
            e.target.appendChild(cross)
            
        }
        e.target.removeEventListener('click', addSmth)
        flag = !flag
        winCheck()
    }



    const winCheck = () => {
        const allSquares = document.querySelectorAll('.square')
        const winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
      winningCombos.forEach(array => {
      const circleWins = array.every(cell => allSquares[cell].firstChild?.classList.contains('circle'))
      const crossWins = array.every(cell => allSquares[cell].firstChild?.classList.contains('cross'))

      if(circleWins) {
        info.textContent = `circle's wins`
        allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
        return
      } else if(crossWins) {
        info.textContent = `cross's wins`
        allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
        return
      }

      })
    }

createElements()