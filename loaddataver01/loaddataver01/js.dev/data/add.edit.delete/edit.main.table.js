// To do code edit data
$(document).ready(function () {
    //$(".edit").click(function (e) {
    //    e.preventDefault();
    //    var id = $(this).parent().parent().attr('id');
    //    // To do code setting data. 
    //    console.log(id); 
    //});

    $("#edit-detail-employee").click(function (e) {
        e.preventDefault();
        var dataToPost = { "employeeID": "19020608", "workHours": 199, "offDay": 1, "overTime": 12, "extraday": 10, "employeedetail": null };
        console.log(dataToPost); 
        $.ajax({
            type: "Put",
            url: "http://localhost:57824/api/timeinfoes/1",
            contentType: "application/json; charset=utf-8",
            data: dataToPost,
            dataType: "json",
            success: function () {
                alert("success"); 
            }
        });
    
    });
    
})