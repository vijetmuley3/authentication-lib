/**
 * Redirects to the value set in the hidden input field #contextPath
 */
function cancel() {
	location.href = $('#contextPath').val();
}

/**
 * Use debounce to wait for keyboard silence before executing a function.
 * For example:
 * 	 $('#username').on('keydown blur change', debounce(myfunction));
 * @param func
 * @param wait
 * @param immediate
 * @returns
 */
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

/**
 * Produces muted text div with the provided text.
 * @param text The text to display.
 * @param classNames A space separated list of CSS class names.
 * @returns HTML div with given text and classes.
 */
function mutedDiv(text, classNames) {
	return '<div class="text-muted ' + classNames + '">' + text + '</div>';
}

/**
 * Enable or disable save button on save and cancel form fragment.
 */
function disableSave(booleanValue) {
	if (booleanValue) {
		$('.form-controls button[name=save]').attr('disabled', 'disabled');
	} else {
		$('.form-controls button[name=save]').attr('disabled', null);
	}
}

$(function() {
	$('.users-table').DataTable({
		responsive: true
	});
	
	$('.btn.cancel').on('click', cancel);
	
	$("input[name=accountExpirationDate]").datepicker();
	$("input[name=credentialsExpirationDate]").datepicker();
});