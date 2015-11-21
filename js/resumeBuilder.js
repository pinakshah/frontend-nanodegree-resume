/*
This is empty on purpose! Your code to build the resume will go here.
 */

// Bio object
var bio = {
	name: "Pinak Shah",
	role: "Front-end Developer",
	contacts: {
		mobile: "992-413-2412",
		email: "pinakshah33@gmail.com",
		github: "pinakshah",
		twitter: "@pinakshah",
		location: "India",
	},
	welcomeMessage: "Thank you for taking time to visit my profile.",
	skills: [
		"HTML", "CSS", "Bootstrap", "JS", "jQuery", "Java"
	],
	biopic: "images/me.jpg"
}

// Name & Role
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole).prepend(formattedName);

// Contact Information
var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts.mobile);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
//$('#topContacts').append(formattedContact);
$('#topContacts').append(formattedMobile);
$('#topContacts').append(formattedEmail);
$('#topContacts').append(formattedTwitter);
$('#topContacts').append(formattedGithub);
$('#topContacts').append(formattedLocation);

// bio pic
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedBioPic);

// Welcome message
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
$("#header").append(formattedWelcomeMsg);

// Skills
if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);
	var formattedSkill = null;
	for(var i = 0; i < bio.skills.length; i++) {
		formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
		$("#skills").append(formattedSkill);
	}
}


var work = {
	"jobs": [
		{
			"employer": "Aspire Software Solutions",
			"title": "Sr. Software Engineer",
			"dates": "September 2010 - Future",
			"description": "Description for Job"
		},
		{
			"employer": "Pollux Softech Pvt. Ltd.",
			"title": "Software Engineer",
			"dates": "May 2008 - April 2010",
			"description": "Description for Job"
		}
	]
};


var formattedEmployer, formattedTitle, formattedDates, formattedDesc;
for(job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job]["employer"]);
	formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job]["title"]);
	formattedDates = HTMLworkDates.replace("%data%", work.jobs[job]["dates"]);
	formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[job]["description"]);
	$("#workExperience").find('.work-entry:last').append(formattedEmployer + formattedTitle).append(formattedDates).append(formattedDesc);
}



var education = {
	"schools": [
		{
			"name": "Gujarat University",
			"city": "Ahmedabad, GJ",
			"degree": "Bachelors",
			"majors": ["CE"],
			"dates": 2008,
			"url": "http://www.gujaratuniversity.org.in/"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": 2015,
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
};

$("#education").append(HTMLschoolStart);
var formattedSchoolName = HTMLschoolName.replace("%data%", education.name);
$("#education").find('.education-entry').append(formattedSchoolName);

var projects = {
	"projects": [
		{
			"title": "",
			"dates": "",
			"description": "",
			"images": [
				"url1", "url2"
			],
		},
	]
}