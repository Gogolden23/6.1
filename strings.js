function validateinputs(){
    const firstname = document.getElementById('firstname').value
    const lastname = document.getElementById('lastname').value
    const zipcode = document.getElementById('zipcode').value
        if(firstname, lastname === ''){
            alert  ('Info needed');     
        } 
        else if (firstname.length , lastname.length = 5 || firstname.length, lastname.length > 20 ){
         alert ('First and last name to short ')
        }
        else {
            (firstname)
        } 


  

        if (zipcode === ''){
            alert ( ' Info needed');
        }else if (zipcode.length < 5 || zipcode.length > 5 ){
            alert ( 'Needs to be 5 Digits');
            
        }
            else {
            (zipcode)
        }
        if(zipcode.length = 5 ){
            alert ('Congrats you completed phase one')
        }
    };
// Could not get this to work 
//  const setProblem = (element, message) => {
//         const inputcontrol = element.parentElement;
//         const errordisplay = inputcontrol.querySelector('.setProblem');

//         errordisplay.innertext = message;
//         inputcontrol.classlist.add('setProblem');
//         inputcontrol.classlist.remove('.setcorrect');
//     }
//     const setcorrect = element =>{
//         const  inputcontrol = element.parentElement;
//         const errordisplay = inputcontrol.querySelector('.setProblem');
        
//         errordisplay.innertext = '';
//         inputcontrol.classlist.add('setcorrect');
//         inputcontrol.classlist.remove('setProblem');
        
//     };














    // const form = document.getElementById('Entryform').value
// Was not able to make this work 
  
//    function validateinputs() {
//         const firstnameValue = firstname;
//         const lastnameValue = lastname;
//         const zipcodeValue = zipcode;


//         if(firstnameValue === ''){
//             setProblem(firstname, 'Info needed');     
//         } 
//         else if (firstnameValue.length < 10 ){
//             setProblem(firstname, 'First and last name to long ')
//         }
//         else {
//             setcorrect(firstname)
//         } 


//         if(lastnameValue === ''){
//             setProblem(lastname, 'Info needed');     
//         } 
//         else if (lastnameValue.length < 1 ){
//             setProblem(lastname, 'First and last name to long ')
        
//     }
//     else {
//             setcorrect(lastname)
//         }


//         if (zipcodeValue === ''){
//             setProblem(zipcode, ' Info needed');
//         }else if (zipcodeValue.length < 5 || zipcodeValue.length > 5 ){
//             setProblem(zipcode, 'Needs to be 5 Digits');
            
//         }
//             else {
//             setcorrect(zipcode)
//         }
//     };

//  const setProblem = (element, message) => {
//         const inputcontrol = element.parentElement;
//         const errordisplay = inputcontrol.querySelector('.Problem');

//         errordisplay.innertext = message;
//         inputcontrol.classlist.add('Problem');
//         inputcontrol.classlist.remove('.correct');
//     }
//     const setcorrect = element =>{
//         const  inputcontrol = element.parentElement;
//         const errordisplay = inputcontrol.querySelector('.Problem');
        
//         errordisplay.innertext = '';
//         inputcontrol.classlist.add('correct');
//         inputcontrol.classlist.remove('Problem');
        
//     };





