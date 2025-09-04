const addFriend = () => {
  const nameInput = document.querySelector('#friend-name')
  const friendName = nameInput.value.trim()
  const allFriends = getFriendsList(
    document.querySelectorAll('.friend-list-item')
  )

  if (!friendName) {
    alert('Por favor, digite um nome.')
    nameInput.focus()
    return
  }

  if (friendName.contains('1234567890')){
    alert('Por favor, digite um nome sem números.')
    nameInput.focus()
    return
  }

  if (allFriends.includes(friendName)) {
    alert(
      'Este nome já foi adicionado. Por favor, use um nome ou sobrenome para diferenciar.'
    )
    nameInput.focus()
    return
  }

  const friendLi = document.createElement('li')
  friendLi.classList.add('friend-list-item')
  friendLi.innerHTML = `
        <span>${friendName}</span>
        <button><i class="fa-solid fa-circle-minus"></i></button>
    `
  const friendListUl = document.querySelector('#friend-list-ul')
  friendListUl.appendChild(friendLi)

  resetInput()
}

const resetInput = () => { 
  document.querySelector('#friend-name').value = ''
  document.querySelector('#friend-name').focus()
}

const removeFriend = (e) => {
  if (e.target.classList.contains('fa-circle-minus')) {
    e.target.closest('.friend-list-item').remove()
  }
}

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]] // Troca os elementos de lugar
  }
  return array
}

const getFriendsList = (friendListItems) => {
  const friendNames = []
  friendListItems.forEach((item) => {
    friendNames.push(item.querySelector('span').innerText)
  })
  return friendNames
}

const drawFriend = () => {
  const friendListItems = document.querySelectorAll('.friend-list-item')
  const allFriends = getFriendsList(friendListItems)

  if (allFriends.length < 3) {
    alert('Adicione pelo menos 3 amigos para fazer o sorteio!')
    return
  }

  const shuffledFriends = shuffleArray(allFriends)

  const drawResult = {}

  shuffledFriends.forEach((giver, index) => {
    const receiverIndex = (index + 1) % shuffledFriends.length
    drawResult[giver] = shuffledFriends[receiverIndex]
  })

  return drawResult
}

const displayDrawResult = (drawResult) => {
  const friendsDrawnUl = document.querySelector('#friends-drawn-ul')
  friendsDrawnUl.innerHTML = ''
  
  const shuffledEntries = shuffleArray(Object.entries(drawResult))
  const shuffledDrawResult = Object.fromEntries(shuffledEntries)
  drawResult = shuffledDrawResult

  for (const giver in drawResult) {
    const listItem = document.createElement('li')

    listItem.classList.add('friend-drawn-item')
    listItem.innerHTML = `
                <p>
                  o amigo secreto do <span class="giver">${giver}</span> é <span class="receiver">${drawResult[giver]}</span>
                </p>
      `
    friendsDrawnUl.appendChild(listItem)
  }
}

const resultModal = document.querySelector('#friends-drawn')

const showResult = () => {
  const drawResult = drawFriend()
  displayDrawResult(drawResult)
  resultModal.showModal()
}

const closeResult = () => {
  resultModal.close()
  console.log('o modal foi fechado')
}
