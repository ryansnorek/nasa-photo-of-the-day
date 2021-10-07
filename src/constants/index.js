export const API_KEY = 'bEEfm4HBhgVq80g2xiSdS5vK3hnVbQqJQeBOsID1'

let today = new Date()
const dd = String(today.getDate()).padStart(2, '0')
const mm = String(today.getMonth() + 1).padStart(2, '0')
const yyyy = today.getFullYear()
export const todaysDate = yyyy + '-' + mm + '-' + dd
