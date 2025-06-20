$(document).ready(function () {
  const criteria = [
    {
      id: "criterion1",
      name: "Criterion 1",
      options: [
        "1.1.1 effective curriculum delivery",
        "1.1.2 academic calendar including CIE",
        "1.2.1 Number of elective options courses",
        "1.3.1- Cross Cutting",
        "1.3.2 Experimental Learning",
        "1.3.3. Percentage of students undertaking Mediation Client",
        "1.3.4 A",
        "1.3.4 B",
        "1.4.1 - A Collection of feedback forms",
        "1.4.1 B -Analysis of feedback",
        "1.4.1. C-Filled in feedback form samples",
        "1.4.1 D -Action Taken Report",
        "1.4.1 (E) Feedback report submitted",
      ],
    },
    {
      id: "criterion2",
      name: "Criterion 2",
      options: [
        "2.1.1-Enrolment Percentage",
        "2.1.2-Seats filled against reservation",
        "2.2.1-multiple intelligences of students",
        "2.2.2- Students-Full time teachers ratio",
        "2.3.1-STUDENT-CENTRIC-METHODS Final",
        "2.3.2 -Teacher Mentor-Student Mentor",
        "2.4.1-Teachers -Sectioned-post",
        "2.4.2-of-Ph.D.-Teachers",
        "2.4.3-Average-Teaching-Experience",
        "2.4.4- % of full time teachers",
        "2.5.1 Mechanism of internal Assessment ADSLC Final",
        "2.6.1-Programme-outcome-Course-outcome",
        "2.6.2 Pass percentage",
        "2.7.1",
        "2.7.1 SSS",
      ],
    },
    {
      id: "criterion3",
      name: "Criterion 3",
      options: [
        "3.1.1 Grants Received",
        "3.1.2. No. of seminar-workshop-RM-IPR",
        "3.1.3 Funded-Seminars-Conferences-workshops",
        "3.2.1-teachers recognized as research guide",
        "3.2.2-Research papers published",
        "3.2.3 (A)",
        "3.2.3(B)",
        "3.2.3(C)",
        "3.3.1-extension-activities",
        "3.3.2 Number of extension and outreach programs conducted by…",
        "3.3.3 Students participation",
        "3.4.1 Collaboration",
      ],
    },
    {
      id: "criterion4",
      name: "Criterion 4",
      options: ["4.1.2", "4.2.2", "4.4.1"],
    },
    {
      id: "criterion5",
      name: "Criterion 5",
      options: [
        "5.1.1-_students benefited by scholarship free ship",
        "5.1.2 -Skills enhancement",
        "5.1.2 A skills enhancement",
        "5.1.2 B skills enhancement",
        "5.1.2 C skills enhancement",
        "5.1.3 career counselling",
        "5.1.4 A implementation of statutory bodies",
        "5.1.4 B organization wide awareness and undertaking",
        "5.1.4 C Mechanism for student grievances",
        "5.1.4 D mechanism for timely redressed",
        "5.1.4 E mechanism for timely redressed",
        "5.2.1 _placement of outgoing students during the last five y…",
        "5.2.2-_students-enrolled-with-bar-council.pdf",
        "5.2.3 _students progressing to higher education during the l…",
        "5.2.4 _of students qualifying in state national international…",
        "5.3.1 awards medal by student",
        "5.3.2 student curricular and extracurricular activities",
        "5.3.3 institution conduct organized activities",
        "5.4.1 alumni association",
        "5.4.2 alumni contribution",
      ],
    },
    {
      id: "criterion6",
      name: "Criterion 6",
      options: [
        "6.1.1 Governance reflective to Vision and Mission",
        "6.1.2 Institutional Practices - Decentralization and Participate",
        "6.2.1 Institutional Perspective plan effectively deployed",
        "6.2.2 Institutional functioning - effective and efficient",
        "6.2.3 e-governance done",
        "6.2.3. A e-governance",
        "6.2.3. B e-governance",
        "6.2.3. C e-governance",
        "6.2.3. D e-governance",
        "6.3.1 Effective faculty Welfare measures",
        "6.3.2 Financial Support to teachers working",
        "6.3.3 FDP",
        "6.3.4 Appraisal System",
        "6.4.1 Financial Audit",
        "6.4.2 Funds -Grants from NGO",
        "6.4.3 Mobilization - Optimal Utilization of resource",
        "6.5.1 IQAC Contribution for quality assurance strategies",
        "6.5.2 IQAC Reviews - Incremental Improvement",
        "6.5.3 A. Quality Assurance Initiative IQAC",
        "6.5.3 B. Quality Assurance Initiative IQAC",
        "6.5.3 C. Quality Assurance Initiative IQAC",
        "6.5.3 D. Quality Assurance Initiative IQAC",
        "6.5.3 E. Quality Assurance Initiative IQAC",
        "6.5.3 F. Quality Assurance Initiative IQAC",
        "6.5.3 G. Quality Assurance Initiative IQAC",
        "6.5.3 H. Quality Assurance Initiative IQAC",
      ],
    },
    {
      id: "criterion7",
      name: "Criterion 7",
      options: [
        "7.1.1 Gender Audit and Gender Equity",
        "7.1.2 Alternate sources of energy",
        "7.1.3 Waste management",
        "7.1.4 Water Conservation",
        "7.1.5 Green Campus Audit",
        "7.1.6 Quality Audits- A",
        "7.1.6 Quality Audits - B",
        "7.1.6 - Quality Audit - C",
        "7.1.6 Quality Audit- D",
        "7.1.6 -Quality Audit - E",
        "7.1.7 Differently abled friendly campus",
        "7.1.8 Inclusive Environment",
        "7.1.9 Constitutional obligations",
        "7.1.10 Code of Conduct",
        "7.2.1 Best Practices",
        "7.3.1 Distinctiveness",
      ],
    },
  ];

  const params = new URLSearchParams(window.location.search);
  const criterion = params.get("q");

  const tableRows = criteria.find((c) => c.id === criterion);
  if (tableRows) {
    const htmlRows = tableRows.options.map((option) => {
      return `
         <tr>
            <td><a href="#">${option}</a></td>
        </tr>
        `;
    });
    $("#criteria-title").html(tableRows.name);
    $("#criteria-title2").html(tableRows.name);
    $("#criterionTable").html(htmlRows);
  } else {
    $("#criterionTable").html(`
         <tr>
            <td>Invalid URL!</td>
        </tr>`);
  }
});
