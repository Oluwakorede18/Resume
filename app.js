// export default {
//   name: 'ContactUs',
//   data() {

//     return {
//       typeValue:'',
//       typeStatus:false,
//       typeArray:['Student','Web Developer','Programmer'],
//       typingSpeed:200,
//       erasingSpeed:100,
//       newTextDelay:2000,
//       typeArrayIndex:0,
//       charIndex:0,
//       hidden:true,
//       name: '',
//       number:'',
//       email: '',
//       message: '',
//       view: {
//         topOfPage: true
//       }
//     }
//   },

//    beforeMount() {
//     window.addEventListener('scroll', this.handleScroll)
//   },
//   methods: {
//     sendEmail(e) {
//       try {
//         emailjs.sendForm('service_u4vlb8p', 'template_6r1z7ec', e.target, 'user_ZJFjo5D9ctSdzMbUxoc4X', {
//           name: this.name,
//           number:this.number,
//           email: this.email,
//           message: this.meessage
//         })
//         console.log('it works!!!')
//         this.hidden=false

//       } catch (error) {
//           console.log({error})
//       }
//       // Reset form field
//       this.name = ''
//       this.number=''
//       this.email = ''
//       this.message = ''
//     },
//     typeText(){
//       if(this.charIndex<this.typeArray[this.typeArrayIndex].length){
//         if(!this.typeStatus)
//         this.typeStatus=true;

//         this.typeValue+=this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
//         this.charIndex+=1

//         setTimeout(this.typeText, this.typingSpeed);
//       }
//       else{
//         this.typeStatus=false;
//         setTimeout(this.eraseText , this.newTextDelay);
//       }

//     },
//     eraseText(){
//       if(this.charIndex>0){
//         if(!this.typeStatus)
//         this.typeStatus=true;

//         this.typeValue=this.typeArray[this.typeArrayIndex].substring(0,this.charIndex-1);
//         this.charIndex-=1;
//         setTimeout(this.eraseText,this.erasingSpeed)
//       }
//       else{
//         this.typeStatus=false;
//         this.typeArrayIndex+=1;
//         if(this.typeArrayIndex>=this.typeArray.length)
//         this.typeArrayIndex=0

//         setTimeout(this.typeText, this.typingSpeed+1000)
//       }


//     },
//    handleScroll(){
//       if(window.pageYOffset>60){
//         if(this.view.topOfPage) this.view.topOfPage = false
//       } else {
//         if(!this.view.topOfPage) this.view.topOfPage = true
//       }
//     }
//   },
//   created(){
//     setTimeout(this.typeText, this.newTextDelay)

//   },
// }

const typeValue = document.querySelector('.typed-text')
const typeStatus = false;
const typeArray = ['Student', 'Web Developer', 'Programmer'];
const typingSpeed = 200;
const erasingSpeed = 100;
const newTextDelay = 2000;
let typeArrayIndex = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < typeArray[typeArrayIndex].length) {

        typeValue.textContent += typeArray[typeArrayIndex].charAt(charIndex);
        charIndex++

        setTimeout(typeText, typingSpeed);
    } else {
        // typeStatus = false;
        setTimeout(eraseText, newTextDelay);
    }

}

function eraseText() {
    if (charIndex > 0) {

        typeValue.textContent = typeArray[typeArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, erasingSpeed)
    } else {
        typeArrayIndex += 1;
        if (typeArrayIndex >= typeArray.length)
            typeArrayIndex = 0;

        setTimeout(typeText, typingSpeed + 1000)
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(typeText, newTextDelay + 200)
});



window.addEventListener('scroll', function() {
    let nav = this.document.querySelector('nav')

    nav.classList.toggle('onScroll', window.scrollY > 10);
})