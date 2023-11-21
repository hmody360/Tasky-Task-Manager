const boardContainer = document.getElementById("board-container")
const addBoard = document.getElementById("add-board-Btn")
const modalContainer = document.getElementById("add-board-modal-container")
const modal = document.getElementById("add-board-modal")
const closeModalBtn = document.getElementById("close-modal")
const boardName = document.getElementById("board-name")
const modalBackgroundImg = document.getElementById("modal-bg-img")
const generateBGBtn = document.getElementById("generate-bg-btn")
const createBtn = document.getElementById("create-btn")
const noNameError = document.getElementById("no-name-error")

const Boards = []

const PushObjToStorage = (name, bg) => {
    let BoardObject = {
        name: name,
        bg: bg
    }
    const obj = JSON.stringify(BoardObject)
    localStorage.setItem("board", obj)
    console.log(obj);
    console.log(localStorage);
}
const PullObjFromStorage = () => {
    const stringObj = localStorage.getItem("board")
    const obj = JSON.parse(stringObj)
    let name = obj.name
    let bg = obj.bg

    const board = document.createElement("a");
    board.className = "board-tab"
    board.id = "board-tab"
    board.href = "boardPage.html"
    board.style.backgroundImage = bg
    board.innerHTML = `<label>${name}</label><i class="fa-solid fa-trash" id="delete-board"></i>`
    boardContainer.appendChild(board)
}
const touchAddBtn = () => {
    addBoard.onmouseover = () => {
        addBoard.innerHTML = `<i class="fa-solid fa-plus"></i>`
    }
    addBoard.onmouseleave = () => {
        addBoard.innerHTML = `<i class="fa-solid fa-plus fa-fade"></i>`
    }

}

const openModal = () => {
    addBoard.onclick = () => {
        modalContainer.style.display = "flex"
    }


}
const closeModal = () => {
    modalContainer.addEventListener('click', (event) => {
        if (event.currentTarget == event.target) {
            modalContainer.style.display = "none"
        }
    })
    closeModalBtn.onclick = () => {
        modalContainer.style.display = "none"
    }
}
const generateBG = async () => {
    const response = await fetch("https://api.unsplash.com/photos/random/?client_id=Chi6_ARHPNzdtsBgFDnm6gai89_AFqTZIbcdzn3Ij40&orientation=landscape")
    const data = await response.json()
    const result = await data.urls.full
    console.log(result);
    modalBackgroundImg.style.backgroundImage = `url("${result}")`

}
const setDefaultBackground = () => {
    modalBackgroundImg.style.backgroundImage = `url("/images/default-bg.avif")`
}
const createBoard = () => {
    createBtn.addEventListener('click', (event) => {
        event.preventDefault()
        if (boardName.value == "") {
            noNameError.style.display = "block"
        } else {
            noNameError.style.display = "none"
            const board = document.createElement("a");
            board.className = "board-tab"
            board.id = "board-tab"
            board.href = "boardPage.html"
            board.style.backgroundImage = modalBackgroundImg.style.backgroundImage
            board.innerHTML = `<label>${boardName.value}</label><i class="fa-solid fa-trash" id="delete-board"></i>`
            boardContainer.appendChild(board)
            PushObjToStorage(boardName.value, board.style.backgroundImage)
            boardName.value = ""
            modalContainer.style.display = "none"
        }
    })
}

window.onload = () => {
    PullObjFromStorage()
}

setDefaultBackground()
touchAddBtn()
openModal()
closeModal()
generateBGBtn.addEventListener('click', (event) => {
    event.preventDefault()
    generateBG()
})
createBoard()