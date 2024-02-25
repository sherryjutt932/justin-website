// INCLUDE JQUERY & JQUERY UI 1.12.1
$( function() {
	$( "#datepicker" ).datepicker({
		dateFormat: "dd-mm-yy"
		,	duration: "fast"
	});
} );


  let selectedTimeSlot = null;

  function showTimePicker() {
    document.getElementById("timePickerPopup").style.display = "block";
  }

  function selectTime(timeSlot) {
    if (selectedTimeSlot) {
      selectedTimeSlot.classList.remove("selected");
    }
    selectedTimeSlot = event.target;
    selectedTimeSlot.classList.add("selected");
    document.querySelector(".time-picker input").value = timeSlot;
    document.getElementById("timePickerPopup").style.display = "none";
  }

  document.addEventListener("click", function(event) {
    if (!event.target.closest(".time-picker")) {
      document.getElementById("timePickerPopup").style.display = "none";
    }
  });

  function handleScroll(event) {
    const delta = Math.max(-1, Math.min(1, (event.wheelDelta || -event.detail)));
    event.currentTarget.scrollTop += -(delta * 10);
    event.preventDefault();
  }