$(document).ready(function () {
    $("#btnCurrent").click(function () {
        $("#Current").show();
        $("#Past").hide();
        $("#Future").hide();
        $("#selectedProject").html('Current Projects');
    });
    $("#btnPast").click(function () {
        $("#Past").show();
        $("#Current").hide();
        $("#Future").hide();
        $("#selectedProject").html('Past Projects');
    });
    $("#btnFuture").click(function () {
        $("#Future").show();
        $("#Current").hide();
        $("#Past").hide();
        $("#selectedProject").html('Future Projects');
    });

    var currentProjects = [], pastProjects = [];

    function bindProjects() {
        var currentProjectsObj = {}, currentProjectsObj1 = {}, currentProjectsObj2 = {};
        currentProjectsObj.projectName = 'VISHWAJEET ELITE';
        currentProjectsObj.projectLocation = 'MorivaliPada, Ambernath East';
        currentProjectsObj.projectUnits = '80 Residential Flats';
        currentProjectsObj.projectConfig = '1BHK';
        currentProjectsObj.projectDuration = '2016-Ongoing';
        currentProjectsObj.projectDescription = 'Vishwajeet Elite, is where life happens. The comforts and conveniences here are at your beck Y call and pamper you with an extravagant experience of a highlife, every day. Come live the life you always desired for: all comprised in one planet that you lovingly call your home.';
        currentProjectsObj.projectTotal = '80 Flats of 1BHK 1-Tower of Stilt + Ground + 7 Storeys';
        currentProjectsObj.projectStart = '2017';
        currentProjectsObj.projectConnectivity = 'FromAmbernath Station (Sharing Auto Available)';
        currentProjectsObj.projectNearBy = 'School, College, Market, Hospitalon (Walking Distance)';
        currentProjectsObj.imgPath = 'img/bg-img/43.jpg';
        currentProjects.push(currentProjectsObj);

        currentProjectsObj1.projectName = 'VISHWAJEET MANOR';
        currentProjectsObj1.projectLocation = 'Badlapur';
        currentProjectsObj1.projectUnits = '128 Residential Flats';
        currentProjectsObj1.projectConfig = '1RK & 1BHK';
        currentProjectsObj1.projectDuration = '2019-Ongoing';
        currentProjectsObj1.projectDescription = "Vishwajeet Manor, An address that will be close to your happiness you wished for home where happiness takes centre stage of life. A private haven and don't miss out on the city buzz.At Vishwajeet Manor it bridges between wishes and wants and brings you closer to everything and everywhere.A integrated lifestyle taking shape at BadlapurKatrap.";
        currentProjectsObj1.projectTotal = '128 Flats 2-Tower of Stilt Ground + 7 Storeys';
        currentProjectsObj1.projectStart = '2016';
        currentProjectsObj1.projectConnectivity = '2km FromBadlapur Station (Sharing Auto Available)';
        currentProjectsObj1.projectNearBy = 'School, College, Market, Hospitalon (Walking Distance)';
        currentProjectsObj1.imgPath = 'img/bg-img/43.jpg';
        currentProjects.push(currentProjectsObj1);

        currentProjectsObj2.projectName = 'VISHWAJEET PARADISE';
        currentProjectsObj2.projectLocation = 'Chikhloli';
        currentProjectsObj2.projectUnits = '333 Residential Flats';
        currentProjectsObj2.projectConfig = '1RK, 1 BHK & 2BHK';
        currentProjectsObj2.projectDuration = '2019-Ongoing';
        currentProjectsObj2.projectDescription = "Vishwajeet Paradise is the largest integrated township in Chikhloli. Apart from introducing a unique living experience, homes here have been created with an eco-sense. This mega township is located at prime location with all the amenities. Vishwajeet Paradise is made up of 4 residential buildings, 2 standing G+12 floors, 1 Standing G+9 floor & 1 Standing G+4 floor tall Housing 1RK, 1 BHK & 2 BHK Apartments. A truly integrated township, Vishwajeet Paradise has a hospital, a school, a vegetable market in the same vicinity of the project.";
        currentProjectsObj2.projectTotal = '4 residential buildings, 2 standing G+12 floors, 1 Standing G+9 floor & 1 Standing G+4 floor tall Housing 1RK, 1 BHK & 2 BHK Apartments.';
        currentProjectsObj2.projectStart = '2015';
        currentProjectsObj2.projectConnectivity = '2km FromBadlapur Station (Sharing Auto Available From Ambernath&Badlapur Railway Station)';
        currentProjectsObj2.projectNearBy = 'School, College, Market, Hospitalon (Walking Distance)';
        currentProjectsObj2.imgPath = 'img/bg-img/43.jpg';
        currentProjects.push(currentProjectsObj2);


        var bindObj = '';
        for (var i = 0; i < currentProjects.length; i++) {
            bindObj += '<div class="col-md-6 boxMainShadow">' +
                        '<div class="single-room-area d-flex align-items-center mb-50 wow fadeInUp" data-wow-delay="100ms">' +
            '      <div class="room-thumbnail boxMainImg">' +
            '         <img src="' + currentProjects[i].imgPath + '" alt="">' +
            '    </div>' +
            '   <div class="room-content boxMainContent">' +
            '      <h4 class="projectName">' + currentProjects[i].projectName + '</h4>' +
            '     <h5 class="projectLocation">' + currentProjects[i].projectLocation + '</h5>' +
            '    <div class="room-feature">' +
            '       <span style="color: #afb4bf; margin-right: 10px">No. of Units: </span>' +
            '      <p  class="projectUnits">' + currentProjects[i].projectUnits + '</p>' +
            '     <span style="color: #afb4bf; margin-right: 10px">Configuration: </span>' +
            '    <p class="projectConfig">' + currentProjects[i].projectConfig + '</p>' +
            '   <span style="color: #afb4bf; margin-right: 10px">Project Duration: </span>' +
            '  <p  class="projectDuration">' + currentProjects[i].projectDuration + '</p>' +
            ' <span style="display:none" class="projectTotal">' + currentProjects[i].projectTotal + '</span>' +
            '<span style="display:none" class="projectStart">' + currentProjects[i].projectStart + '</span>' +
            '<span style="display:none" class="projectDescription">' + currentProjects[i].projectDescription + '</span>' +
            '<span style="display:none" class="projectConnectivity">' + currentProjects[i].projectConnectivity + '</span>' +
            '<span style="display:none" class="projectNearBy">' + currentProjects[i].projectNearBy + '</span>' +
            '        </div>' +
            '         <a href="#" class="btn view-detail-btn projectDetailView">View Details <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>' +
            '      </div>' +
                     '   </div>' +
                    '</div>';
        }

        $("#Current").html(bindObj);


        var pastProjectsObj = {}, pastProjectsObj1 = {}, pastProjectsObj2 = {}, pastProjectsObj3 = {}, pastProjectsObj4 = {};
        pastProjectsObj.projectName = 'VISHWAJEET DWELLINGS';
        pastProjectsObj.projectLocation = 'Navare Nagar, Ambernath East';
        pastProjectsObj.projectUnits = '27 Residential Flats & 4 Commercial Shop';
        pastProjectsObj.projectConfig = '1 BHK & Commercial Shops';
        pastProjectsObj.projectDuration = '2014-2015 Completed';
        pastProjectsObj.projectDescription = 'Vishwajeet Dwellings Every luxury, right from the green scapes, grand Living spaces, arenas to space for your Luxury on wheels for your Luxury on wheels, all are conceived and designed while considering your taste for an upscale life. Step in here and you will realise that this is the ideal place where you come closer to top class living. ';
        pastProjectsObj.projectTotal = '27 Apartments of 1BHK 1-Tower of Ground + 7 StoreysGreenscape Ample Parking Space';
        pastProjectsObj.projectStart = '2014';
        pastProjectsObj.projectConnectivity = '2km FromAmbernath Station (Sharing Auto Available)';
        pastProjectsObj.projectNearBy = 'School, College, Market, Hospitalon (Walking Distance)';
        pastProjectsObj.imgPath = 'img/bg-img/43.jpg';
        pastProjects.push(pastProjectsObj);

        pastProjectsObj1.projectName = 'VISHWAJEET PLANETS';
        pastProjectsObj1.projectLocation = 'Ambernath';
        pastProjectsObj1.projectUnits = '41 Residential Flats & 7 Commercial Shops';
        pastProjectsObj1.projectConfig = '1RK, 1BHK & Commercial Shops';
        pastProjectsObj1.projectDuration = '2016-2017 Completed';
        pastProjectsObj1.projectDescription = 'Vishwajeet Planets that doesn’t compromise on a Perfect Life. Vishwajeet Planets is where life happens. The comforts and conveniences here are at your beck & call and pamper you with an extravagant experience of a highlife every day. Come live the life you always desired for all comprised in one planet that you lovingly call your home.';
        pastProjectsObj1.projectTotal = '41 Residential Flats & 7 Commercial Shops';
        pastProjectsObj1.projectStart = '2016';
        pastProjectsObj1.projectConnectivity = '2km fromAmbernath Station (Sharing Auto Available)';
        pastProjectsObj1.projectNearBy = '';
        pastProjectsObj1.imgPath = 'img/bg-img/43.jpg';
        pastProjects.push(pastProjectsObj1);

        pastProjectsObj2.projectName = 'Vishwajeet Green';
        pastProjectsObj2.projectLocation = 'Ambernath';
        pastProjectsObj2.projectUnits = '224 Residential Flats';
        pastProjectsObj2.projectConfig = '1 & 2 BHK';
        pastProjectsObj2.projectDuration = '2012-2014 Completed';
        pastProjectsObj2.projectDescription = "Vishwajeet Green is the largest integrated township in Ambarnath. Apart from introducing a unique living experience, homes here have been created with an eco-sense. This mega township is located at a prime location with all the amenities. Vishwajeet Green is made up of 6 residential towers, each standing Stilt + 7 floors tall housing 1 and 2 BHK homes. A truly integrated township, Vishwajeet Green has a hospital, a school, a vegetable market in the same vicinity of the project.";
        pastProjectsObj2.projectTotal = '6 residential towers, each standing Stilt + 7 floors tall housing 1 and 2 BHK homes.';
        pastProjectsObj2.projectStart = '2012';
        pastProjectsObj2.projectConnectivity = '2km FromAmbernath Station (Sharing Auto Available)';
        pastProjectsObj2.projectNearBy = 'School, College, Market, Hospitalon (Walking Distance)';
        pastProjectsObj2.imgPath = 'img/bg-img/43.jpg';
        pastProjects.push(pastProjectsObj2);

        pastProjectsObj3.projectName = 'VISHWAJEET EDGE';
        pastProjectsObj3.projectLocation = 'Ambernath';
        pastProjectsObj3.projectUnits = '184 Residential Flats';
        pastProjectsObj3.projectConfig = '1 & 2 BHK';
        pastProjectsObj3.projectDuration = '2015-2017 Completed';
        pastProjectsObj3.projectDescription = 'Vishwajeet Edge is the largest integrated township in Ambarnath. Apart from introducing a unique living experience, homes here have been created with an eco-sense. This mega township is located at a prime location with all the amenities. Vishwajeet Edge is made up of 8 residential buildings, each standing LG+G+7 floors 2 Tower & Another 6 towers, each standing G+4 floors tall housing 1 BHK & 2 BHK Appartments. A truly integrated township, Vishwajeet Edge has a hospital, a school, a vegetable market in the same vicinity of the project.';
        pastProjectsObj3.projectTotal = '8 residential buildings, each standing LG+G+7 floors 2 Tower & Another 6 towers, each standing G+4 floors tall housing 1 BHK & 2 BHK Appartments.';
        pastProjectsObj3.projectStart = '2015';
        pastProjectsObj3.projectConnectivity = '2km From Ambernath Station (Sharing Auto Available)';
        pastProjectsObj3.projectNearBy = 'School, College, Market, Hospitalon (Walking Distance)';
        pastProjectsObj3.imgPath = 'img/bg-img/43.jpg';
        pastProjects.push(pastProjectsObj3);

        pastProjectsObj4.projectName = 'VISHWAJEET MEADOWS';
        pastProjectsObj4.projectLocation = 'Ambernath';
        pastProjectsObj4.projectUnits = '182 Residential Flats& 5 Row House';
        pastProjectsObj4.projectConfig = '1 & 2 BHK';
        pastProjectsObj4.projectDuration = '2011-2013 Completed';
        pastProjectsObj4.projectDescription = 'Vishwajeet Meadows is the largest integrated township in Ambarnath. Apart from introducing a unique living experience, homes here have been created with an eco-sense. This mega township is located at a prime location with all the amenities. Vishwajeet Meadows is made up of 5 residential buildings, each standing 7 floors tall housing 1 & 2 BHK homes & 5 Raw Houses. A truly integrated township, Vishwajeet Meadows has a hospital, a school, a vegetable market in the same vicinity of the project.';
        pastProjectsObj4.projectTotal = '5 residential buildings, each standing 7 floors tall housing 1 & 2 BHK homes & 5 Raw Houses';
        pastProjectsObj4.projectStart = '2011';
        pastProjectsObj4.projectConnectivity = '2km FromAmbernath Station (Sharing Auto Available)';
        pastProjectsObj4.projectNearBy = 'School, College, Market, Hospitalon (Walking Distance)';
        pastProjectsObj4.imgPath = 'img/bg-img/43.jpg';
        pastProjects.push(pastProjectsObj4);


        bindObj = '';
        for (var i = 0; i < pastProjects.length; i++) {
            bindObj += '<div class="col-md-6 boxMainShadow">' +
                        '<div class="single-room-area d-flex align-items-center mb-50 wow fadeInUp" data-wow-delay="100ms">' +
            '      <div class="room-thumbnail boxMainImg">' +
            '         <img src="' + pastProjects[i].imgPath + '" alt="">' +
            '    </div>' +
            '   <div class="room-content boxMainContent">' +
            '      <h4 class="projectName">' + pastProjects[i].projectName + '</h4>' +
            '     <h5 class="projectLocation">' + pastProjects[i].projectLocation + '</h5>' +
            '    <div class="room-feature">' +
            '       <span style="color: #afb4bf; margin-right: 10px">No. of Units: </span>' +
            '      <p  class="projectUnits">' + pastProjects[i].projectUnits + '</p>' +
            '     <span style="color: #afb4bf; margin-right: 10px">Configuration: </span>' +
            '    <p class="projectConfig">' + pastProjects[i].projectConfig + '</p>' +
            '   <span style="color: #afb4bf; margin-right: 10px">Project Duration: </span>' +
            '  <p  class="projectDuration">' + pastProjects[i].projectDuration + '</p>' +
            ' <span style="display:none" class="projectTotal">' + pastProjects[i].projectTotal + '</span>' +
            '<span style="display:none" class="projectStart">' + pastProjects[i].projectStart + '</span>' +
            '<span style="display:none" class="projectDescription">' + pastProjects[i].projectDescription + '</span>' +
            '<span style="display:none" class="projectConnectivity">' + pastProjects[i].projectConnectivity + '</span>' +
            '<span style="display:none" class="projectNearBy">' + pastProjects[i].projectNearBy + '</span>' +
            '        </div>' +
            '         <a href="#" class="btn view-detail-btn projectDetailView">View Details <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>' +
            '      </div>' +
                     '   </div>' +
                    '</div>';
        }

        $("#Past").html(bindObj);
    }

    bindProjects();

    $(".projectDetailView").click(function () {
        var mainDiv = $(this).closest('.boxMainShadow');
        var mainContent = $(mainDiv).find('div.boxMainContent');
        var projectData = {}
        projectData.projectName = $(mainContent).find('.projectName').html();
        projectData.projectLocation = $(mainContent).find('.projectLocation').html();
        projectData.projectUnits = $(mainContent).find('.projectUnits').html();
        projectData.projectConfig = $(mainContent).find('.projectConfig').html();
        projectData.projectDuration = $(mainContent).find('.projectDuration').html();
        projectData.projectDescription = $(mainContent).find('.projectDescription').html();
        projectData.projectTotal = $(mainContent).find('.projectTotal').html();
        projectData.projectStart = $(mainContent).find('.projectStart').html();
        projectData.projectConnectivity = $(mainContent).find('.projectConnectivity').html();
        projectData.projectNearBy = $(mainContent).find('.projectNearBy').html();
        localStorage.setItem("projectDetailsObj", JSON.stringify(projectData));
        window.location.replace('ProjectDetails.aspx');
    });

});