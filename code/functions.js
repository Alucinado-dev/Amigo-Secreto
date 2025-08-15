const newFriendForm = document.querySelector("#add-new-friend");
const friendListUl = document.querySelector("#friend-list-ul");
const drawBtn = document.querySelector("#draw-btn");
const friendSelected = document.querySelector("#friend-selected");





const addFriend = () => {
    const friendName = document.querySelector("#friend-name").value;
    const friendLi = document.createElement("li");
    friendLi.classList.add("friend-list-item");
    friendLi.innerHTML = `
        <span>${friendName}</span>
        <button><i class="fa-solid fa-circle-minus"></i></button>
    `;
    friendListUl.appendChild(friendLi);
}

const removeFriend = () => {
    const friendListItems = document.querySelectorAll(".friend-list-item");
    friendListItems.forEach(item => {
        item.addEventListener("click", (e) => {
            if (e.target.classList.contains("fa-circle-minus")) {
                item.remove();
            }
        });
    });
}


const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const getFriendsList = (friendListItems) => {
    const friendNames = [];
    friendListItems.forEach(item => {
        friendNames.push(item.querySelector("span").innerText);
    });
    return friendNames;

}

const drawFriend = () => {
    const friendListItems = document.querySelectorAll(".friend-list-item");
    const allFriends = getFriendsList(friendListItems);

    if (allFriends.length < 3) {
        alert("Adicione pelo menos 3 amigos para fazer o sorteio!");
        return;
    }

    const shuffledFriends = shuffleArray(allFriends);
    
    const drawResult = {};

    shuffledFriends.forEach((giver, index) => {
        const receiverIndex = (index + 1) % shuffledFriends.length;
        drawResult[giver] = shuffledFriends[receiverIndex];
    });

    return drawResult;
}
