const choicesContainer = document.getElementById("choicesContainer");

$.getJSON('database.JSON', function (dogs) {
    let choice1 = dogs[Math.floor(Math.random() * 1001)];
    let choice2 = dogs[Math.floor(Math.random() * 1001)];
    
    let choice1Container = document.createElement("div");
    let choice2Container = document.createElement("div");

    let choice1ContainerLink = document.createElement("a");
    let choice2ContainerLink = document.createElement("a");

    choice1Container.style.backgroundImage = 'url(' + choice1 + ')';
    choice2Container.style.backgroundImage = 'url(' + choice2 + ')';

    choice1ContainerLink.href = '#';
    choice2ContainerLink.href = '#';

    choice1ContainerLink.setAttribute('onclick', "window.location.reload(true)");
    choice2ContainerLink.setAttribute('onclick', "window.location.reload(true)");

    choice1ContainerLink.appendChild(choice1Container);
    choice2ContainerLink.appendChild(choice2Container);
    choicesContainer.appendChild(choice1ContainerLink);
    choicesContainer.appendChild(choice2ContainerLink);
});