$(document).ready(function () {
    if (localStorage['projectDetailsObj'] == null) {
        window.location.replace("Projects.html");
    }
    else {
        var projectData = JSON.parse(localStorage.getItem('projectDetailsObj'));

        $(".projectName").html(projectData.projectName);
        $(".projectLocation").html(projectData.projectLocation);
        $(".projectDescription").html(projectData.projectDescription);
        $(".projectTotal").html(projectData.projectTotal);
        $(".projectUnits").html(projectData.projectUnits);
        $(".projectConfig").html(projectData.projectConfig);
        $(".projectStart").html(projectData.projectStart);
        $(".projectDuration").html(projectData.projectDuration);
        $(".projectConnectivity").html(projectData.projectConnectivity);
        $(".projectNearBy").html(projectData.projectNearBy);
    }
});