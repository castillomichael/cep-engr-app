
// Optiont #1: I wrote another script (option #2 below) as I was not sure what was being asked. 

// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice
var buttons = document.querySelectorAll("li")
var content = document.querySelectorAll("section")
var images = document.querySelectorAll('img')

// using jQuery and the object above, display the information as the appropriate button is clicked
$(document).ready(() => {
    $(images).css({'opacity':0.9});
    $(content).hide();
    $(buttons).on('click', (event) =>{
        console.log(event.currentTarget);
        for( var i = 0; i < buttons.length; i++){
            if((event.currentTarget) == buttons[i]){
                $(content[i]).toggle();
                // console.log("yaay");
                } else { 
                    $(content[i]).hide();
                }
            }
    })
        $(images).on('mouseenter',(event)=>{
          $(event.currentTarget).css({'opacity':1});
          $(event.currentTarget).css({'zoom':1.5});
    })  .on('mouseleave',(event)=>{
            $(event.currentTarget).css({'opacity':.9});
            $(event.currentTarget).css({'zoom':1});
    })
})
//Attempt to add carousel for pictures
    // $('.slider').jasCarousel({
    //     mode: 'vertical',
    //     delay:1500,
    //     auto:false,
    //     autoDirection:'next',
    //     navigation:true,
    //     prevText:"prev",
    //     nextText:"next",
    //     margin:0,
    //     slideFrontFace:false,
    //     perspective:1100,
    //     moveOnSlideClick:true,
    //     speed:2000,
    // })

//********************* Option #2

// $('#htmlcontent').hide()

// var btnText = new Object()
// btnText.firstName = 'Michael'
// btnText.lastName = 'Castillo'
// btnText.jobTitle = 'Corporate Accountant'
// btnText.homeOffice = 'Domain 2'
// btnText.tellMeMore= "I graduated from the University of Texas at Austin, with an undergraduate and masters degree in Accounting. The past four years, I have worked in public accounting and corporate accounting. From early in my career,  I sought to remove the manual processes which could be automated though excel formulas. As I challenged my self to learn more about the potential of excel, I was exposed to software engineering articles. The potential of building and expanding process through coding captured my interest quickly. Now, it's become a desired skill that has been enjoyable to learn. I have two sons and a lovely wife. We enjoy doing outdoor activities from running to visting parks. My sons are my pride and are always motivating me to push my limits."


// using jQuery and the object above, display the information as the appropriate button is clicked

// $(document).ready(() => {
//     //ensure no text is loaded at window load
//     $('#btntext').hide();
//     //event handler click - triggers text
//   $('#firstName').on('click', () => {
//         $('#btntext').html(btnText.firstName);
//         $('#btntext').show();
//     })
//     $('#lastName').on('click', () => {
//         $('#btntext').html(btnText.lastName);
//         $('#btntext').show();
//     })
//     $('#jobTitle').on('click', () => {
//         $('#btntext').html(btnText.jobTitle);
//         $('#btntext').show();
//     })
//     $('#homeOffice').on('click', () => {
//         $('#btntext').html(btnText.homeOffice);
//         $('#btntext').show();
//     })
//     $('#tellMeMore').on('click', () => {
//         $('#btntext').html(btnText.tellMeMore);
//         $('#btntext').show();
//     })
// })


