$(document).ready(function () {
// Display a welcome message or introduction
    $("#welcomeMessage").text("Welcome to Task Manager, your tool for efficient task management.");

// Scroll position persistence
    $(window).scroll(function () {
        sessionStorage.scrollTop = $(this).scrollTop();
    });

    if (sessionStorage.scrollTop !== "undefined") {
        $(window).scrollTop(sessionStorage.scrollTop);
    }

// DataTables plug-in configuration
    $('#taskTable').DataTable({
        columnDefs: [
            { ordering: false, targets: [4, 5] } // Disable sorting on columns 4 and 5
        ],
        pageLength: 25, // Show 25 records per page by default
        lengthMenu: [10, 25, 50, 100], // Define length menu options
        language: {
            paginate: {
                next: '<i class="fas fa-angle-right"></i>', // Custom pagination icons
                previous: '<i class="fas fa-angle-left"></i>'
            }
        }
    });
});
