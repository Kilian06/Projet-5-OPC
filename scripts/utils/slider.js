
 
 class Lightbox {
  
    static init() {
      
      const links = Array.from(document.querySelectorAll('.lien_vignette_media'));
      const gallery = links.map(link => link.getAttribute('href'));
      links.forEach(link => link.addEventListener('click', e => {
          e.preventDefault()
          new Lightbox(e.currentTarget.getAttribute('href'), gallery)
        }))
    }
  
    constructor(url, images) {
      this.element = this.buildDOM(url)
      this.images = images
      this.loadImage(url)
      this.onKeyUp = this.onKeyUp.bind(this)
      document.body.appendChild(this.element)
      document.addEventListener('keyup', this.onKeyUp)

    }
  
    loadImage (url) {
      this.url = null
      // insertion if pour video ou image
      if(url.includes("mp4")) {
        var image = document.createElement("video")
        image.setAttribute('alt',"")
        image.setAttribute('controls',"")
        image.setAttribute('id',"idImage")
        image.setAttribute('tabindex',"1")
        }
        else{
            var image = document.createElement("img")
            image.setAttribute('id',"idImage")
            image.setAttribute('tabindex',"1")
        }
      const container = this.element.querySelector('.lightbox__container')
      container.innerHTML = ''
      container.appendChild(image)
      this.url = url
      image.src = url
      var titleUrl = image.src
      let params = (new URL(titleUrl)).searchParams;
      let title = params.get('title');
      var divTitle = document.createElement("div");
      divTitle.setAttribute('class', "lightbox_title")
      divTitle.textContent = title;
      container.appendChild(divTitle);
      image.setAttribute('alt', title)
    }
  
    onKeyUp (e) {
      if (e.key === 'Escape') {
        this.close(e)
      } else if (e.key === 'ArrowLeft') {
        this.prev(e)
      } else if (e.key === 'ArrowRight') {
        this.next(e)
      }
    }
  
    close (e) {
      e.preventDefault()
      var focusgrille = document.getElementById(idOpen)
      console.log(focusgrille)
      focusgrille.focus()
      console.log(idOpen)
      this.element.classList.add('fadeOut')
      window.setTimeout(() => {
        this.element.parentElement.removeChild(this.element)
      }, 100)
      document.removeEventListener('keyup', this.onKeyUp)
      var header = document.querySelector('header')
      header.setAttribute("aria-hidden", "false");
      var main = document.querySelector('main')
      main.setAttribute("aria-hidden", "false");
      var modalbg = document.querySelector('.bground')
      modalbg.setAttribute("aria-hidden", "false");
      var shortby = document.querySelector('.shortby')
      shortby.setAttribute("aria-hidden", "false");
      var linklist = document.querySelector('.grille_media')
      linklist.setAttribute("aria-hidden", "false");

    }

    next (e) {
      e.preventDefault()
      let i = this.images.findIndex(image => image === this.url)
      if (i === this.images.length - 1) {
        i = -1
      }
      this.loadImage(this.images[i + 1])
    }
  
    prev (e) {
      e.preventDefault()
      let i = this.images.findIndex(image => image === this.url)
      if (i === 0) {
        i = this.images.length
      }
      this.loadImage(this.images[i - 1])
    }

    buildDOM(url) {
      const dom = document.createElement('div')
      dom.classList.add('lightbox')
      dom.innerHTML = `<button class="lightbox__close" aria-label="Close dialog" tabindex="4" >Fermer</button>
          <button class="lightbox__next" aria-label="Next Image" tabindex="3">Suivant</button>
          <button class="lightbox__prev" aria-label="Previous Image" tabindex="2">Précédent</button>
          <div class="lightbox__container" alt="image closeup view" id="lightboxContainer" tabindex="1"></div>`
      dom.querySelector('.lightbox__close').addEventListener('click', this.close.bind(this))
      dom.querySelector('.lightbox__next').addEventListener('click', this.next.bind(this))
      dom.querySelector('.lightbox__prev').addEventListener('click', this.prev.bind(this))
      return dom
    }

  }
export {Lightbox};



// onblur="resetlightboxfocus()"