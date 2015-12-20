var name = "Irene Canuti";
var formattedName = HTMLheaderName.replace("%data%", name);


var role = "Digital Designer and PM";
var formattedRole = HTMLheaderRole.replace("%data%", role);


$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var bio = {
	"name" : "Irene Canuti",
	"role" : "Digital Designer and PM",
	"contacts" : {
		"mobile" : "+44(0)7721140857",
		"email" : "irene.c@turnrealityon.com",
		"github" : "nenoch",
		"twitter" : "@irenecanuti_tro",
		"location" : "London, UK"
	},

	"welcomeMessage" : "Welcome to my resume!",
	"skills" : ["Visual Identity", "HTML/CSS", "Wordpress", "Adobe CS: Photoshop, InDesign, Illustrator", "Information Design", "Design Thinking", "Digital Strategy", "Brand Management", "Product Management", "Team building",
"Lean Startup"],
	"bioPic" : "images/irene.jpg"
};

var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").append(formattedBioPic);


var education = {
"schools" : [
	{
	"name" : "Kingston University",
	"dates" : "2014-2016",
	"location" : "Kingston Upon Thames, Greater London",
	"degree" : "MA",
	"majors" : ["Communication Design", "Human Centred Design", "Creative Economy"],
	"url" : "http://www.kingston.ac.uk/"
},
{
	"name" : "Istituto Franchi",
	"dates" : "2009-2010",
	"location" : "Florence, Italy",
	"degree" : "Adoce CS Professional Course",
	"majors" : ["Photoshop", "Illustrator", "InDesign", "Dreamweaver", "Flash"],
},
{
	"name" : "Universita degli Studi di Siena",
	"dates" : "2005-2010",
	"location" : "Siena, Italy",
	"degree" : "BA",
	"majors" : ["Communication Sciences", "Mass Communication", "New Media"],
	"url" : "http://en.unisi.it/"
}

],

"onlineCourses" : [
	{
	"school" : "Udacity",
	"dates" : "2015 - Present",
	"title" : "FEND : Front-End Web Developer",
	"url" : "https://www.udacity.com"
},
	{
	"school" : "Coder Manual",
	"dates" : "2015",
	"title" : "Web Developer Bootcamp",
	"url" : "https://codermanual.com/"
},
	{
	"school" : "General Assembly London",
	"dates" : "February 2015",
	"city" : "London, UK",
	"title" : "UX Design Bootcamp",
	"url" : "https://generalassemb.ly/"
}
]

};

var work = {
"jobs" : [
	{
	"employer" : "Self Employed",
	"dates" : "2013 - Present",
	"location" : "Italy, various locations | Shanghai, China | Greater London, UK",
	"title" : "Digital Strategist & Project Manager",
	"description" : ["Web Marketing", "E-commerce", "Web Design and Development", "UX", "Social Media", "Visual Identity", "Brand Management", "Digital Strategy", "User and Market Research"]
},
{
	"employer" : "DEtour",
	"dates" : "2014 - 2015",
	"location" : "Kingston Upon Thames, Greater London",
	"title" : "Managing Director & Product Manager",
	"description" : ["R&D", "HCD", "Product Management", "Brand Management", "Marketing", "Lean Startup", "HR", "Pitching"]
},
{
	"employer" : "Leaffing",
	"dates" : "2013 - 2014",
	"location" : "Vicenza, Italy",
	"title" : "Visual Designer",
	"description" : ["Presentations", "Illustrations", "Video editing", "Brand Management", "Storytelling"]
},
{
	"employer" : "YouSporty.com",
	"dates" : "2011 - 2013",
	"location" : "Padua, Italy",
	"title" : "Web Marketing Assistant",
	"description" : ["CRM", "Graphic and Web Design", "Visual Identity", "Web and Social marketing", "Direct Mailing", "PB digital marketing networks"]
},
{
	"employer" : "thisisiconic",
	"dates" : "2011",
	"location" : "London, UK",
	"title" : "Media Planner - Italian Market",
	"description" : ["Web analysis", "Media planning", "Walled gardens definition", "Competitors analysis", "Website optimisation", "Presentations", "Adobe Flash Animations"]
},
{
	"employer" : "ASL Health Campus",
	"dates" : "2010",
	"location" : "Volterra, Italy",
	"title" : "Tutor - Networks and Relationships",
	"description" : ["Health promotion and projects management", "Planning and management of recreational and educational activities", "Teamwork management"]
},
{
	"employer" : "Publimark",
	"dates" : "2009",
	"location" : "Grosseto, Italy",
	"title" : "Junior Graphic Designer",
	"description" : ["Copywriting", "Graphic Design", "Database Management"]
}

]

};

var projects = {
"projects" : [
	{
	"client" : "TOGADA Studio",
	"dates" : "2015",
	"title" : "VIPics Website",
	"description" : "Web and Graphic Design, Wordpress customisation and UX Consultancy"
},
	{
	"client" : "GIUSEPPE RIVADOSSI",
	"dates" : "2013-2015",
	"title" : "Web Identity and International Rebranding",
	"description" : "Web Design, Online Brand Management and Support during market expansion (Asia)"
},
	{
	"client" : "Barollo Wines",
	"dates" : "2014-2015",
	"title" : "Web Identity and Design",
	"description" : "UX Research and Consultancy, Brand identity and Graphci Design."
},
	{
	"client" : "Arredo91",
	"dates" : "2014",
	"title" : "Web Marketing",
	"description" : "Web and Social Media Marketing. Course design and Online training for the Marketing Department."
},
	{
	"client" : "Mondial Casa Italia",
	"dates" : "2013",
	"title" : "Mondial Casa Website",
	"description" : "E-commerce and Web identity"
}

]

};


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkill);
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[7]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[8]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[9]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[10]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[11]);
	$("#skills").append(formattedSkill);
	var formattedSkill = HTMLskills.replace("%data%", bio.skills[12]);
	$("#skills").append(formattedSkill);
};

function displayWork() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);

		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		$(".work-entry:last").append(formattedLocation);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);

	}
}

displayWork();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
	});

projects.display = function() {
		for(project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedClient = HTMLprojectClient.replace("%data%", projects.projects[project].client);
		$(".project-entry:last").append(formattedClient);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}

	}
};

$("#mapDiv").append(googleMap);

