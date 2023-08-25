const choicesContainer = document.getElementById("choicesContainer");

    $.getJSON('https://dog.ceo/api/breeds/image/random', function (choice1Picker) {
        let choice1 = choice1Picker.message;
    
    let choice1Container = document.createElement("div");

    let choice1ContainerLink = document.createElement("a");

    choice1Container.style.backgroundImage = 'url('+choice1+')';
    choice1ContainerLink.href = '#';

    choice1ContainerLink.setAttribute('onclick', "window.location.reload(true)");

    choice1ContainerLink.appendChild(choice1Container);
    choicesContainer.appendChild(choice1ContainerLink);
        });
    
    $.getJSON('https://dog.ceo/api/breeds/image/random', function (choice2Picker) {
    let choice2 = choice2Picker.message;

    let choice2Container = document.createElement("div");

    let choice2ContainerLink = document.createElement("a");

    choice2Container.style.backgroundImage = 'url('+choice2+')';

    choice2ContainerLink.href = '#';

    choice2ContainerLink.setAttribute('onclick', "window.location.reload(true)");

    choice2ContainerLink.appendChild(choice2Container);
    choicesContainer.appendChild(choice2ContainerLink);
    });
