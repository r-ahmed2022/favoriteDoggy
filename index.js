// Remember to import the data and Dog class!
import Dog from  './Dog.js';
import dogs from './data.js';

    
const render = ()=> {  
const dog_dp1 = document.getElementById("dog-dp"); 
dog_dp1.innerHTML = dog.renderHTML();
}

const homedog = [...dogs]
let index = 0
const getNextDog =  () => {
  (index >= dogs.length - 1) ?  index = 0 :  index +=1;
      return dog = new Dog(dogs[index])  
}

const cross_btn = document.getElementById("cross");
cross_btn.addEventListener('click', () => {
       dog.setRejectStatus(true);
       document.getElementById("like-not").style.visibility = "visible" 
       setTimeout(() => {
       document.getElementById("like-not").style.visibility = "hidden"
       dog = new Dog(getNextDog());
       render() 
    }, 1000);
     
})

const heart_btn = document.getElementById("heart");
heart_btn.addEventListener('click', () => {
      dog.setLikeStatus(true);
     document.getElementById("like").style.visibility = "visible" 
       setTimeout(() => {
        document.getElementById("like").style.visibility = "hidden";
        dog = new Dog(getNextDog());
        render()
    }, 1000);
})

let dog = new Dog(dogs[0]);
render()

