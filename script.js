const boardContainer = document.getElementById("board-container")
const addBoard = document.getElementById("add-board-Btn")
const modalContainer = document.getElementById("add-board-modal-container")
const modal = document.getElementById("add-board-modal")
const closeModalBtn = document.getElementById("close-modal")
const boardName = document.getElementById("close-modal")
const modalBackgroundImg = document.getElementById("modal-bg-img")
const generateBGBtn = document.getElementById("generate-bg-btn")


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


touchAddBtn()
openModal()
closeModal()