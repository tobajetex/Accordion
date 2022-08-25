var accordianTitle = document.getElementsByClassName("accordion--title");
var open = document.getElementById("open");
var close = document.getElementById("close");

console.log(accordianTitle)

document.querySelectorAll(".fa-solid").forEach( 
    function(el){
        console.log(el)
       
         el.addEventListener('click', function() {
            
            if (el.classList.contains('fa-circle-right')) {
                el.classList.remove('fa-circle-right');
                el.classList.add('fa-circle-down');
                el.parentElement.parentElement.lastElementChild.style.display="block"
            //text.innerHTML = 'Hide';
          } else {
            el.classList.remove('fa-circle-down');
            el.classList.add('fa-circle-right');
            el.parentElement.parentElement.lastElementChild.style.display="none"
            //text.innerHTML = 'Show';
          }

         })
    }
)

/*for (var i =0; i<accordianTitle.length;i++)
    {
        accordianTitle[i].addEventListerner("click",function (e){
            console.log(e.target.id)
            if (accordianTitle[i].classList.contains('fa-circle-right')) {
                accordianTitle[i].classList.remove('fa-circle-right');
                accordianTitle[i].classList.add('fa-circle-down');
            //text.innerHTML = 'Hide';
          } else {
            accordianTitle[i].classList.remove('fa-circle-down');
            accordianTitle[i].classList.add('fa-circle-right');
            //text.innerHTML = 'Show';
          }

        })
    }
    
       /*if (icon.classList.contains('fa-circle-right')) {
            icon.classList.remove('fa-circle-right');
            icon.classList.add('fa-circle-down');
            //text.innerHTML = 'Hide';
          } else {
            icon.classList.remove('fa-circle-down');
            icon.classList.add('fa-circle-right');
            //text.innerHTML = 'Show';
          }

    
  });*/
  /*const accordion = document.getElementsByClassName('container');

for (i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  })
}

  //const icon = document.querySelectorAll('.fa-solid');
   // console.log(icon);*/
