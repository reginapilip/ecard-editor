// handles

// for editor
const editor = document.querySelector('#editor')
const editorGreeting = document.querySelector('#editor-greeting')
const editorMessage = document.querySelector('#editor-message')

// for event listeners
const greetingHandle = document.querySelectorAll(".greeting-option")
const greetingColor = document.querySelector("[data-color-greet]")
const customGreeting = document.querySelector("[data-custom-greeting]")
const messageColor = document.querySelector("[data-color-msg]")
const bgImage = document.querySelectorAll(".bg-image")
const bgColor = document.querySelector("[data-color]")


// add event listeners to option
// greeting
greetingHandle.forEach(element => {
    element.addEventListener("click", () => {
        localStorage.setItem("greeting", element.text)
        editorGreeting.innerHTML = `<h1>${localStorage.getItem("greeting")}</h1>`
    })
})

// greeting text color
greetingColor.addEventListener("change", () => {
    localStorage.setItem("greetingColor", greetingColor.value)
    editorGreeting.style.color = localStorage.getItem("greetingColor")
})

// custom greeting
customGreeting.addEventListener("keyup", () => {
    localStorage.setItem("customGreeting", customGreeting.value)
    editorMessage.style.backgroundColor = "rgba(115, 115, 115, 0.35)"
    editorMessage.innerHTML = `<p>${localStorage.getItem("customGreeting")}</p>`
})

// custom greeting text color 
messageColor.addEventListener("change", () => {
    localStorage.setItem("messageColor", messageColor.value)
    editorMessage.style.color = localStorage.getItem("messageColor")
})

// background image
bgImage.forEach(element => {
    element.addEventListener("click", () => {
        localStorage.removeItem("bgColor")
        localStorage.setItem("bgImage", element.src)
        editor.style.backgroundImage = `url(${localStorage.getItem('bgImage')})`
    })
})

// background color
bgColor.addEventListener("change", () => {
    localStorage.removeItem("bgImage")
    editor.style.backgroundImage = "none"
    localStorage.setItem("bgColor", bgColor.value)
    editor.style.backgroundColor = localStorage.getItem("bgColor")
})

// display functionality
function displayStoredCard() {
    if (storageItemIsNotNull("greeting")) {
        editorGreeting.innerHTML = `<h1>${localStorage.getItem("greeting")}</h1>`
    }

    if (storageItemIsNotNull("greetingColor")) {
        editorGreeting.style.color = localStorage.getItem("greetingColor")
    }

    if (storageItemIsNotNull("customGreeting")) {
        editorMessage.style.backgroundColor = "rgba(115, 115, 115, 0.35)"
        editorMessage.innerHTML = `<p>${localStorage.getItem("customGreeting")}</p>`
    }

    if (storageItemIsNotNull("messageColor")) {
        editorMessage.style.color = localStorage.getItem("messageColor")
    }

    if (storageItemIsNotNull("bgImage")) {
        editor.style.backgroundImage = `url(${localStorage.getItem('bgImage')})`
    }

    if (storageItemIsNotNull("bgColor")) {
        editor.style.backgroundColor = localStorage.getItem("bgColor")
    }
}

// helper functions
function storageItemIsNotNull(item) {
    return localStorage.getItem(`${item}`) !== null
}

displayStoredCard()