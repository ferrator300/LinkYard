//ACCESSIBILITY LOCK SWAP HANDLER
    var locks = document.getElementsByClassName("material-symbols-outlined lock");
    
    for (i in locks) {
        //Lock click event listener
        locks[i].onclick = function (e) {
            var lockSpan = e.currentTarget;
            //If the accessibility is public, we switch it to private on both the lock and the hidden input field associated to it that will bring the value to the request.
            if (lockSpan.classList.contains("public")) {
                lockSpan.classList.remove("public");
                lockSpan.classList.add("private");
                lockSpan.innerText = "lock";
                
                lockSpan.nextElementSibling.value = "private"; //This modifies the hidden input field that stores the data for sending a request.
            }
            //If the accessibility is private, we do the opposite.
            else if (lockSpan.classList.contains("private")) {
                lockSpan.classList.remove("private");                
                lockSpan.classList.add("public");
                lockSpan.innerText = "lock_open";

                lockSpan.nextElementSibling.value = "public"; //This modifies the hidden input field that stores the data for sending a request.
            }
        }

        //Lock hover animation
        locks[i].onmouseover = function (e) {
            e.currentTarget.style.transform = "scale(1.2)";
        }
        locks[i].onmouseout = function (e) {
            e.currentTarget.style.transform = "scale(1)";
        }
    }



    var removeCategoryChipButtons = document.getElementsByClassName("removeCategoryChipButton");
    for (i in removeCategoryChipButtons) {
        removeCategoryChipButtons[i].onclick = function (e) {
            e.currentTarget.parentElement.parentElement.remove();
        }
    }

    // CATEGORIES SELECTION MENUS
    var categoriesSelectionMenuCloseButtons = document.getElementsByClassName("close-categoriesSelectionMenu");

    for (i in categoriesSelectionMenuCloseButtons) {
        categoriesSelectionMenuCloseButtons[i].onclick = function (e) {
            e.preventDefault();

            element = e.currentTarget;
            // e.currentTarget.parentElement.classList.add('add-hide');
            // document.querySelector('.mdl-layout__obfuscator').classList.remove('is-visible');
            setTimeout(function () { element.parentElement.style.visibility = "hidden"; }, 350);
            element.parentElement.style.width = "0px";
            element.parentElement.style.height = "0px";
        }
    }

    //ADDING A CATEGORY TO A LINK WHEN UPDATING
    var categorySelectionMenuChips = document.getElementsByClassName("categorySelectionMenuChip");

    for (i in categorySelectionMenuChips) {
        categorySelectionMenuChips[i].onclick = function (e) {
            var nameChip = e.currentTarget;
            var IDChip = nameChip.nextElementSibling;
            var publisherUsernameChip = IDChip.nextElementSibling;

            var linkSpace = nameChip.parentElement.parentElement.parentElement.parentElement;
            var categoriesDiv = linkSpace.getElementsByClassName("categoriesDiv")[0];
            var plusSignButton = categoriesDiv.lastElementChild; //This is the button dedicated to trigger the categories selection menu.


            //In order to prevent the same category from being added multiple times, we'll only allow the currently selected category to be added if it isn't already on the list.
            if (!categoryIsAlreadyThere(IDChip.innerText, categoriesDiv)) {
                //First, we need to remove the plus sign button to insert the new category right before it.
                plusSignButton.remove();

                //Now, we need to add the new category to the list.
                var mdlChip = document.createElement("span");
                mdlChip.classList.add("mdl-chip");

                //Now we'll create the name, cancel icon and ID elements and append them to the element we just created (mdlChip).
                    //Name span
                var categoryNameSpan = document.createElement("span");
                categoryNameSpan.classList.add("mdl-chip__text");
                categoryNameSpan.innerText = nameChip.innerText;
                mdlChip.appendChild(categoryNameSpan);

                    //Cancel button
                var deleteButton = document.createElement("button");
                deleteButton.classList.add("mdl-chip__action");
                var cancelIcon = document.createElement("i");
                cancelIcon.classList.add("material-icons");
                cancelIcon.classList.add("removeCategoryChipButton");
                cancelIcon.innerText = "cancel";
                deleteButton.appendChild(cancelIcon);
                    //Onclick event listener for the delete button. (it has to remove itself)
                deleteButton.addEventListener( "click", function (e) { e.currentTarget.parentElement.remove(); })
                mdlChip.appendChild(deleteButton);
                
                    //ID hidden span
                var categoryIDSpan = document.createElement("span");
                categoryIDSpan.classList.add("categoryID");
                categoryIDSpan.innerText = IDChip.innerText;
                categoryIDSpan.style.visibility = "hidden";
                mdlChip.appendChild(categoryIDSpan);


                //We'll now append mdlChip on the categories div.
                categoriesDiv.appendChild(mdlChip);

                //And finally, we'll add the plus sign button again.
                categoriesDiv.appendChild(plusSignButton);
            }
            

        }
    }

    //This function will check if certain category is already on the categories' list or not.
    function categoryIsAlreadyThere(idToAdd, categoriesDiv) {
        var categoryIDs = categoriesDiv.getElementsByClassName("categoryID");
        var categoryIsAlreadyThere = false;
        for (i in categoryIDs) {
            // if (categoryIDs[i].innerText == idToAdd.innerText) categoryIsAlreadyThere = true;
            if (typeof(categoryIDs[i]) == 'object' ){
                categoryIDs[i].style.visibility = "visible"; //We need to set the visibility to visible in order to read the span's value.
                if (categoryIDs[i].innerText == idToAdd) categoryIsAlreadyThere = true;
                categoryIDs[i].style.visibility = "hidden";
            }
        }

        return categoryIsAlreadyThere;
    }


    // ADD CATEGORY BUTTON HANDLER
    var addCategoryButtons = document.getElementsByClassName("addCategoryButton");

    for (i in addCategoryButtons) {
        //Button onclick event listener: it make the category selection menu visible.
        addCategoryButtons[i].onclick = function (e) {
            var button = e.currentTarget;
            var linkSpace = button.parentElement.parentElement.parentElement.parentElement;
            var categoriesSelectionMenu = linkSpace.getElementsByClassName("categoriesSelectionMenu")[0]; 

            categoriesSelectionMenu.style.visibility = "visible";
            categoriesSelectionMenu.style.height = "65px";
            categoriesSelectionMenu.style.width = "50%";
        }
    }

    // NEW CUSTOM CATEGORY BUTTON AND FORM
    
    // Custom category button event listener
    if ( document.getElementById("customCategoryButton") != null ) {
        document.getElementById("customCategoryButton").onmouseover = function (e) {
            var button = e.currentTarget;

            button.style.transform = "scale(1.1)";
        }
        document.getElementById("customCategoryButton").onmouseout = function (e) {
            var button = e.currentTarget;

            button.style.transform = "";
        }
        document.getElementById("customCategoryButton").onmousedown = function (e) {
            var button = e.currentTarget;

            button.style.transform = "";
        }
        document.getElementById("customCategoryButton").onmouseup = function (e) {
            var button = e.currentTarget;

            button.style.transform = "scale(1.1)";
        }
    }