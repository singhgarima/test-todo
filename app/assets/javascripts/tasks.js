

$(document).ready(function () {

    $('.task_status :checkbox').click(function() {
        $(this).closest('form').submit();
    });

});