//sidebar
$('.mobile-nav-menu').click(function () {
  $('#homescreen-image').toggleClass('homescreen-image-side-nav');
  $('.sidenav-content').toggleClass('display');
});

$(document).click(function (e) {
  var sidebar = $('.sidenav-content, .mobile-nav-menu, #homescreen-image');
  if (!sidebar.is(e.target) && sidebar.has(e.target).length == 0) {
    sidebar.removeClass('display');
    sidebar.removeClass('homescreen-image-side-nav');
  }
});

// modal
$(document).ready(function () {
  $('.modal').modal({
    opacity: 0.8,
    endingTop: '20%',
    inDuration: 600,
    outDuration: 600,
  });
});

//Check Box
$(document).ready(function () {
  $('select').formSelect();
});

/////////////// MAP ////////////////////////
// svg path for target icon
var targetSVG =
  'M 60.71 34.36 a 26.28 26.28 0 0 1 -3 11.2 A 190.43 190.43 0 0 1 42.3 65.8 s -9.88 -9.35 -16.2 -20.42 a 26.18 26.18 0 0 1 -2.62 -10.78 c 0 -10.3 8.33 -19.25 18.62 -19.25 s 18.61 8.72 18.61 19 m -8.85 -1 A 9.6 9.6 0 1 0 42.27 43 a 9.59 9.59 0 0 0 9.59 -9.59';

AmCharts.makeChart('mapdiv', {
  type: 'map',
  addClassNames: true,

  dataProvider: {
    map: 'worldLow',
    getAreasFromMap: true,
    linkToObject: 'UK',
    images: [
      {
        id: 'UK',
        color: 'red',
        svgPath: targetSVG,
        label: 'UK',
        labelColor: '#ffa000',
        labelRollOverColor: '#ffa000',
        labelFontSize: 12,
        title: 'UK',
        labelShiftX: -15,
        labelShiftY: -10,
        latitude: 54.230956,
        longitude: -13.4363316,
        scale: 0.4,
        zoomLevel: 1.8,
        zoomLongitude: 10.1341,
        zoomLatitude: 40,

        images: [
          {
            label: 'NAPE CHAPTERS',
            left: 100,
            top: 45,
            labelShiftY: 5,
            labelColor: '#ffa000',
            labelRollOverColor: '#ffa000',
            labelFontSize: 20,
            labelFontWeight: 900,
          },
          {
            label: 'View Local Chapters in Nigeria',
            left: 106,
            top: 70,
            labelColor: '#000000',
            labelRollOverColor: '#CC0000',
            labelFontSize: 12,
            linkToObject: 'lagos',
          },
        ],
      },

      {
        id: 'lagos',
        title: 'Lagos',
        latitude: 6.6039262,
        longitude: 3.3327518,
        scale: 0.4,
        zoomLevel: 14.92,
        zoomLongitude: 3.4492,
        zoomLatitude: 6.2631,

        images: [
          {
            label: 'NAPE CHAPTERS',
            left: 100,
            top: 45,
            labelShiftY: 5,
            labelColor: '#CC0000',
            labelRollOverColor: '#CC0000',
            labelFontSize: 20,
          },
          {
            label: 'Local Chapters in Nigeria',
            left: 106,
            top: 70,
            labelColor: '#000000',
            labelRollOverColor: '#CC0000',
            labelFontSize: 11,
            linkToObject: 'UK',
          },
        ],
      },
      {
        svgPath: targetSVG,
        title: 'lagos',
        latitude: 6.5483768,
        longitude: 3.1438707,
        color: 'green',
        scale: 0.4,
      },
      {
        svgPath: targetSVG,
        title: 'abuja',
        latitude: 9.0546462,
        longitude: 7.254268,
        color: 'yellow',
        label: 'Abuja',
        labelShiftX: -15,
        labelShiftY: -10,
        labelColor: '#CC0000',
        labelRollOverColor: '#CC0000',
        labelFontSize: 12,
        scale: 0.4,
      },
      {
        svgPath: targetSVG,
        title: 'Port Harcourt',
        latitude: 4.8243326,
        longitude: 6.9635048,
        color: 'black',
        scale: 0.4,
      },
      {
        svgPath: targetSVG,
        title: 'Warri',
        latitude: 5.5523806,
        longitude: 5.7079092,
        color: 'orange',
        scale: 0.4,
      },
      {
        svgPath: targetSVG,
        title: 'Benin City',
        latitude: 6.3478976,
        longitude: 5.5023776,
        color: 'purple',
        scale: 0.4,
      },
    ],
  },

  areasSettings: {
    unlistedAreasColor: '#FFCC00',
  },

  imagesSettings: {
    color: '#CC0000',
    rollOverColor: '#CC0000',
    selectedColor: 'blue',
  },

  backgroundZoomsToTop: true,
  linesAboveImages: true,
});
/////////////// MAP ENDS HERE ////////////////////////

//sidenav bar: website links
$('.dropdown-trigger').dropdown({
  hover: true,
});
