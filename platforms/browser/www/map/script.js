$('.carousel').carousel()

var maps = {
    foo: new google.maps.Map(document.getElementById('foo'), {
        center: new google.maps.LatLng(44.5403, -78.5463),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }),
    bar: new google.maps.Map(document.getElementById('bar'), {
        center: new google.maps.LatLng(44.5403, -78.5463),
        zoom: 8,
        mapTypeId: google.maps.MapTypeId.SATELLITE
    })
};

$('#carousel').on('slid.bs.carousel', function (e) {
    var map = maps[e.relatedTarget.dataset.map];
    google.maps.event.trigger(map, 'resize');
})