
// set top position for section before footer
function setStickyTop() {
    var pos = Math.max(((document.getElementsByClassName("discoverMoreWrapper")[0].offsetHeight * (1)) - (60) - (window.innerHeight*0.5)) ,0);

    setTimeout(() => {
        document.getElementById("frequentlyAskedGroups").style.top = -pos + "px";
    }, 100);

}


// functions
function toggleFAQ(card, groupSelector) {
    var frequentlyAskedCon = card.closest(groupSelector);

    if (frequentlyAskedCon) {
        var quesCards = frequentlyAskedCon.querySelectorAll('.quesCard');
        quesCards.forEach(function (quesCard) {
            if (quesCard !== card) {
                quesCard.classList.add('close');
                quesCard.classList.remove('open');
            }
        });
    }

    if (card.classList.contains('open')) {
        card.classList.remove('open');
        card.classList.add('close');
    }
    else{
        card.classList.remove('close');
        card.classList.add('open');

    }

    setStickyTop();
}



function toggleFAQGroup(button, groupSelector) {
    var frequentlyAskedCon = button.closest(groupSelector);

    if (frequentlyAskedCon) {
        frequentlyAskedCon.classList.toggle('active');
    }

    setStickyTop();
}



if(!isMobile()){
    function scrollToElement(elementId, button) {
        var element = document.getElementById(elementId);
    
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
    
        var frequentlyAskedCon = button.closest('.FAQMenu');
    
        if (frequentlyAskedCon) {
            var buttons = frequentlyAskedCon.querySelectorAll('button');
            buttons.forEach(function (btn) {
                btn.classList.remove('active');
            });
        }
    
        if (button) {
            button.classList.add('active');
        }
    }
    
    function updateActiveSection() {
        var sections = document.querySelectorAll('.FAQGroup');
        var buttons = document.querySelectorAll('.FAQMenu button');
    
        sections.forEach(function(section, index) {
            var rect = section.getBoundingClientRect();
            var offset = window.innerHeight / 2;
    
            if (rect.top < offset && rect.bottom > offset) {
                // Remove "active" class from all buttons
                buttons.forEach(function(btn) {
                    btn.classList.remove('active');
                });
    
                // Add "active" class to the corresponding button
                buttons[index].classList.add('active');
            }
        });
    }
    
    // Attach scroll event listener to update the active section on scroll
    window.addEventListener('scroll', updateActiveSection);
    
    // Initial update to set the active section when the page loads
    updateActiveSection();
}

setStickyTop();