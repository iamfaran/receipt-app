// if ($("#datePicker")[0].type != "date") $("#datePicker").datepicker();
if ($('[type="date"]').prop("type") != "date") {
  $('[type="date"]').datepicker();
}
