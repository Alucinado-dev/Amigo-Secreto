const newFriendForm = document.querySelector('#add-new-friend')
newFriendForm.addEventListener('submit', (e) => {
  e.preventDefault()
  addFriend()
})

const drawBtn = document.querySelector('#draw-btn')
drawBtn.addEventListener('click', showResult)

const closeBtn = document.querySelector('#close-btn')
if (closeBtn) {
  closeBtn.addEventListener('click', closeResult)
}

const friendListUl = document.getElementById('friend-list-ul')

friendListUl.addEventListener('click', (e) => {
  removeFriend(e)
})




const easterEgg = document.querySelector('#easter-egg')
easterEgg.addEventListener('click', () => {
  easterEggDialog.showModal()
})

const easterEggDialog = document.querySelector('#easter-egg-dialog')
easterEggDialog.addEventListener('click', () => {
  easterEggDialog.close()
})