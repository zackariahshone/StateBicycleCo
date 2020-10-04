$(document).ready(function () {

    for (let i = 2; i < 12; i++) {
        const div = $('<div>', {
            id: 'imgCol',
            "class": "col-sm-12 col-lg-4 mb-5",
        });
    
        $('#galRow').append(div);
       
        const galleryimg = "../assets/img/Gallery/gallery_"+[i]+'.jpeg';
        div.prepend($('<img>', {
            id: 'theImg',
            src: galleryimg
        }))
        
    }
});

