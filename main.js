var form = document.getElementById("form")
var error = document.getElementById("error__message")

form.addEventListener('submit', function(e){
    e.preventDefault()

    var search = document.getElementById("search__input").value
    

    var name = search.split(' ').join('')  
    


    fetch(`https://api.github.com/users/${name}`, 
    headers={'Authorization':'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'})
    .then((resoult)=>resoult.json())
    .then((data)=>{
        console.log(data)
        if(data.name == undefined){
            error.style.cssText = `color:#F74646`
        }else{
        document.getElementById("icon__tablet").style.cssText =`background-image: url(${data.avatar_url});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center; `
        document.getElementById("icon__descktop").style.cssText = `background-image: url(${data.avatar_url});
                                                                background-repeat: no-repeat;
                                                                background-size: cover;
                                                                background-position: center center; `;
                                                               
        document.getElementById("name").innerHTML =`${data.name}`
        document.getElementById("handle").innerHTML =`${data.login}`
        document.getElementById("joined").innerHTML =`${data.created_at}`
        document.getElementById("bio").innerHTML =`${data.bio}`
        document.getElementById("repoNumb").innerHTML =`${data.public_repos}`
        document.getElementById("followNumb").innerHTML =`${data.followers}`
        document.getElementById("followingNumb").innerHTML =`${data.following}`
        document.getElementById("location").innerHTML =`${data.location}`
        document.getElementById("work ").innerHTML =`${data.company}`
        document.getElementById("blog").innerHTML =`
        <a href="${data.blog}">${data.blog}</a>
            `
        document.getElementById("twitter").innerHTML =`${data.twitter}`
        
        }
         

        
    })

})

var theme = document.getElementById('theme');
var text = document.getElementById('change__text')
var icon = document.getElementsByClassName('small')
function change(){
        document.body.classList.toggle("light__theme");
        if(document.body.classList.contains("light__theme")){
            theme.src = "assets/icon-moon.svg";
            theme.style.cssText = "filter: brightness(0.2); "
            text.innerHTML="DARK";
            text.style.cssText = "color:#222731;"
            for(var i = 0;i< icon.length;i++){
            icon[i].style.cssText = `flood-color:#4B6A9B ;filter:brightness(1);`
            }
        }else{
            theme.src = "assets/icon-sun.svg";
            text.innerHTML="LIGHT"
            theme.style.cssText = "filter: brightness(1);"
            text.style.cssText = "color:#90A4D4"
            for(var i = 0;i< icon.length;i++){
            icon[i].style.cssText = `filter: brightness(4);`
            }
        }
    
}

