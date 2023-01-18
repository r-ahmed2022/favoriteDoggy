// Create the Dog class here
class Dog {
    constructor(data) {
        Object.assign(this, data);
    }
    
      setLikeStatus(status) {
        this.hasBeenLiked = status
        this.hasBeenSwiped = true
    }
    
    setRejectStatus(status) {
        this.hasBeenLiked = status
        this.hasBeenSwiped = true
    }
    
    renderHTML = () => {
        const {name, avatar, age, bio, hasBeenSwiped, hasBeenLiked} = this 
        return `<div class="img-wrapper" id="img-wrapper">
                 <img class="dp" src="${avatar}" />
                  <div id="like-not">
                     <img class="reject" src="images/badge-nope.png" />
                  </div>
                  <div id="like">
                     <img class="accept" src="images/badge-like.png" />
                  </div>
                 <div class="dog-info">
                   <span class="dog-info">${name}, ${age}</span>
                   <span>${bio}</span>
                 </div>
             </div>` 
    }
}

export default Dog;