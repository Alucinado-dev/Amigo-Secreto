const newFriendForm = document.querySelector('#add-new-friend')
newFriendForm.addEventListener('submit', (e) => {
  e.preventDefault()
  addFriend()
})

const drawBtn = document.querySelector('#draw-btn')
drawBtn.addEventListener('click', showResult)

const closeBtn = document.querySelector('#close-btn')
closeBtn.addEventListener('click', closeResult)

const friendListUl = document.getElementById('friend-list-ul')

friendListUl.addEventListener('click', (e) => {
  // Verifica se o elemento clicado (e.target) é o ícone de remover
  removeFriend(e)
})
