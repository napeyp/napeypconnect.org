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
    opacity: 0.5,
    endingTop: '40%',
    inDuration: 600,
    outDuration: 600,
  });
});

// $(document).ready(function () {
//   M.updateTextFields();
// });

$(document).ready(function () {
  $('select').formSelect();
});

/////////////// MAP ////////////////////////
// svg path for target icon
var targetSVG =
  'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z';

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
        labelFontSize: 20,
        title: 'UK',
        latitude: 54.230956,
        longitude: -13.4363316,
        scale: 1,
        zoomLevel: 1.74,
        zoomLongitude: 10.1341,
        zoomLatitude: 50,

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
        scale: 1,
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
      },
      {
        svgPath: targetSVG,
        title: 'abuja',
        latitude: 9.0546462,
        longitude: 7.254268,
        color: 'yellow',
        label: 'Abuja',
        labelShiftY: 5,
        labelColor: '#CC0000',
        labelRollOverColor: '#CC0000',
        labelFontSize: 20,
      },
      {
        svgPath: targetSVG,
        title: 'Port Harcourt',
        latitude: 4.8243326,
        longitude: 6.9635048,
        color: 'blue',
      },
      {
        svgPath: targetSVG,
        title: 'Warri',
        latitude: 5.5523806,
        longitude: 5.7079092,
        color: 'orange',
      },
      {
        svgPath: targetSVG,
        title: 'Benin City',
        latitude: 6.3478976,
        longitude: 5.5023776,
        color: 'white',
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
