const usernameEl = document.querySelector("#username")
const passwordEl = document.querySelector("#password")

export function logIn(event) {
    event.preventDefault()
    const username = usernameEl.value
    const password = passwordEl.value

    const data = {
        username: username,
        password: password,
    }
    fetch("https://back-web-dev-l9r6.onrender.com/api/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then((res) => {
        return res.text()
    }).then((text) => {
        console.log(text)
    }).catch(function (error) {
        console.log("Promise rejected with:", error)
    })
}