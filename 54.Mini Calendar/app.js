// month
const monthEl = document.getElementById('month')
// day
const dayNameEl = document.getElementById('day')
// dayNum
const dayNumEl = document.getElementById('day-number')
// year
const yearEl = document.getElementById('year')

const date = new Date()

const month = date.getMonth()
monthEl.innerHTML = date.toLocaleDateString('en', {
    month: 'long',
})
dayNameEl.innerHTML = date.toLocaleDateString('en', {
    weekday: 'long',
})

dayNumEl.innerHTML = date.getDate()
yearEl.innerHTML = date.getFullYear()
