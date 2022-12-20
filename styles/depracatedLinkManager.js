//LINK REMOVAL HANDLER
var deleteLinkDivs = document.getElementsByClassName("deleteLinkDiv");
for (i in deleteLinkDivs) {
    //Event handler onclick for the trash bin icons that remove a link.
    deleteLinkDivs[i].onclick = function (e) {
        var linkSpaceElement = e.currentTarget.parentElement;
        var linkContainerComponents = linkSpaceElement.children;

        //First, we'll hide the selected link's information from the user.
        for (i in linkContainerComponents) {
            //We only need to hide the DOM elements, so we have to avoid handling other objects to prevent errors.
            if (typeof(linkContainerComponents[i]) == "object" ) 
                linkContainerComponents[i].style.visibility = "hidden";
        }
        
        //This timeout will send an HTTP request that will process the selected link's removal from the database.
        var waitingTime = 3000;
        var removeLinkTimeout = setTimeout(function () {
            //First, we'll change the route of the form so that the data is sent with linkmanager and delete as $params[1] and $params[2] respectively.
            linkSpaceElement.parentElement.action = "{{WEBBASE}}Link/linkmanager/delete/";
            // linkSpaceElement.parentElement.submit();
        }, waitingTime);
        
        //While the timeout is already on, we'll show the user an "undo" button that will enable them to cancel the request before it is sent.
        appendUndoButton(linkSpaceElement, removeLinkTimeout, linkContainerComponents, waitingTime);
    }
}
//This function will handle the creation and addition of the undo button and its event listeners.
function appendUndoButton(containerNode, timeout, elementsToRecover, waitingTime) {
    //Button itself
    var undoButton = document.createElement("span");
    undoButton.classList.add("material-symbols-outlined");
    undoButton.classList.add("undoRemoveButton");
    undoButton.innerText = "Undo";
    containerNode.appendChild(undoButton);

    //When clicked, it'll cancel the link removal timeout.
    undoButton.addEventListener("click", function (e) { 
        //We'll stop the timeout that would otherwise send an HTTP request to process the removal.
        window.clearTimeout(timeout);
        
        //We'll make the link container elements visible again.
        for (i in elementsToRecover) {
            //We only need to hide the DOM elements, so we have to avoid handling other objects to prevent errors.
            if (typeof(elementsToRecover[i]) == "object" ) 
                elementsToRecover[i].style.visibility = "visible";
        }
        //We remove the countdown display and undo button (important to do it in this order!).
        e.currentTarget.nextElementSibling.remove();
        e.currentTarget.remove();
    });

    //Countdown display
    var countdownSpan = document.createElement("span");
    countdownSpan.classList.add("undoRemoveCountdown");
    countdownSpan.innerText = 2;
    containerNode.appendChild(countdownSpan);
    
    //Countdown display updater
    setInterval(function (e) {
        waitingTime -= 100;
        countdownSpan.innerText = parseInt(waitingTime/1000) + "s";
            //To round it to 1 decimal always.
        // countdownSpan.innerText = (Math.round((waitingTime/1000) * 100) / 100).toFixed(1) + "s left";
    }, 100);

    //We'll also apply hover effects to the button just for fun.
    undoButton.onmouseover = function (e) {
        e.currentTarget.style.transform = "translate(-50%,-50%) scale(1.3)";
    }
    undoButton.onmouseout = function (e) {
        e.currentTarget.style.transform = "translate(-50%,-50%) scale(1)";
    }
    undoButton.onmousedown = function (e) {
        e.currentTarget.style.transform = "translate(-50%,-50%) scale(0.8)";
    }
}



var deleteLinkDivs = document.getElementsByClassName("deleteLinkDiv");
for (div in deleteLinkDivs) {
    if (typeof(deleteLinkDivs[div]) == 'object') {
        deleteLinkDivs[div].onmouseover = function (e) {
            e.currentTarget.previousElementSibling.classList.add("shiver");
            // e.currentTarget.previousElementSibling.style.backgroundColor = "black";
            // e.currentTarget.previousElementSibling.style.boxShadow = "0px 0px 20px 5px #F70000";
            e.currentTarget.previousElementSibling.style.boxShadow = "0px 0px 0px 4px #F70000";
        };
        deleteLinkDivs[div].onmouseout = function (e) {
            e.currentTarget.previousElementSibling.classList.remove("shiver");
            // e.currentTarget.previousElementSibling.style.backgroundColor = "red";
            e.currentTarget.previousElementSibling.style.boxShadow = "";
        };
    }
}