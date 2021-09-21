let singBtn = document.querySelector('button')

singBtn.addEventListener('click', function () {
    let friends = ["Michelle", "Pat", "Bob", "Tim", "Mya"];
    
    for (i = 0; i < friends.length, i++;) {
        let friendDiv = document.createElement('div');
        friendDiv.classList.add('friend');
        let friendH3 = document.createElement('h3');

        friendH3.textContext = friends[i];
        friendH3.classList(friendH3);
        document.body.appendChild(friendDiv);

    
    };
    

});

















