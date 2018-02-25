function getPicture() {
    var tag = document.getElementById("tags").value;
    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var option = {
        tags: tag,
        tagmode: "any",
        format: "json"
    };

    $.getJSON( flickerAPI, option, function (data) {
        $.each( data.items, function( i, item ) {
            $( "<img>" ).attr( "src", item.media.m ).appendTo( "#images" );
        });
    });
}
 