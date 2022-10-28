export function addLike(event){

    if(this.className ==="deductvignette-likedivplus"){
        const likeCount = Number(event.currentTarget.textContent)
        const addLikeCount = likeCount - 1
        let likeCountGlobal = Number(document.getElementById("likeBot").textContent)
        var addLikeCountGlobal = likeCountGlobal - 1
        document.getElementById("likeBot").innerHTML = addLikeCountGlobal
        
        this.innerHTML = addLikeCount
        const heart = document.createElement('i');
        heart.setAttribute('class',"fa-solid fa-heart");
        this.appendChild(heart)
        this.setAttribute('class',"vignette-likediv")
        }
        else{
            const likeCount = Number(event.currentTarget.textContent)
            const addLikeCount = likeCount + 1
            let likeCountGlobal = Number(document.getElementById("likeBot").textContent)
            var addLikeCountGlobal = likeCountGlobal + 1
            document.getElementById("likeBot").innerHTML = addLikeCountGlobal
            
            this.innerHTML = addLikeCount
            const heart = document.createElement('i');
            heart.setAttribute('class',"fa-solid fa-heart");
            this.appendChild(heart)
            this.setAttribute('class',"deductvignette-likedivplus")
        }
    }
