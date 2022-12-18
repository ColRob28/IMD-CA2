let scrollSpy = new bootstrap.ScrollSpy(document.body, { target: '#navbar-main' })

// Gallery function to launch Modal popup with Image
function showImage( event ) {
  console.log( event.target );
  const src = event.target.getAttribute("src");
  console.log( src );
  document.querySelector(".modal-img").src = src;
  document.querySelector(".modal-img").height = "400";
  document.querySelector(".modal-img").width = "400";
  const myModal = new bootstrap.Modal( document.getElementById( 'galleryModal' ) );
  myModal.show();
}

// Function to show different category images based on drop down value
function showSkills() {

  if ( document.getElementById("gallerySelect").value == 1 ) {
    document.getElementById("CodingLanguages").style.display = "block";
    document.getElementById("TeamSkills").style.display = "block";
    document.getElementById("Lifeskills").style.display = "block";
  }
  else if ( document.getElementById("gallerySelect").value == 2 ) {
    document.getElementById("CodingLanguages").style.display = "block"
    document.getElementById("TeamSkills").style.display = "none";
    document.getElementById("Lifeskills").style.display = "none";
  }
  else if ( document.getElementById("gallerySelect").value == 3 ) {
    document.getElementById("CodingLanguages").style.display = "none"
    document.getElementById("TeamSkills").style.display = "block";
    document.getElementById("Lifeskills").style.display = "none";
  }
  else if ( document.getElementById("gallerySelect").value == 4 ) {
    document.getElementById("CodingLanguages").style.display = "none"
    document.getElementById("TeamSkills").style.display = "none";
    document.getElementById("Lifeskills").style.display = "block";
  }
}

function showWelcome( event ) {
  console.log( event.target );
  const src = event.target.getAttribute("src");
  console.log( src );
  document.querySelector(".modal-img").src = src;
  document.querySelector(".modal-img").height = "400";
  document.querySelector(".modal-img").width = "400";
  const myModal = new bootstrap.Modal( document.getElementById( 'welcomeModal' ) );
  myModal.show();
}

function showGame( event ) {
  console.log( event.target );
  const src = event.target.getAttribute("src");
  console.log( src );
  document.querySelector(".modal-img").src = src;
  document.querySelector(".modal-img").height = "400";
  document.querySelector(".modal-img").width = "400";
  const myModal = new bootstrap.Modal( document.getElementById( 'gameModal' ) );
  myModal.show();
}

function showRead( event ) {
  console.log( event.target );
  const src = event.target.getAttribute("src");
  console.log( src );
  document.querySelector(".modal-img").src = src;
  document.querySelector(".modal-img").height = "400";
  document.querySelector(".modal-img").width = "400";
  const myModal = new bootstrap.Modal( document.getElementById( 'readModal' ) );
  myModal.show();
}

function showTV( event ) {
  console.log( event.target );
  const src = event.target.getAttribute("src");
  console.log( src );
  document.querySelector(".modal-img").src = src;
  document.querySelector(".modal-img").height = "400";
  document.querySelector(".modal-img").width = "400";
  const myModal = new bootstrap.Modal( document.getElementById( 'tvModal' ) );
  myModal.show();
}