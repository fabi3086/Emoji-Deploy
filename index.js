
// VARIABLES
const myEmojis = []
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")
const funniestBtn = document.getElementById("funniest-btn")
const cutestBtn = document.getElementById("cutest-btn")
const loadFunniestBtn = document.getElementById("load1-btn")
const loadCutestBtn = document.getElementById("load2-btn")

// FUNCIONES
function renderEmojis(array) {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < array.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = array[i]
        emojiContainer.append(emoji)
    }
}

function changeArray(method) {
    if (emojiInput.value) {
        if (method == "push") {
            myEmojis.push(emojiInput.value)
            emojiInput.value = ""
            renderEmojis(myEmojis)
        } else if (method == "unshift") {
            myEmojis.unshift(emojiInput.value)
            emojiInput.value = ""
            renderEmojis(myEmojis)
        }
    }
}

function removeArray(method) {
    if (method == "pop") {
            myEmojis.pop()
            renderEmojis(myEmojis)    
        } else if (method == "shift") {
            myEmojis.shift()
            renderEmojis(myEmojis)
        }
}
pushBtn.addEventListener("click", function(){
    changeArray("push")
})

unshiftBtn.addEventListener("click", function(){
    changeArray("unshift")
})

popBtn.addEventListener("click", function() {
    removeArray("pop")
})

shiftBtn.addEventListener("click", function() {
   removeArray("shift")
})

funniestBtn.addEventListener("click", function() {
    localStorage.setItem("funny", JSON.stringify(myEmojis))
})

loadFunniestBtn.addEventListener("click", function() {
    renderEmojis(JSON.parse(localStorage.getItem("funny")))
})

cutestBtn.addEventListener("click", function() {
    localStorage.setItem("cute", JSON.stringify(myEmojis))
})

loadCutestBtn.addEventListener("click", function() {
    renderEmojis(JSON.parse(localStorage.getItem("cute")))
})
