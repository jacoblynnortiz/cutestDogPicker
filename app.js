const choicesContainer = document.getElementById("choicesContainer");

$.getJSON('database.JSON', function (dogs) {
    
    let choice1Container = document.createElement("div");
    let choice2Container = document.createElement("div");

    let choice1ContainerLink = document.createElement("a");
    let choice2ContainerLink = document.createElement("a");

    choice1Container.style.backgroundImage = 'url("https://dog.ceo/api/breeds/image/random")';
    choice2Container.style.backgroundImage = 'url("https://dog.ceo/api/breeds/image/random")';

    choice1ContainerLink.href = '#';
    choice2ContainerLink.href = '#';

    choice1ContainerLink.setAttribute('onclick', "window.location.reload(true)");
    choice2ContainerLink.setAttribute('onclick', "window.location.reload(true)");

    choice1ContainerLink.appendChild(choice1Container);
    choice2ContainerLink.appendChild(choice2Container);
    choicesContainer.appendChild(choice1ContainerLink);
    choicesContainer.appendChild(choice2ContainerLink);
});
