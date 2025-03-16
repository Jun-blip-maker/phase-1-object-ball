function gameObject(home, away) {
  [
    {
      home: {
        teamname: "Brooklyn Nets",
        Colors: ["Black", "White"],

        Players: [
          {
            PlayerName: "Alan Anderson",
            stats: [
              {
                number: 10,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1,
              },
            ],

            PlayerName: "Reggie Evans",
            stats: [
              {
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7,
              },
            ],

            PlayerName: "Brook Lopez",
            stats: [
              {
                number: 11,
                shoe: 17,
                points: 19,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15,
              },
            ],

            PlayerName: "Mason Plumlee",
            stats: [
              {
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5,
              },
            ],

            PlayerName: "Jason Terry",
            stats: [
              {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1,
              },
            ],
          },
        ],
      },
    },
  ];
}
away:{
  teamName:"Charlotte Hornets",
  color:["Turquoise", "Purple"],
  players:[
      {playerName:"Jeff Adrien", stat:{
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
      }},
      {playerName:"Bismak Biyombo", stat:{
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
      }},
      {playerName:"DeSagna Diop", stat:{
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
      }},
      {playerName:"Ben Gordon", stat:{
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
      }},
      {playerName:"Brendan Haywood", stat:{
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
      }}
  ]
}
console.log(gameObject());

homeTeamName= ()=> {
  let object = gameObject();
  return object["home"]["teamName"];
}
console.log(homeTeamName());





