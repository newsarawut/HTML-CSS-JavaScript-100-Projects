const para = document.getElementById('para')
const searchBtn = document.getElementById('searchBtn')

searchBtn.addEventListener('click', () => {
    let input = document.getElementById('input').value;

    if (input !== "") {
        let regExp = new RegExp(input, 'gi')
        para.innerHTML = para.textContent.replace(regExp, "<mark>$&</mark>")
    }
})