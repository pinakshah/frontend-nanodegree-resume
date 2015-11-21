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
		location: "Ahmedabad",
	},
	welcomeMessage: "Thank you for taking time to visit my profile.",
	skills: [
		"HTML", "CSS", "Bootstrap", "JS", "jQuery", "Java", "Liferay"
	],
	biopic: "images/me.jpg",
	display: function (){
		// Name & Role
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		var contacts = $("#topContacts, #footerContacts");
		$("#header").prepend(formattedRole).prepend(formattedName);
		// Contact Information - Mobile & Email
		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$(contacts).append(formattedMobile).append(formattedEmail);
		// Contact Information - Twitter & Github
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$(contacts).append(formattedTwitter).append(formattedGithub);
		// Contact Information - Location
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$(contacts).append(formattedLocation);
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
	}
};

// Work Object
var work = {
	"jobs": [
		{
			"employer": "Aspire Software Solutions",
			"title": "Sr. Software Engineer",
			"location" : "Ahmedabad, Gujarat",
			"dates": "September 2010 - Future",
			"description": "My responsibilities includes - Working as technical " +
				"lead for the projects based on the Java and Liferay, Manage " +
			 	"multiple projects with different team members, Client " +
			 	"communication, Requirements Analysis and Gathering from the customers."
		},
		{
			"employer": "Pollux Softech Pvt. Ltd.",
			"title": "Software Engineer",
			"location" : "Ahmedabad, Gujarat",
			"dates": "May 2008 - April 2010",
			"description": "As software engineer, I am part of the team member " +
				"for the development of the project. We have to work on the " +
				"project from understanding of the requirements to development " +
				"and delivery of project and support of the project."
		}
	],
	display: function (){
		$(work.jobs).each(function(index){
			$("#workExperience").append(HTMLworkStart);
			var lastWorkEntry = $("#workExperience").find(".work-entry:last");
			// Add employer title
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			$(lastWorkEntry).append(formattedEmployerTitle);
			// Add dates, location, description
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);
			var formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[index].description);
			$(lastWorkEntry).append(formattedDates).append(formattedLocation).append(formattedDesc);
		});
	}
};

// Projects object
var projects = {
	"projects": [
		{
			"title": "OASIS Service Order Management System",
			"dates": "Febuary 2014 - Future",
			"description": "The OASIS Service Order Management system is intended to manage and " +
				"process customer service orders. The system will be used by customers to submit " +
				"service order to Home Health Advantage and used by Home Health Advantage " +
				"personnel to process the requests and generate the service deliverable – an " +
				"electronic report provided to the customers in the PDF format. Once the service " +
				"request is placed by the customer will be managed by the admin and manager and " +
				"it will be assigned to Reviewers to review the service request based on the " +
				"service request type and generate the report for the customer. To generate " +
				"the report calculation the PPS calculator is integrated with the portal to do " +
				"calculation on report as well as the manual calculation. Portal also includes " +
				"the  message board, calendar and chat features which are available to the " +
				"employee and contractor of the Home Health Advantage. It allows you to schedule " +
				"your emails and payment reminders including your customize email text as per " +
				"your requirement.",
			"images": [
				"http://www.homehealthadv.com/wp-content/uploads/2014/08/HHAPortal-300x237.jpg",
				"http://www.homehealthadv.com/wp-content/uploads/2014/08/" +
				"iStock_000001419825XSmall.ashx_-300x225.jpeg",
				"http://www.homehealthadv.com/wp-content/uploads/2014/08/medical-chart.png"
			]
		},
		{
			"title": "Web Development for a start-up (Private)",
			"dates": "December 2013 - April 2015",
			"description": "Developing a web application, using cutting edge technology. " +
				"Responsibility for technical characterization and development of web " +
				"application for travel domain in both server and client side. Responsibility " +
				"for all the infrastructure components including mobile connections and other " +
				"APIs, being professional focal point for the team.Daily work with the product " +
				"development manager.",
		},
		{
			"title": "Geliyoo",
			"dates": "January 2014 - April 2014",
			"description": "Search Engine Application. Geliyoo Bilisim is a Turkish " +
				"multinational corporation that specializes in Internet-related services and " +
				"products. Using this application, users can search and get information for any " +
				"word. Geliyoo has its own search engine crawler and Admin module and many " +
				"other features."
		},
		{
			"title": "Billgrid",
			"dates": "December 2011 - April 2013",
			"description": "BillGrid is web-based Software as a service (SAAS) application " +
				"which allows you to keep track of all your clients and their projects' billing " +
				"information - estimates, invoices, expenses and tracking time on project task. " +
				"This application focuses on providing services to the small to medium sized " +
				"company in maintenance of their accounts and billings."
		}
	],
	display: function (){
		$(projects.projects).each(function(index){
			$("#projects").append(HTMLprojectStart);
			// Select last entry to append content
			var lastProjectEntry = $("#projects").find(".project-entry:last");
			// Add employer title
			var formattedTitle = HTMLprojectTitle .replace("%data%", projects.projects[index].title);
			$(lastProjectEntry).append(formattedTitle);
			// Add dates, location, description
			var formattedDates = HTMLprojectDates .replace("%data%", projects.projects[index].dates);
			var formattedDesc = HTMLprojectDescription .replace("%data%", projects.projects[index].description);
			$(lastProjectEntry).append(formattedDates).append(formattedDesc);
			// Add project images
			if(projects.projects[index].images){
				for(var imgIndx = 0; imgIndx < projects.projects[index].images.length; imgIndx++){
					var formattedImage = HTMLprojectImage .replace("%data%", projects.projects[index].images[imgIndx]);
					$(lastProjectEntry).append(formattedImage);
				}
			}
		});
	}
};

// Education object
var education = {
	"schools": [
		{
			"name": "Charotar Instittue of Technology",
			"city": "Changa",
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
	],
	display: function (){
		// Add schools content
		$(education.schools).each(function(index){
			$("#education").append(HTMLschoolStart);
			// Select last entry to append content
			var lastEducationEntry = $("#education").find(".education-entry:last");
			// Add school name
			var formattedName = HTMLschoolName .replace("%data%", education.schools[index].name);
			var formattedDegree = HTMLschoolDegree .replace("%data%", education.schools[index].degree);
			$(lastEducationEntry).append(formattedName + formattedDegree);
			// Add dates, location, major
			var formattedDates = HTMLschoolDates .replace("%data%", education.schools[index].dates);
			$(lastEducationEntry).append(formattedDates);
			var formattedLocation = HTMLschoolLocation .replace("%data%", education.schools[index].city);
			$(lastEducationEntry).append(formattedLocation);
			var formattedMajor = HTMLschoolMajor .replace("%data%", education.schools[index].majors);
			$(lastEducationEntry).append(formattedMajor);
		});
		// Add online courses content
		$(education.onlineCourses).each(function(index){
			// Add Online Courses label
			$("#education").append(HTMLonlineClasses).append(HTMLschoolStart);
			// Select last entry to append content
			var lastEducationEntry = $("#education").find(".education-entry:last");
			// Add title and school
			var formattedTitle = HTMLonlineTitle .replace("%data%", education.onlineCourses[index].title);
			var formattedSchool = HTMLonlineSchool .replace("%data%", education.onlineCourses[index].school);
			$(lastEducationEntry).append(formattedTitle + formattedSchool);
			// Add dates and URL
			var formattedDates = HTMLonlineDates .replace("%data%", education.onlineCourses[index].dates);
			var formattedURL = HTMLonlineURL .replace("%data%", education.onlineCourses[index].url);
			$(lastEducationEntry).append(formattedDates).append(formattedURL);
		});
	}
};

// Display bio content
bio.display();
// Display work content
work.display();
// Display project content
projects.display();
// Display education content
education.display();

// Add google map
$("#mapDiv").append(googleMap);

/*function inName() {
	var name = $('#name').text();
	var inName = '';
	inName += name.slice(0,1).toUpperCase();
	inName += name.slice(1,name.indexOf(" ")).toLowerCase();
	inName += " ";
	inName += name.slice(name.indexOf(" ") + 1).toUpperCase();
	return  inName;
}
$("#main").append(internationalizeButton);*/