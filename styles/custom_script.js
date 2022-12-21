//ctrl+k ctrl+j --> per desplegar les seccions.
//ctrl+k ctrl+0 --> per plegar les seccions.

// #region SIDE MENU AND HEADER
document.getElementById("toprightbtn").onclick = function (e) {
    e.preventDefault();
    document.getElementById('drawmenu').classList.add('is-visible');
    document.getElementById('drawmenu').ariaHidden = false;
    document.querySelector('.mdl-layout__obfuscator').classList.add('is-visible');
}

// #endregion

// #region NIGHTMODE

//This will control if the nightmode should be changed automatically according to the client's time.
// var autoNightmode = true;
//Date Object instance
var today = new Date();

document.getElementById('nightmode').onclick = function (e) {
    e.preventDefault();
    nightModeSwitch();
}

//This will check the client's time every 60 seconds and switch the nightmode automatically in case the automatic mode is enabled.
setInterval(function () {
    autoNightmode = document.getElementById('autoNightmode').checked;
    console.log(autoNightmode) //TEST
    if (autoNightmode) {
        var h = today.getHours();
        if (h >= 19 || h >= 0 && h < 7) setNightmode();
        else if (h >= 7 && h < 19) removeNightmode();
    }
}, 60000);
function nightModeSwitch() {
    if (!nightmode) {
        setNightmode();
        setCookie("nightmode", "on", 1);
    }
    else {
        removeNightmode();
        setCookie("nightmode", "off", 1);
    }
}

function setNightmode() {
    var r = document.querySelector(':root');
    r.style.setProperty('--primary', 'var(--pnight)');
    r.style.setProperty('--body', 'var(--hnight)');
    r.style.setProperty('--secundary', 'var(--snight)');
    r.style.setProperty('--terciary', 'var(--tnight)');
    r.style.setProperty('--textA', 'var(--anight)');
    r.style.setProperty('--textB', 'var(--bnight)');

    document.getElementById('nightmodetext').innerText = 'dark_mode';
    nightmode = true;
}
function removeNightmode() {
    var r = document.querySelector(':root');
    r.style.setProperty('--primary', 'var(--pday)');
    r.style.setProperty('--body', 'var(--hday)');
    r.style.setProperty('--secundary', 'var(--sday)');
    r.style.setProperty('--terciary', 'var(--tday)');
    r.style.setProperty('--textA', 'var(--aday)');
    r.style.setProperty('--textB', 'var(--bday)');

    document.getElementById('nightmodetext').innerText = 'light_mode';
    nightmode = false;
}
// #endregion

// #region NEW LINK FORM
if (document.querySelector("#addLinkIcon") !== null) {

    var today = new Date();
    document.getElementById('newDate').valueAsDate = today;

    document.querySelector("#addLinkIcon").onclick = function (e) {
        e.preventDefault();
        document.getElementById('drawmenu').classList.remove('is-visible');
        document.getElementById('drawmenu').ariaHidden = true;
        document.querySelector('#newlink').classList.remove('add-hide');
        document.querySelector('.mdl-layout__obfuscator').classList.add('is-visible');
    }
}
if (document.querySelector('#close-addLink') !== null) {
    document.querySelector('#close-addLink').onclick = function (e) {
        e.preventDefault();
        document.querySelector('#newlink').classList.add('add-hide');
        document.querySelector('.mdl-layout__obfuscator').classList.remove('is-visible');

    }
}

// #endregion

// #region REGISTRATION FORM
//Comportament botó Registre
if (document.querySelector(".signup-button") !== null) {

    var today = new Date();
    document.getElementById('signup_date').valueAsDate = today;

    document.querySelector(".signup-button").onclick = function (e) {
        e.preventDefault();
        document.getElementById('drawmenu').classList.remove('is-visible');
        document.getElementById('drawmenu').ariaHidden = true;
        document.querySelector('#signup').classList.remove('signup-hide');
        document.querySelector('.mdl-layout__obfuscator').classList.add('is-visible');
    }
}

if (document.querySelector('.close-signup') !== null) {
    document.querySelector('.close-signup').onclick = function (e) {
        e.preventDefault();
        document.querySelector('#signup').classList.add('signup-hide');
        document.querySelector('.mdl-layout__obfuscator').classList.remove('is-visible');

    }
}
// #endregion

// #region QUICKADD EVENT LISTENERS
if (document.getElementById("quickAdd") !== null) {
    document.getElementById("quickAdd").onclick = function () {
        today = new Date();
        document.getElementById("quickAddDate").valueAsDate = today;

        // document.querySelector('.quickAddContainer').classList.remove("quickadd-hide");
        document.querySelector('.quickAddContainer').classList.remove("quickadd-hide");
    }
}
if (document.getElementById("close-quickAdd") !== null) {
    document.getElementById("close-quickAdd").onclick = function () {
        document.querySelector('.quickAddContainer').classList.add("quickadd-hide");
        // document.querySelector('.quickAddContainer').classList.add("quickadd-hide");
    }
}
// #endregion

// #region COOKIE RELATED FUNCTIONS
//To create a cookie from Javascript
function setCookie(name, value, daysItWillLast) {
    // Encode value in order to escape semicolons, commas, and whitespace
    var cookie = name + "=" + encodeURIComponent(value);

    if (typeof daysItWillLast === "number") {
        //Sets the max-age attribute so that the cookie expires after the specified number of days.
        cookie += "; max-age=" + (daysItWillLast * 24 * 60 * 60);

        //Makes the cookie available to the entire context of the website.
        cookie += "; path=/";
        document.cookie = cookie;
    }
}

//To read a cookie from Javascript
function getCookie(name) {
    // We store all individual name=value pairs in an array by using the split method.
    var cookieArray = document.cookie.split(";");

    // We loop through the array elements
    for (var i = 0; i < cookieArray.length; i++) {
        var cookiePair = cookieArray[i].split("=");

        // We remove the whitespace at the beginning of the cookie name and compare it with the given string.
        if (name == cookiePair[0].trim()) {
            // We decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }
    // We return null if not found
    return null;
}
// #endregion

// #region NIGHTMODE RELATED COOKIES BEHAVIOUR 
//This event listener triggers every time there's a change on the autoNightmode toggle. It'll make sure a cookie is generated every time the user clicks on it so that the value they selected is kept for a day. The selection will be kept even if they close the navigation session.
document.getElementById("autoNightmode").onchange = function () {
    var autoNightmodeState = document.getElementById('autoNightmode').checked;


    if (autoNightmodeState) {
        setCookie("autoNightmode", "on", 1);
        º("autoNightmode").parentElement.MaterialSwitch.on();
    }
    else if (!autoNightmodeState) {
        setCookie("autoNightmode", "off", 1);
        º("autoNightmode").parentElement.MaterialSwitch.off();
    }
}

//This function will check the nightmode related cookies. If they don't exist, autoNightmode will be activated by default. But if it's defined, the value that had been selected by the user will prevail.
window.onload = function () {

    var autoNightmodeCookie = getCookie("autoNightmode");
    var nightmodeCookie = getCookie("nightmode");
    var sortMethodCookie = getCookie("sort");

    if (autoNightmodeCookie != null) {
        if (autoNightmodeCookie == "off") {
            º("autoNightmode").parentElement.MaterialSwitch.off();
        }
        else if (autoNightmodeCookie == "on") {
            º("autoNightmode").parentElement.MaterialSwitch.on();
        }

        // (nightmodeCookie != null) ? nightmode = nightmodeCookie : nightmode = false;

        //if the user has a nightmode cookie stored, we'll use it to keep their selection. If not, nightmode will be disabled by default.
        if (nightmodeCookie != null) {
            (nightmodeCookie == "on") ? setNightmode() : removeNightmode();
        }
    }
    else { //In case there's no cookie, the default mode will be with nightmode activated.
        autoNightmode = true;
        document.getElementById('autoNightmode').checked = true;

        //Here we'll force the nightmode selection to be applied directly after loading the page.
        var h = today.getHours();
        if (h >= 19 || h >= 0 && h < 7) setNightmode();
        else if (h >= 7 && h < 19) removeNightmode();
    }

    // LANGUAGE COOKIES
    resetLanguageFromCookie();

    // SORT COOKIE
    if (document.getElementById('sortDropmenu') != null) {
        if (sortMethodCookie != null) {
            document.getElementById('sortDropmenu').value = sortMethodCookie;
        }
        else
            document.getElementById('sortDropmenu').value = 'name';
    }
}
// #endregion

// #region LINK CONTAINERS ANIMATIONS
function º(id) {return document.getElementById(id);}
var nameDivHeight;

//This method will hide the additional information on all the links on the page.
function shrinkAllContainers() {
    var linkContainers = document.getElementsByClassName("linkContainer");
    for (var i = 0; i < linkContainers.length; i++) {
        linkContainers[i].style.height = "60px";
        linkContainers[i].style.overflow = "hidden";
    }
}
//This function will store the original height of the link container template upon loading the page. This will be useful in case its size varies due to display flex properties.
function getNameDivHeight() {
    var linkContainerHeight;
    if (º("linkContainer0") !== undefined) linkContainerHeight = parseFloat(window.getComputedStyle(º("linkContainer0")).getPropertyValue("height"));

    var linkNameDivs = document.getElementsByClassName("linkNameDiv");
    for (var i = 0; i < linkNameDivs.length; i++) {
        linkNameDivs[i].style.maxHeight = linkContainerHeight;
    }
    return linkContainerHeight;
}

//Search bar filter event listener.
//This one currently checks the links from the list by name.
º("searchbar").oninput = function () {
    var namePlaceholders = document.getElementsByClassName("linkNamePlaceholder");
    var currentFilter = º("searchbar").value;

    //When the search bar contains text:
    if (currentFilter != "") {
        for (i in namePlaceholders) {
            if ( typeof(namePlaceholders[i]) == 'object')  {
                //If the first element after the linksListBox is of type FORM, it means we're in the Link Manager view.
                if (namePlaceholders[i].parentElement.parentElement.parentElement.parentElement.parentElement.nodeName == "FORM") {
                    if (namePlaceholders[i].innerText !== undefined) { //In case there're links without a name.
                        //When a link contains the searched text:
                        if ( namePlaceholders[i].value.toLowerCase().includes(currentFilter.toLowerCase()) ) {
                            namePlaceholders[i].parentElement.parentElement.parentElement.parentElement.parentElement.hidden = false;
                            namePlaceholders[i].parentElement.parentElement.parentElement.parentElement.parentElement.hidden = false;
                        }
                        //When a link doesn't contain the searched text:
                        else {
                            namePlaceholders[i].parentElement.parentElement.parentElement.parentElement.parentElement.hidden = true;
                        }
                    }
                }
                //This case is for the mainPage.html view.
                else {
                    if (namePlaceholders[i].innerText !== undefined) { //In case there're links without a name.
                        //When a link contains the searched text:
                        if ( namePlaceholders[i].innerText.toLowerCase().includes(currentFilter.toLowerCase()) ) {
                            namePlaceholders[i].parentElement.parentElement.parentElement.parentElement.hidden = false;
                            namePlaceholders[i].parentElement.parentElement.parentElement.parentElement.hidden = false;
                        }
                        //When a link doesn't contain the searched text:
                        else {
                            namePlaceholders[i].parentElement.parentElement.parentElement.parentElement.hidden = true;
                        }
                    }
                }
            }
        }
    }
    //When the search bar is empty:
    else {
        //Link Manager view.
        if (namePlaceholders[0].parentElement.parentElement.parentElement.parentElement.parentElement.nodeName == "FORM") {
            for (i in namePlaceholders) {
                if ( typeof(namePlaceholders[i]) == 'object' ) 
                    namePlaceholders[i].parentElement.parentElement.parentElement.parentElement.parentElement.hidden = false;
            }
        }
        //This case is for the mainPage.html view.
        else {
            for (i in namePlaceholders) {
                if ( typeof(namePlaceholders[i]) == 'object' )
                    namePlaceholders[i].parentElement.parentElement.parentElement.parentElement.hidden = false;
            }
        }
    }
}

    //Upon window load, we'll apply an onclick event listener to all boxes.
var expandShrinkButtonDivs = document.getElementsByClassName("expandShrinkButtonDiv");
for (var i = 0; i < expandShrinkButtonDivs.length; i++) {
    // var linkContainerID = "linkContainer" + i;
    // var linkNameDivID = "linkNameDiv" + i;
    // var expandShrinkButtonDivID = "expandShrinkButtonDiv" + i;

    expandShrinkButtonDivs[i].addEventListener("click", function (e) { 

        if ( e.currentTarget.parentElement.classList.contains("shrinked") ) {
            e.currentTarget.parentElement.classList.remove("shrinked");
            e.currentTarget.parentElement.classList.add("expanded");

            e.currentTarget.firstElementChild.classList.remove("downArrow");
            e.currentTarget.firstElementChild.classList.add("upArrow");
        }
        else if ( e.currentTarget.parentElement.classList.contains("expanded") ) {
            e.currentTarget.parentElement.classList.remove("expanded");
            e.currentTarget.parentElement.classList.add("shrinked");

            e.currentTarget.firstElementChild.classList.remove("upArrow");
            e.currentTarget.firstElementChild.classList.add("downArrow");
        }
    });
}
// #endregion

// #region RATING COLORS
var ratingSpans = document.getElementsByClassName("ratingSpan");
for (ratingSpan in ratingSpans) {
    var element = ratingSpans[ratingSpan];
    var colour = null;
    if (element.innerText == "1") { colour = "rgb(205, 127, 50)"; } //bronze colour.
    else if (element.innerText == "2") { colour = "rgb(211,211,211)"; } //silver colour.
    else if (element.innerText == "3") { colour = "#FFD700"; } //gold colour.
    else if (element.innerText == "4") { colour = "	rgb(229, 228, 226)"; } //platinum colour.
    else if (element.innerText == "5") { colour = "#b9f2ff"; } //diamond colour.

    if (colour != null) {
        ratingSpans[ratingSpan].nextElementSibling.nextElementSibling.style.color = colour;
        ratingSpans[ratingSpan].nextElementSibling.nextElementSibling.style.backgroundColor = "var(--secondary)"
    }
}
// #endregion

// #region LINK MANAGER
if (document.getElementById("addLinkIcon") != null) 
    document.getElementById("addLinkIcon").onmouseover = function (e) {
        e.currentTarget.style.transform = "rotate(90deg)";
    }
if (document.getElementById("addLinkIcon") != null) 
    document.getElementById("addLinkIcon").onmouseout = function (e) {
        e.currentTarget.style.transform = "rotate(-90deg)";
    }
if (document.getElementById("addLinkIcon") != null) 
    document.getElementById("addLinkIcon").onmouseup = function (e) {
        e.currentTarget.style.fontSize = "5em";
    }
if (document.getElementById("addLinkIcon") != null) 
    document.getElementById("addLinkIcon").onmousedown = function (e) {
        e.currentTarget.style.fontSize = "4.5em";
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

// CUSTOM CATETGORY BUTTON HANDLERS
if ( document.getElementById("customCategoryButton") != null ) {
    // To open the form:
    document.getElementById("customCategoryButton").onclick = function () {
        if (document.getElementById("newCustomCategory") != null ) {
            var newCategory = document.getElementById("newCustomCategory");
            newCategory.style.visibility = "visible";
            newCategory.style.width = "300px";
            newCategory.style.height = "200px";
        }

    }
    // To close the form:
    document.getElementById("close-addCustomCategory").onclick = function () {
        var newCategory = document.getElementById("newCustomCategory");
        //After the animation is complete, we'll hide the form.
        setTimeout( function () { newCategory.style.visibility = "hidden"; }, 100);
        newCategory.style.width = "0px";
        newCategory.style.height = "0px";
    }
}




//LINK ADD FORM ONSUBMIT EVENT LISTENER
if (document.getElementById("newLinkForm") != null) {
    document.getElementById("newLinkForm").onsubmit = function (e) {
        var form = e.currentTarget;
        var categoryInputs = form.getElementsByClassName("categoryIDInput"); //Those will be the input tags that contain both the checked state of each category label and its ID.
        
        var categoryIDsArray = [];
        
        //Here we'll get the data of each checked categoryIDInput field and store its value on the categoryIDsArray array.
        for (i in categoryInputs) {
            //We'll skip the non DOM elements.
            if ( typeof(categoryInputs[i]) == 'object' ) {
                if (categoryInputs[i].checked) {
                    // alert(typeof(categoryInputs[i]) + categoryInputs[i].value + "-on");
                    //Since the General category (with ID = 1) will be added automatically on the database, we will not add it to the array.
                    if (categoryInputs[i].value != 1) categoryIDsArray.push(categoryInputs[i].value);
                }
            }
        }
        
        //Input form element generation and filling it with data.
        var categoryIDs = document.createElement("input");
        categoryIDs.setAttribute("name", "categoryIDs");
        categoryIDs.setAttribute("type", "text");
        categoryIDs.value = categoryIDsArray.join(";"); //We'll serialize the values of the array separating them by ";" and converting them to string.
        
        //The POST variable name of this element on the server side will be "categoryIDs".
        form.appendChild(categoryIDs);        
    }
}

// NEW CATEGORY FORM ONSUBMIT EVENT LISTENER (NOT NEEDED BECAUSE WE CURRENTLY DON'T STORE THE PUBLICATION DATE FOR CATEGORIES)
// if ( document.getElementById("newCustomCategoryForm") != null ) {
//     document.getElementById("newCustomCategoryForm").onsubmit = function (e) {
//         var newCategoryForm = e.currentTarget;

//         //Last time edited form field. We need to create it, fill it and append it to the form automatically before submission.
//         today = new Date();
//         var publicationDateField = document.createElement("input");
//         publicationDateField.setAttribute("name", "publicationDate");
//         publicationDateField.setAttribute("type", "date");
//         // publicationDateField.value = today;
//         publicationDateField.valueAsDate = today;
//         newCategoryForm.appendChild(publicationDateField);
//     }
// }

// #endregion

// #region Sort Select

document.getElementById('sortDropmenu').addEventListener('change', function(e) {
    document.getElementById('sortselect').submit()
});

// #endregion


//WORKAROUND FOR THE TAB ROTATION PROBLEMS
window.onkeydown = function (e) {
    if (e.key == "Tab") {
        if (document.activeElement.id == "toprightbtn") {
            e.preventDefault();
            document.getElementById("nightmode").focus();
        }
        else if ( document.activeElement.classList.contains("uiText_loginSubmit") ) {
            e.preventDefault();
            document.getElementById("username_login").focus();
        }
        else if ( document.activeElement.classList.contains("uiText_newUserFormSubmit") ) {
            e.preventDefault();
            document.getElementById("username_signup").focus();
        }
        else if ( document.activeElement.classList.contains("uiText_logOutButton") ) {
            e.preventDefault();
            document.getElementsByClassName("uiText_linkManagerButton")[0].focus();
        }
        else if ( document.activeElement.id == "submitNewCustomCategory" ) {
            e.preventDefault();
            document.getElementById("newCustomCategory_name").focus();
        }
        else if ( document.activeElement.classList.contains("uiText_addFormSubmit") ) {
            e.preventDefault();
            document.getElementById("new_url").focus();
        }
        else if ( document.activeElement.classList.contains("uiText_quickAddFormSubmit") ) {
            e.preventDefault();
            document.getElementById("name_quick").focus();
        }
    }
}