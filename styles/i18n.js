// var language = "ca";

// TEXT VARIABLES' DECLARATION
    //Link container
var uiText_fullLink;
var uiText_linkDescription;
var uiText_publishedBy;
    //Sorting menu
var uiText_sortName;
var uiText_sortRating;
var uiText_sortDate;
var uiText_sortUrl;
    //Side menu
var uiText_loginButton;
var uiText_loginSubmit;
var uiText_loginUsernameLabel;
var uiText_loginPasswordLabel;
var uiText_newUserButton;
var uiText_signUpButton;
var uiText_sideMenuWelcome;
var uiText_linkManagerButton;
var uiText_quickAddButton;
var uiText_logOutButton;
    //New User form
var uiText_newUserFormTitle;
var uiText_newUserFormUsernameLabel;
var uiText_newUserFormPasswordLabel;
var uiText_newUserFormRetypePasswordLabel;
var uiText_newUserFormNameLabel;
var uiText_newUserFormSurnameLabel;
var uiText_newUserFormEmailLabel;
var uiText_newUserFormSubmit;
    //Quick Add form
var uiText_quickAddFormTitle;
var uiText_quickAddFormName;
var uiText_quickAddFormUrl;
var uiText_quickAddFormSubmit;
    // Footer
var uiText_autoNightmodeLabel;
var uiText_legalNoticeLink;
    // Error page
var uiText_errorPageTitle;
var uiText_errorPageMainText;
var uiText_errorPageGoBackLink;
    //New Link Form
var uiText_addFormTitle;
var uiText_addFormURL;
var uiText_addFormName;
var uiText_addFormRating;
var uiText_addFormDescTitle;
var uiText_addFormDesc;
var uiText_addFormPrivate;
var uiText_addFormSubmit;
    //Link Manager
var uiText_linkManagerLinkName;
var uiText_newLinkButtonTooltip;
var uiText_customCategoryButtonTooltip;
    //Custom category form
var uiText_newCustomCategoryFormTitle;
var uiText_addCustomCategoryFormName;
var uiText_addFormSubmit;
    //Legal notice
var uiText_legalNoticeTitle;
var uiText_legalNoticeSubtitle;
var uiText_legalNotice;
var uiText_copyright;

//This function will add an inner text to a specified DOM element.
function setInnerTextOnElement(elementClassName, textVariable) {
    var elements = document.getElementsByClassName(elementClassName);
    for(element in elements) {
        elements[element].innerText = textVariable;
    }
}
//This function will change the value of a specified dom element.
function setValueOnElement(elementClassName, textVariable) {
    var elements = document.getElementsByClassName(elementClassName);
    for(element in elements) {
        elements[element].value = textVariable;
    }
}
//This function will add an inner HTML to a specified DOM element.
function setInnerHTMLOnElement(elementClassName, textVariable) {
    var elements = document.getElementsByClassName(elementClassName);
    for(element in elements) {
        elements[element].innerHTML = textVariable;
    }
}

function refillTextVariables(language) {
    if (language == "EN") {
            //Header
        uiText_fullLink = "Full link";
        uiText_linkDescription = "Description";
        uiText_publishedBy = "Published by ";
            //Sorting menu
        uiText_sortName = "Name";
        uiText_sortRating = "Rating";
        uiText_sortDate = "Publication date";
        uiText_sortUrl = "URL";
            //Side menu
        uiText_loginButton = "LOGIN";
        uiText_loginSubmit = "LOGIN";
        uiText_loginUsernameLabel = "USERNAME";
        uiText_loginPasswordLabel = "PASSWORD";
        uiText_newUserButton = "NEW USER?";
        uiText_signUpButton = "SIGN UP";
        uiText_sideMenuWelcome = "WELCOME";
        uiText_linkManagerButton = "LINK MANAGER";
        uiText_quickAddButton = "QUICK LINK";
        uiText_logOutButton = "LOG OUT";
            //New user form
        uiText_newUserFormTitle = "NEW USER";
        uiText_newUserFormUsernameLabel = "USERNAME";
        uiText_newUserFormPasswordLabel = "PASSWORD";
        uiText_newUserFormRetypePasswordLabel = "RETYPE PASSWORD";
        uiText_newUserFormNameLabel = "NAME";
        uiText_newUserFormSurnameLabel = "SURNAME";
        uiText_newUserFormEmailLabel = "EMAIL";
        uiText_newUserFormSubmit = "SIGN UP";
            //Quick Add form
        uiText_quickAddFormTitle = "QUICK LINK";
        uiText_quickAddFormName = "Name";
        uiText_quickAddFormUrl = "URL";
        uiText_quickAddFormSubmit = "ADD";
            //Footer
        uiText_autoNightmodeLabel = "AUTO";
        uiText_legalNoticeLink = "Legal notice";
            //Error page
        uiText_errorPageTitle = "Oops!";
        uiText_errorPageMainText = "Looks like there's something wrong with your page address. <br><br>If you would like to get in touch with us, you can do so via email at";
        uiText_errorPageGoBackLink = "Go back to LinkYard";
            //New Link Form
        uiText_addFormTitle = 'NEW LINK';
        uiText_addFormURL = 'FULL URL';
        uiText_addFormName = 'NAME';
        uiText_addFormRating = 'RATING';
        uiText_addFormDescTitle = 'DESCRIPTION';
        uiText_addFormDesc = '(optional) Here you can write information about the link.';
        uiText_addFormPrivate = 'PRIVATE';
        uiText_addFormSubmit = 'ADD';
            //Link Manager
        uiText_linkManagerLinkName = "Name: ";
        uiText_newLinkButtonTooltip = "Add a new link";
        uiText_customCategoryButtonTooltip = "Create a new custom category";
            //Custom category form
        uiText_newCustomCategoryFormTitle = "NEW CUSTOM CATEGORY";
        uiText_addCustomCategoryFormName = "Name";
        uiText_addFormSubmit = "ADD";
            //Legal notice
        uiText_legalNoticeTitle = "LEGAL NOTICE";
        uiText_legalNoticeSubtitle = "LAW ON INFORMATION SOCIETY SERVICES AND E-COMMERCE (Law 34/2002, July 11)";
        uiText_legalNotice = `
            <h2>Website Terms of Use</h2>

            <p class="customColour">Version 1.0</p>

            <p class="customColour">The <span class="customColour2">LinkYard</span> website located at http://www.<span class="customColour2">linkyard</span>.com is a copyrighted work belonging to <span class="customColour2">LINKYARD</span>. Certain features of the Site may be subject to additional guidelines, terms, or rules, which will be posted on the Site in connection with such features.</p>

            <p class="customColour">All such additional terms, guidelines, and rules are incorporated by reference into these Terms.</p>

            <p class="customColour">These Terms of Use described the legally binding terms and conditions that oversee your use of the Site. BY LOGGING INTO THE SITE, YOU ARE BEING COMPLIANT THAT THESE TERMS and you represent that you have the authority and capacity to enter into these Terms. YOU SHOULD BE AT LEAST 18 YEARS OF AGE TO ACCESS THE SITE. IF YOU DISAGREE WITH ALL OF THE PROVISION OF THESE TERMS, DO NOT LOG INTO AND/OR USE THE SITE.<p class="customColour">

            <p class="customColour">These terms require the use of arbitration Section 10.2 on an individual basis to resolve disputes and also limit the remedies available to you in the event of a dispute. These Terms of Use were created with the help of the <a href="https://www.termsofusegenerator.net">Terms Of Use Generator</a>.</p>


            <h2>Access to the Site</h2>

            <p class="customColour"><strong>Subject to these Terms.</strong> Company grants you a non-transferable, non-exclusive, revocable, limited license to access the Site solely for your own personal, noncommercial use.</p>

            <p class="customColour"><strong>Certain Restrictions.</strong> The rights approved to you in these Terms are subject to the following restrictions: (a) you shall not sell, rent, lease, transfer, assign, distribute, host, or otherwise commercially exploit the Site; (b) you shall not change, make derivative works of, disassemble, reverse compile or reverse engineer any part of the Site; (c) you shall not access the Site in order to build a similar or competitive website; and (d) except as expressly stated herein, no part of the Site may be copied, reproduced, distributed, republished, downloaded, displayed, posted or transmitted in any form or by any means unless otherwise indicated, any future release, update, or other addition to functionality of the Site shall be subject to these Terms.  All copyright and other proprietary notices on the Site must be retained on all copies thereof.</p>

            <p class="customColour">Company reserves the right to change, suspend, or cease the Site with or without notice to you.  You approved that Company will not be held liable to you or any third-party for any change, interruption, or termination of the Site or any part.</p>

            <p class="customColour"><strong>No Support or Maintenance.</strong> You agree that Company will have no obligation to provide you with any support in connection with the Site.</p>

            <p class="customColour">Excluding any User Content that you may provide, you are aware that all the intellectual property rights, including copyrights, patents, trademarks, and trade secrets, in the Site and its content are owned by Company or Company’s suppliers. Note that these Terms and access to the Site do not give you any rights, title or interest in or to any intellectual property rights, except for the limited access rights expressed in Section 2.1. Company and its suppliers reserve all rights not granted in these Terms.</p>

            <h2>User Content</h2>

            <p class="customColour"><strong>User Content.</strong> "User Content" means any and all information and content that a user submits to the Site. You are exclusively responsible for your User Content. You bear all risks associated with use of your User Content.  You hereby certify that your User Content does not violate our Acceptable Use Policy.  You may not represent or imply to others that your User Content is in any way provided, sponsored or endorsed by Company. Because you alone are responsible for your User Content, you may expose yourself to liability. Company is not obliged to backup any User Content that you post; also, your User Content may be deleted at any time without prior notice to you. You are solely responsible for making your own backup copies of your User Content if you desire.</p>

            <p class="customColour">You hereby grant to Company an irreversible, nonexclusive, royalty-free and fully paid, worldwide license to reproduce, distribute, publicly display and perform, prepare derivative works of, incorporate into other works, and otherwise use and exploit your User Content, and to grant sublicenses of the foregoing rights, solely for the purposes of including your User Content in the Site.  You hereby irreversibly waive any claims and assertions of moral rights or attribution with respect to your User Content.</p>

            <p class="customColour"><strong>Acceptable Use Policy.</strong> The following terms constitute our "Acceptable Use Policy":
            You agree not to use the Site to collect, upload, transmit, display, or distribute any User Content (i) that violates any third-party right or any intellectual property or proprietary right; (ii) that is unlawful, harassing, abusive, tortious, threatening, harmful, invasive of another’s privacy, vulgar, defamatory, false, intentionally misleading, trade libelous, pornographic, obscene, patently offensive, promotes racism, bigotry, hatred, or physical harm of any kind against any group or individual; (iii) that is harmful to minors in any way; or (iv) that is in violation of any law, regulation, or obligations or restrictions imposed by any third party.</p>

            <p class="customColour">In addition, you agree not to: (i) upload, transmit, or distribute to or through the Site any software intended to damage or alter a computer system or data; (ii) send through the Site unsolicited or unauthorized advertising, promotional materials, junk mail, spam, chain letters, pyramid schemes, or any other form of duplicative or unsolicited messages; (iii) use the Site to harvest, collect, gather or assemble information or data regarding other users without their consent; (iv) interfere with, disrupt, or create an undue burden on servers or networks connected to the Site, or violate the regulations, policies or procedures of such networks; (v) attempt to gain unauthorized access to the Site, whether through password mining or any other means; (vi) harass or interfere with any other user’s use and enjoyment of the Site; or (vi) use software or automated agents or scripts to produce multiple accounts on the Site, or to generate automated searches, requests, or queries to the Site.</p>

            <p class="customColour">We reserve the right to review any User Content, and to investigate and/or take appropriate action against you in our sole discretion if you violate the Acceptable Use Policy or any other provision of these Terms or otherwise create liability for us or any other person. Such action may include removing or modifying your User Content, terminating your Account in accordance with Section 8, and/or reporting you to law enforcement authorities.</p>
                
            <p class="customColour">If you provide Company with any feedback or suggestions regarding the Site, you hereby assign to Company all rights in such Feedback and agree that Company shall have the right to use and fully exploit such Feedback and related information in any manner it believes appropriate.  Company will treat any Feedback you provide to Company as non-confidential and non-proprietary.</p>

            <p class="customColour">You agree to indemnify and hold Company and its officers, employees, and agents harmless, including costs and attorneys’ fees, from any claim or demand made by any third-party due to or arising out of (a) your use of the Site, (b) your violation of these Terms, (c) your violation of applicable laws or regulations or (d) your User Content.  Company reserves the right to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate with our defense of these claims.  You agree not to settle any matter without the prior written consent of Company.  Company will use reasonable efforts to notify you of any such claim, action or proceeding upon becoming aware of it.</p>

            <h2>Third-Party Links & Ads; Other Users</h2>

            <p class="customColour"><strong>Third-Party Links & Ads.</strong> The Site may contain links to third-party websites and services, and/or display advertisements for third-parties.  Such Third-Party Links & Ads are not under the control of Company, and Company is not responsible for any Third-Party Links & Ads.  Company provides access to these Third-Party Links & Ads only as a convenience to you, and does not review, approve, monitor, endorse, warrant, or make any representations with respect to Third-Party Links & Ads.  You use all Third-Party Links & Ads at your own risk, and should apply a suitable level of caution and discretion in doing so. When you click on any of the Third-Party Links & Ads, the applicable third party’s terms and policies apply, including the third party’s privacy and data gathering practices.</p>

            <p class="customColour"><strong>Other Users.</strong> Each Site user is solely responsible for any and all of its own User Content.  Because we do not control User Content, you acknowledge and agree that we are not responsible for any User Content, whether provided by you or by others.  You agree that Company will not be responsible for any loss or damage incurred as the result of any such interactions.  If there is a dispute between you and any Site user, we are under no obligation to become involved.</p>

            <p class="customColour">You hereby release and forever discharge the Company and our officers, employees, agents, successors, and assigns from, and hereby waive and relinquish, each and every past, present and future dispute, claim, controversy, demand, right, obligation, liability, action and cause of action of every kind and nature, that has arisen or arises directly or indirectly out of, or that relates directly or indirectly to, the Site. If you are a California resident, you hereby waive California civil code section 1542 in connection with the foregoing, which states: "a general release does not extend to claims which the creditor does not know or suspect to exist in his or her favor at the time of executing the release, which if known by him or her must have materially affected his or her settlement with the debtor."</p>

            <p class="customColour"><strong>Cookies and Web Beacons.</strong> Like any other website, <span class="customColour2">LinkYard</span> uses ‘cookies’. These cookies are used to store information including visitors’ preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users’ experience by customizing our web page content based on visitors’ browser type and/or other information.</p>



            <h2>Disclaimers</h2>

            <p class="customColour">The site is provided on an "as-is" and "as available" basis, and company and our suppliers expressly disclaim any and all warranties and conditions of any kind, whether express, implied, or statutory, including all warranties or conditions of merchantability, fitness for a particular purpose, title, quiet enjoyment, accuracy, or non-infringement.  We and our suppliers make not guarantee that the site will meet your requirements, will be available on an uninterrupted, timely, secure, or error-free basis, or will be accurate, reliable, free of viruses or other harmful code, complete, legal, or safe.  If applicable law requires any warranties with respect to the site, all such warranties are limited in duration to ninety (90) days from the date of first use.</p>

            <p class="customColour">Some jurisdictions do not allow the exclusion of implied warranties, so the above exclusion may not apply to you.  Some jurisdictions do not allow limitations on how long an implied warranty lasts, so the above limitation may not apply to you.</p>

            <h2>Limitation on Liability</h2>

            <p class="customColour">To the maximum extent permitted by law, in no event shall company or our suppliers be liable to you or any third-party for any lost profits, lost data, costs of procurement of substitute products, or any indirect, consequential, exemplary, incidental, special or punitive damages arising from or relating to these terms or your use of, or incapability to use the site even if company has been advised of the possibility of such damages.  Access to and use of the site is at your own discretion and risk, and you will be solely responsible for any damage to your device or computer system, or loss of data resulting therefrom.</p>

            <p class="customColour">To the maximum extent permitted by law, notwithstanding anything to the contrary contained herein, our liability to you for any damages arising from or related to this agreement, will at all times be limited to a maximum of fifty U.S. dollars (u.s. $50). The existence of more than one claim will not enlarge this limit.  You agree that our suppliers will have no liability of any kind arising from or relating to this agreement.</p>

            <p class="customColour">Some jurisdictions do not allow the limitation or exclusion of liability for incidental or consequential damages, so the above limitation or exclusion may not apply to you.</p>

            <p class="customColour"><strong>Term and Termination.</strong> Subject to this Section, these Terms will remain in full force and effect while you use the Site.  We may suspend or terminate your rights to use the Site at any time for any reason at our sole discretion, including for any use of the Site in violation of these Terms.  Upon termination of your rights under these Terms, your Account and right to access and use the Site will terminate immediately.  You understand that any termination of your Account may involve deletion of your User Content associated with your Account from our live databases.  Company will not have any liability whatsoever to you for any termination of your rights under these Terms.  Even after your rights under these Terms are terminated, the following provisions of these Terms will remain in effect: Sections 2 through 2.5, Section 3 and Sections 4 through 10.</p>

            <h2>Copyright Policy.</h2>

            <p class="customColour">Company respects the intellectual property of others and asks that users of our Site do the same.  In connection with our Site, we have adopted and implemented a policy respecting copyright law that provides for the removal of any infringing materials and for the termination of users of our online Site who are repeated infringers of intellectual property rights, including copyrights.  If you believe that one of our users is, through the use of our Site, unlawfully infringing the copyright(s) in a work, and wish to have the allegedly infringing material removed, the following information in the form of a written notification (pursuant to 17 U.S.C. § 512(c)) must be provided to our designated Copyright Agent:</p>

            <ul>
                <li>your physical or electronic signature;</li>
                <li>identification of the copyrighted work(s) that you claim to have been infringed;</li>
                <li>identification of the material on our services that you claim is infringing and that you request us to remove;</li>
                <li>sufficient information to permit us to locate such material;</li>
                <li>your address, telephone number, and e-mail address;</li>
                <li>a statement that you have a good faith belief that use of the objectionable material is not authorized by the copyright owner, its agent, or under the law; and</li>
                <li>a statement that the information in the notification is accurate, and under penalty of perjury, that you are either the owner of the copyright that has allegedly been infringed or that you are authorized to act on behalf of the copyright owner.</li>
            </ul>

            <p class="customColour">Please note that, pursuant to 17 U.S.C. § 512(f), any misrepresentation of material fact in a written notification automatically subjects the complaining party to liability for any damages, costs and attorney’s fees incurred by us in connection with the written notification and allegation of copyright infringement.</p>

            <h2>General</h2>

            <p class="customColour">These Terms are subject to occasional revision, and if we make any substantial changes, we may notify you by sending you an e-mail to the last e-mail address you provided to us and/or by prominently posting notice of the changes on our Site.  You are responsible for providing us with your most current e-mail address.  In the event that the last e-mail address that you have provided us is not valid our dispatch of the e-mail containing such notice will nonetheless constitute effective notice of the changes described in the notice.  Any changes to these Terms will be effective upon the earliest of thirty (30) calendar days following our dispatch of an e-mail notice to you or thirty (30) calendar days following our posting of notice of the changes on our Site.  These changes will be effective immediately for new users of our Site.  Continued use of our Site following notice of such changes shall indicate your acknowledgement of such changes and agreement to be bound by the terms and conditions of such changes.
            Dispute Resolution. Please read this Arbitration Agreement carefully. It is part of your contract with Company and affects your rights.  It contains procedures for MANDATORY BINDING ARBITRATION AND A CLASS ACTION WAIVER.</p>

            <p class="customColour"><strong>Applicability of Arbitration Agreement.</strong> All claims and disputes in connection with the Terms or the use of any product or service provided by the Company that cannot be resolved informally or in small claims court shall be resolved by binding arbitration on an individual basis under the terms of this Arbitration Agreement.  Unless otherwise agreed to, all arbitration proceedings shall be held in English.  This Arbitration Agreement applies to you and the Company, and to any subsidiaries, affiliates, agents, employees, predecessors in interest, successors, and assigns, as well as all authorized or unauthorized users or beneficiaries of services or goods provided under the Terms.</p>

            <p class="customColour"><strong>Notice Requirement and Informal Dispute Resolution.</strong> Before either party may seek arbitration, the party must first send to the other party a written Notice of Dispute describing the nature and basis of the claim or dispute, and the requested relief.  A Notice to the Company should be sent to: Institut Montilivi. After the Notice is received, you and the Company may attempt to resolve the claim or dispute informally.  If you and the Company do not resolve the claim or dispute within thirty (30) days after the Notice is received, either party may begin an arbitration proceeding.  The amount of any settlement offer made by any party may not be disclosed to the arbitrator until after the arbitrator has determined the amount of the award to which either party is entitled.</p>

            <p class="customColour"><strong>Arbitration Rules.</strong> Arbitration shall be initiated through the American Arbitration Association, an established alternative dispute resolution provider that offers arbitration as set forth in this section.  If AAA is not available to arbitrate, the parties shall agree to select an alternative ADR Provider.  The rules of the ADR Provider shall govern all aspects of the arbitration except to the extent such rules are in conflict with the Terms.  The AAA Consumer Arbitration Rules governing the arbitration are available online at adr.org or by calling the AAA at 1-800-778-7879.  The arbitration shall be conducted by a single, neutral arbitrator.  Any claims or disputes where the total amount of the award sought is less than Ten Thousand U.S. Dollars (US $10,000.00) may be resolved through binding non-appearance-based arbitration, at the option of the party seeking relief.  For claims or disputes where the total amount of the award sought is Ten Thousand U.S. Dollars (US $10,000.00) or more, the right to a hearing will be determined by the Arbitration Rules.  Any hearing will be held in a location within 100 miles of your residence, unless you reside outside of the United States, and unless the parties agree otherwise.  If you reside outside of the U.S., the arbitrator shall give the parties reasonable notice of the date, time and place of any oral hearings. Any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction.  If the arbitrator grants you an award that is greater than the last settlement offer that the Company made to you prior to the initiation of arbitration, the Company will pay you the greater of the award or $2,500.00.  Each party shall bear its own costs and disbursements arising out of the arbitration and shall pay an equal share of the fees and costs of the ADR Provider.</p>

            <p class="customColour"><strong>Additional Rules for Non-Appearance Based Arbitration.</strong> If non-appearance based arbitration is elected, the arbitration shall be conducted by telephone, online and/or based solely on written submissions; the specific manner shall be chosen by the party initiating the arbitration.  The arbitration shall not involve any personal appearance by the parties or witnesses unless otherwise agreed by the parties.</p>

            <p class="customColour"><strong>Time Limits.</strong> If you or the Company pursues arbitration, the arbitration action must be initiated and/or demanded within the statute of limitations and within any deadline imposed under the AAA Rules for the pertinent claim.</p>

            <p class="customColour"><strong>Authority of Arbitrator.</strong> If arbitration is initiated, the arbitrator will decide the rights and liabilities of you and the Company, and the dispute will not be consolidated with any other matters or joined with any other cases or parties.  The arbitrator shall have the authority to grant motions dispositive of all or part of any claim.  The arbitrator shall have the authority to award monetary damages, and to grant any non-monetary remedy or relief available to an individual under applicable law, the AAA Rules, and the Terms.  The arbitrator shall issue a written award and statement of decision describing the essential findings and conclusions on which the award is based.  The arbitrator has the same authority to award relief on an individual basis that a judge in a court of law would have.  The award of the arbitrator is final and binding upon you and the Company.</p>

            <p class="customColour"><strong>Waiver of Jury Trial.</strong> THE PARTIES HEREBY WAIVE THEIR CONSTITUTIONAL AND STATUTORY RIGHTS TO GO TO COURT AND HAVE A TRIAL IN FRONT OF A JUDGE OR A JURY, instead electing that all claims and disputes shall be resolved by arbitration under this Arbitration Agreement.  Arbitration procedures are typically more limited, more efficient and less expensive than rules applicable in a court and are subject to very limited review by a court.  In the event any litigation should arise between you and the Company in any state or federal court in a suit to vacate or enforce an arbitration award or otherwise, YOU AND THE COMPANY WAIVE ALL RIGHTS TO A JURY TRIAL, instead electing that the dispute be resolved by a judge.</p>

            <p class="customColour"><strong>Waiver of Class or Consolidated Actions.</strong> All claims and disputes within the scope of this arbitration agreement must be arbitrated or litigated on an individual basis and not on a class basis, and claims of more than one customer or user cannot be arbitrated or litigated jointly or consolidated with those of any other customer or user.</p>

            <p class="customColour"><strong>Confidentiality.</strong> All aspects of the arbitration proceeding shall be strictly confidential.  The parties agree to maintain confidentiality unless otherwise required by law.  This paragraph shall not prevent a party from submitting to a court of law any information necessary to enforce this Agreement, to enforce an arbitration award, or to seek injunctive or equitable relief.</p>

            <p class="customColour"><strong>Severability.</strong> If any part or parts of this Arbitration Agreement are found under the law to be invalid or unenforceable by a court of competent jurisdiction, then such specific part or parts shall be of no force and effect and shall be severed and the remainder of the Agreement shall continue in full force and effect.</p>

            <p class="customColour"><strong>Right to Waive.</strong> Any or all of the rights and limitations set forth in this Arbitration Agreement may be waived by the party against whom the claim is asserted.  Such waiver shall not waive or affect any other portion of this Arbitration Agreement.</p>

            <p class="customColour"><strong>Survival of Agreement.</strong> This Arbitration Agreement will survive the termination of your relationship with Company.</p>

            <p class="customColour"><strong>Small Claims Court.</strong> Nonetheless the foregoing, either you or the Company may bring an individual action in small claims court.</p>

            <p class="customColour"><strong>Emergency Equitable Relief.</strong> Anyhow the foregoing, either party may seek emergency equitable relief before a state or federal court in order to maintain the status quo pending arbitration.  A request for interim measures shall not be deemed a waiver of any other rights or obligations under this Arbitration Agreement.</p>

            <p class="customColour"><strong>Claims Not Subject to Arbitration.</strong> Notwithstanding the foregoing, claims of defamation, violation of the Computer Fraud and Abuse Act, and infringement or misappropriation of the other party’s patent, copyright, trademark or trade secrets shall not be subject to this Arbitration Agreement.</p>

            <p class="customColour">In any circumstances where the foregoing Arbitration Agreement permits the parties to litigate in court, the parties hereby agree to submit to the personal jurisdiction of the courts located within Netherlands County, California, for such purposes.</p>

            <p class="customColour">The Site may be subject to U.S. export control laws and may be subject to export or import regulations in other countries. You agree not to export, re-export, or transfer, directly or indirectly, any U.S. technical data acquired from Company, or any products utilizing such data, in violation of the United States export laws or regulations.</p>

            <p class="customColour">Company is located at the address in Section 10.8. If you are a California resident, you may report complaints to the Complaint Assistance Unit of the Division of Consumer Product of the California Department of Consumer Affairs by contacting them in writing at 400 R Street, Sacramento, CA 95814, or by telephone at (800) 952-5210.</p>

            <p class="customColour"><strong>Electronic Communications.</strong> The communications between you and Company use electronic means, whether you use the Site or send us emails, or whether Company posts notices on the Site or communicates with you via email. For contractual purposes, you (a) consent to receive communications from Company in an electronic form; and (b) agree that all terms and conditions, agreements, notices, disclosures, and other communications that Company provides to you electronically satisfy any legal obligation that such communications would satisfy if it were be in a hard copy writing.</p>

            <p class="customColour"><strong>Entire Terms.</strong> These Terms constitute the entire agreement between you and us regarding the use of the Site. Our failure to exercise or enforce any right or provision of these Terms shall not operate as a waiver of such right or provision. The section titles in these Terms are for convenience only and have no legal or contractual effect. The word "including" means "including without limitation". If any provision of these Terms is held to be invalid or unenforceable, the other provisions of these Terms will be unimpaired and the invalid or unenforceable provision will be deemed modified so that it is valid and enforceable to the maximum extent permitted by law.  Your relationship to Company is that of an independent contractor, and neither party is an agent or partner of the other.  These Terms, and your rights and obligations herein, may not be assigned, subcontracted, delegated, or otherwise transferred by you without Company’s prior written consent, and any attempted assignment, subcontract, delegation, or transfer in violation of the foregoing will be null and void.  Company may freely assign these Terms.  The terms and conditions set forth in these Terms shall be binding upon assignees.</p>

            <p class="customColour"><strong>Your Privacy.</strong> Please read our Privacy Policy.</p>

            <p class="customColour"><strong>Copyright/Trademark Information.</strong> Copyright ©. All rights reserved.  All trademarks, logos and service marks displayed on the Site are our property or the property of other third-parties. You are not permitted to use these Marks without our prior written consent or the consent of such third party which may own the Marks.</p>

            <h2>Contact Information</h2>

            <p class="customColour">Address: Institut Montilivi</p>
            <p class="customColour">Email: a21069@institutmontiliv.cat</p>.
        `;
        uiText_copyright = " by Miquel Roura & Ferran Romero All Rights Reserved.";
    }
    else if (language == "CA") {
            //Header
        uiText_fullLink = "Enllaç complet";
        uiText_linkDescription = "Descripció";
        uiText_publishedBy = "Publicat per ";
            //Sorting menu
        uiText_sortName = "Nom";
        uiText_sortRating = "Puntuació";
        uiText_sortDate = "Data de publicació";
        uiText_sortUrl = "URL";
            //Side menu
        uiText_loginButton = "ACCÉS D'USUARI";
        uiText_loginSubmit = "INICIA SESSIÓ";
        uiText_loginUsernameLabel = "NOM D'USUARI";
        uiText_loginPasswordLabel = "CONTRASENYA";
        uiText_newUserButton = "Encara no teniu compte?";
        uiText_signUpButton = "REGISTRE";
        uiText_sideMenuWelcome = "LA BENVINGUDA";
        uiText_linkManagerButton = "GESTOR D'ENLLAÇOS";
        uiText_quickAddButton = "ENLLAÇ RÀPID";
        uiText_logOutButton = "SORTIR";
            //New user form
        uiText_newUserFormTitle = "NOU USUARI";
        uiText_newUserFormUsernameLabel = "NOM D'USUARI";
        uiText_newUserFormPasswordLabel = "CONTRASENYA";
        uiText_newUserFormRetypePasswordLabel = "REPETIU LA CONTRASENYA";
        uiText_newUserFormNameLabel = "NOM";
        uiText_newUserFormSurnameLabel = "COGNOMS";
        uiText_newUserFormEmailLabel = "CORREU";
        uiText_newUserFormSubmit = "ENREGISTRAR";
            //Quick Add form
        uiText_quickAddFormTitle = "ENLLAÇ RÀPID";
        uiText_quickAddFormName = "Nom";
        uiText_quickAddFormUrl = "URL";
        uiText_quickAddFormSubmit = "Afegir";
            //Footer
        uiText_autoNightmodeLabel = "AUTO";
        uiText_legalNoticeLink = "Avís legal";
            //Error page
        uiText_errorPageTitle = "Ep!";
        uiText_errorPageMainText = "Sembla que hi ha algun problema amb l'adreça de la pàgina. <br><br>Si necessiteu posar-vos en contacte amb el suport tècnic, ho podeu fer per correu a aquesta adreça: ";
        uiText_errorPageGoBackLink = "Tornar a LinkYard";
            //New Link Form
        uiText_addFormTitle = 'NOU ENLLAÇ';
        uiText_addFormURL = 'ADREÇA COMPLETA';
        uiText_addFormName = 'NOM';
        uiText_addFormRating = 'PUNTUACIÓ';
        uiText_addFormDescTitle = 'DESCRIPCIÓ';
        uiText_addFormDesc = '(opcional) Descripció de la pàgina.';
        uiText_addFormPrivate = 'PRIVAT';
        uiText_addFormSubmit = 'AFEGIR';
            //Link Manager
        uiText_linkManagerLinkName = "Nom: ";
        uiText_newLinkButtonTooltip = "Afegiu un nou enllaç";
        uiText_customCategoryButtonTooltip = "Creeu una nova categoria personalitzada";
            //Custom category form
        uiText_newCustomCategoryFormTitle = "NOVA CATEGORIA";
        uiText_addCustomCategoryFormName = "Nom";
        uiText_addFormSubmit = "Afegir";
        //Legal notice
        uiText_legalNoticeTitle = "AVÍS LEGAL";
        uiText_legalNoticeSubtitle = "LLEI DELS SERVEIS DE LA SOCIETAT DE LA INFORMACIÓ (LSSI)";
        uiText_legalNotice = `
        <b>LINKYARD</b>, responsable del lloc web, en endavant RESPONSABLE, posa a disposició dels usuaris el present document, amb el qual pretén donar compliment a les obligacions disposades en la Llei 34/2002, d'11 de juliol, de Serveis de la Societat de la Informació i del Comerç Electrònic (LSSICE), així com informar a tots els usuaris del lloc web respecte a quines són les condicions d'ús. <br><br>
        Tota persona que accedeixi a aquest lloc web assumeix el paper d'usuari, comprometent-se a l'observança i compliment rigorós de les disposicions aquí disposades, així com a qualsevol altra disposició legal que fos d'aplicació. <br><br>
        <b>LINKYARD</b> es reserva el dret de modificar qualsevol tipus d'informació que pogués aparèixer al lloc web, sense que hi hagi obligació de preavisar o posar en coneixement dels usuaris aquestes obligacions, entenent-se com a suficient amb la publicació al lloc web de <b>LINKYARD</b>.
        `;
        uiText_copyright = " - Miquel Roura i Ferran Romero - Tots els drets reservats.";
    }
}

function applyCurrentLanguage() {
        //Header
    setInnerTextOnElement("uiText_fullLink", uiText_fullLink);
    setInnerTextOnElement("uiText_linkDescription", uiText_linkDescription);
    setInnerTextOnElement("uiText_publishedBy", uiText_publishedBy);
        //Sorting menu
    setInnerTextOnElement("uiText_sortName", uiText_sortName);
    setInnerTextOnElement("uiText_sortRating", uiText_sortRating);
    setInnerTextOnElement("uiText_sortDate", uiText_sortDate);
    setInnerTextOnElement("uiText_sortUrl", uiText_sortUrl);
        //Side menu
    setInnerTextOnElement("uiText_loginButton", uiText_loginButton);
    setInnerTextOnElement("uiText_loginSubmit", uiText_loginSubmit);
    setInnerTextOnElement("uiText_loginUsernameLabel", uiText_loginUsernameLabel);
    setInnerTextOnElement("uiText_loginPasswordLabel", uiText_loginPasswordLabel);
    setInnerTextOnElement("uiText_newUserButton", uiText_newUserButton);
    setInnerTextOnElement("uiText_signUpButton", uiText_signUpButton);
    setInnerTextOnElement("uiText_sideMenuWelcome", uiText_sideMenuWelcome);
    setInnerTextOnElement("uiText_linkManagerButton", uiText_linkManagerButton);
    setInnerTextOnElement("uiText_quickAddButton", uiText_quickAddButton);
    setInnerTextOnElement("uiText_logOutButton", uiText_logOutButton);
        //New user form
    setInnerTextOnElement("uiText_newUserFormTitle", uiText_newUserFormTitle);
    setInnerTextOnElement("uiText_newUserFormUsernameLabel", uiText_newUserFormUsernameLabel);
    setInnerTextOnElement("uiText_newUserFormPasswordLabel", uiText_newUserFormPasswordLabel);
    setInnerTextOnElement("uiText_newUserFormRetypePasswordLabel", uiText_newUserFormRetypePasswordLabel);
    setInnerTextOnElement("uiText_newUserFormNameLabel", uiText_newUserFormNameLabel);
    setInnerTextOnElement("uiText_newUserFormSurnameLabel", uiText_newUserFormSurnameLabel);
    setInnerTextOnElement("uiText_newUserFormEmailLabel", uiText_newUserFormEmailLabel);
    setInnerTextOnElement("uiText_newUserFormSubmit", uiText_newUserFormSubmit);
        //Quick Add form
    setInnerTextOnElement("uiText_quickAddFormTitle", uiText_quickAddFormTitle);
    setInnerTextOnElement("uiText_quickAddFormName", uiText_quickAddFormName);
    setInnerTextOnElement("uiText_quickAddFormUrl", uiText_quickAddFormUrl);
    setInnerTextOnElement("uiText_quickAddFormSubmit", uiText_quickAddFormSubmit);
        //Footer
    setInnerTextOnElement("uiText_autoNightmodeLabel", uiText_autoNightmodeLabel);
    setInnerTextOnElement("uiText_legalNoticeLink", uiText_legalNoticeLink);
        //Error page
    setInnerTextOnElement("uiText_errorPageTitle", uiText_errorPageTitle);
    setInnerHTMLOnElement("uiText_errorPageMainText", uiText_errorPageMainText);
    setInnerTextOnElement("uiText_errorPageGoBackLink", uiText_errorPageGoBackLink);
        //New Link Form
    setInnerTextOnElement('uiText_addFormTitle', uiText_addFormTitle);
    setInnerTextOnElement('uiText_addFormURL', uiText_addFormURL);
    setInnerTextOnElement('uiText_addFormName', uiText_addFormName);
    setInnerTextOnElement('uiText_addFormRating', uiText_addFormRating);
    setInnerTextOnElement('uiText_addFormDescTitle', uiText_addFormDescTitle);
    setInnerTextOnElement('uiText_addFormDesc', uiText_addFormDesc);
    setInnerTextOnElement('uiText_addFormPrivate', uiText_addFormPrivate);
    setInnerTextOnElement('uiText_addFormSubmit', uiText_addFormSubmit);
        //Link Manager
    setInnerTextOnElement('uiText_linkManagerLinkName', uiText_linkManagerLinkName);
    setInnerTextOnElement('uiText_newLinkButtonTooltip', uiText_newLinkButtonTooltip);
    setInnerTextOnElement('uiText_customCategoryButtonTooltip', uiText_customCategoryButtonTooltip);
        //Custom category form
    setInnerTextOnElement("uiText_newCustomCategoryFormTitle", uiText_newCustomCategoryFormTitle);
    setInnerTextOnElement("uiText_addCustomCategoryFormName", uiText_addCustomCategoryFormName);
    setInnerTextOnElement("uiText_addFormSubmit", uiText_addFormSubmit);
        //Legal notice
    setInnerTextOnElement("uiText_legalNoticeTitle", uiText_legalNoticeTitle);
    setInnerTextOnElement("uiText_legalNoticeSubtitle", uiText_legalNoticeSubtitle);
    setInnerHTMLOnElement("uiText_legalNotice", uiText_legalNotice);
    setInnerTextOnElement("uiText_copyright", uiText_copyright);
}

º("languageDropdown").onchange = function () {
    refillTextVariables(º("languageDropdown").value);
    applyCurrentLanguage();
    setCookie("language", º("languageDropdown").value, 1);
}

//This function will set the language dropdown menu's value with the value read from the language cookie.
function resetLanguageFromCookie() {
    if (getCookie("language") != null) {
        º("languageDropdown").value = getCookie("language");
    }
    else {
        º("languageDropdown").value = "EN";
    }
    refillTextVariables(º("languageDropdown").value);
    applyCurrentLanguage();
}