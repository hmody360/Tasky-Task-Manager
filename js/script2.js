const pageContainer = document.getElementById("page-container")
const boardNameHeader = document.getElementById("board-name-header")

console.log(localStorage);
const getBoardInfo = () => {
    const idToFind = localStorage.getItem("activeBoard")
    const boardArr = JSON.parse(localStorage.getItem("boards"))
    const boardObj = boardArr.find(Obj => Number(Obj.id) == idToFind)
    pageContainer.style.backgroundImage = boardObj.bg
    boardNameHeader.innerText = boardObj.name
}
getBoardInfo()
