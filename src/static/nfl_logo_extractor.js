/*
	used for extracting NFL team logos
*/

var images = [
  [
    "http://loodibee.com/wp-content/uploads/nfl-arizona-cardinals-team-logo-2-300x300.png",
    "Arizona Cardinals"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-atlanta-falcons-team-logo-2-300x300.png",
    "Atlanta Falcons"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-baltimore-ravens-team-logo-2-300x300.png",
    "Baltimore Ravens"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-buffalo-bills-team-logo-2-300x300.png",
    "Buffalo Bills"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-carolina-panthers-team-logo-2-300x300.png",
    "Carolina Panthers"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-chicago-bears-team-logo-2-300x300.png",
    "Chicago Bears"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-cincinnati-bengals-team-logo-300x300.png",
    "Cincinnati Bengals"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-cleveland-browns-team-logo-2-300x300.png",
    "Cleveland Browns"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-dallas-cowboys-team-logo-2-300x300.png",
    "Dallas Cowboys"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-denver-broncos-team-logo-2-300x300.png",
    "Denver Broncos"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-detroit-lions-team-logo-2-300x300.png",
    "Detroit Lions"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-green-bay-packers-team-logo-2-300x300.png",
    "Green Bay Packers"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-houston-texans-team-logo-2-300x300.png",
    "Houston Texans"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-indianapolis-colts-team-logo-2-300x300.png",
    "Indianapolis Colts"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-jacksonville-jaguars-team-logo-2-300x300.png",
    "Jacksonville Jaguars"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-kansas-city-chiefs-team-logo-2-300x300.png",
    "Kansas City Chiefs"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-los-angeles-chargers-team-logo-2-300x300.png",
    "Los Angeles Chargers"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-los-angeles-rams-team-logo-2-300x300.png",
    "Los Angeles Rams"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-miami-dolphins-logo-2018-300x300.png",
    "Miami Dolphins"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-minnesota-vikings-team-logo-2-300x300.png",
    "Minnesota Vikings"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-new-england-patriots-team-logo-2-300x300.png",
    "New England Patriots"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-new-orleans-saints-team-logo-2-300x300.png",
    "New Orleans Saints"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-new-york-giants-team-logo-2-300x300.png",
    "New York Giants"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-new-york-jets-team-logo-300x300.png",
    "New York Jets"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-oakland-raiders-team-logo-300x300.png",
    "Oakland Raiders"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-philadelphia-eagles-team-logo-2-300x300.png",
    "Philadelphia Eagles"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-pittsburgh-steelers-team-logo-2-300x300.png",
    "Pittsburgh Steelers"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-san-francisco-49ers-team-logo-2-300x300.png",
    "San Francisco 49ers"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-seattle-seahawks-team-logo-2-300x300.png",
    "Seattle Seahawks"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-tampa-bay-buccaneers-team-logo-2-300x300.png",
    "Tampa Bay Buccaneers"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-tennessee-titans-team-logo-2-300x300.png",
    "Tennessee Titans"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-washington-redskins-team-logo-2-300x300.png",
    "Washington Redskins"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-league-logo-300x300.png",
    "NFL League Shield"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-afc-American_Football_Conference_logo-300x300.png",
    "AFC (American Football Conference)"
  ],
  [
    "http://loodibee.com/wp-content/uploads/nfl-nfc-National_Football_Conference_logo-300x300.png",
    "NFC (National Football Conference)"
  ]
]


const fs = require('fs');
const http = require('http');


for(const [src, team_name] of images) {
	const clean_name = team_name.split(" ").join("_").toLowerCase().replace(/\W/g, '');
	const target_file = `images/nfl/${clean_name}.png`


	const file = fs.createWriteStream(target_file);
	const request = http.get(src, response => {
	  response.pipe(file);
	});

}

console.log(999)