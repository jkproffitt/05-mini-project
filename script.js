var formEl = $('#projectForm');
var dateInputEl = $('#datepicker');
var projNameEl = $('#projName');
var projType = $('#projType');
var project = $('#projects')
var formEl = $('#projectForm');

var weekday = dayjs('2027-01-01', 'm-d-yyyy').format('dd');
$('#2a').text(weekday);
// Current Time 
var time = dayjs().format('h:mm:ss a');
$('#currentTime').text('The current time is: ' + time);
// Today's Date
var date = dayjs().format('MMM-DD-YYYY');
$('#currentDateAndTime').text('Today is: ' + date + ' at ' + time);


var printProject = function (name, type, date ) {
  var listEl = $('<li>');
  var listDetail = name.concat(' on ', type, date);
  listEl.addClass('list-group-item').text(listDetail);
  listEl.appendTo(project);
};

var handleFormSubmit = function (event) {
  event.preventDefault();

  var project = projNameEl.val();
  var type = projType.val();
  var dateInput = dateInputEl.val();

  if (!project || !dateInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printProject(project, type, dateInput);

  projNameEl.val('');
  projType.val('');
  dateInputEl.val('');
};
formEl.on('submit', handleFormSubmit);

// Datepicker widget
$(function () {
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true,
  });
});

$(function () {
$('#projects').sortable({
    placeholder: 'ui-state-highlight',
});
});
