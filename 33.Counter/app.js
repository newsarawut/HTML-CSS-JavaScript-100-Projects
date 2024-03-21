// countEl
const countEl = document.getElementById('count')
// saveEl
const saveEl = document.getElementById('save')
// incrementBtn
const incrementBtn = document.querySelector('.increment-btn')
// saveBtn
const saveBtn = document.querySelector('.save-btn')

let count = 0

incrementBtn.addEventListener('click', () => {
    count += 1
    countEl.textContent = count
})

saveBtn.addEventListener('click', () => {
    let countStr = count + ", "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
})