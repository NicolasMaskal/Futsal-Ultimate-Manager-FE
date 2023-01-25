import {MatchResult, Player} from "../models";

export const dummyPlayers: Player[] = [
  {
    id: 26,
    name: "John Micks",
    preferred_position: "goalkeeper",
    skill: 13,
    matches_played: 0,
    goals_scored: 0,
    assists_made: 0,
    sell_price: 15,
    team: {
      id: 10,
      name: "new team",
      owner: 4,
    },
  },
  {
    id: 30,
    name: "Herman Stahl",
    preferred_position: "defender",
    skill: 15,
    matches_played: 0,
    goals_scored: 0,
    assists_made: 0,
    sell_price: 17,
    team: {
      id: 10,
      name: "new team",
      owner: 4,
    },
  },
  {
    id: 31,
    name: "Jon Reardon",
    preferred_position: "attacker",
    skill: 9,
    matches_played: 0,
    goals_scored: 0,
    assists_made: 0,
    sell_price: 11,
    team: {
      id: 10,
      name: "new team",
      owner: 4,
    },
  },
  {
    id: 32,
    name: "Michael Hunt",
    preferred_position: "defender",
    skill: 17,
    matches_played: 0,
    goals_scored: 0,
    assists_made: 0,
    sell_price: 19,
    team: {
      id: 10,
      name: "new team",
      owner: 4,
    },
  },
  {
    id: 33,
    name: "Gerardo Scott",
    preferred_position: "defender",
    skill: 12,
    matches_played: 0,
    goals_scored: 0,
    assists_made: 0,
    sell_price: 14,
    team: {
      id: 10,
      name: "new team",
      owner: 4,
    },
  },
  {
    id: 34,
    name: "Jorge Jerome",
    preferred_position: "attacker",
    skill: 15,
    matches_played: 0,
    goals_scored: 0,
    assists_made: 0,
    sell_price: 17,
    team: {
      id: 10,
      name: "new team",
      owner: 4,
    },
  },
  {
    id: 35,
    name: "Jack Hill",
    preferred_position: "defender",
    skill: 16,
    matches_played: 0,
    goals_scored: 0,
    assists_made: 0,
    sell_price: 18,
    team: {
      id: 10,
      name: "new team",
      owner: 4,
    },
  },
  {
    id: 15,
    name: "Joan Lewis",
    preferred_position: "defender",
    skill: 15,
    matches_played: 102,
    goals_scored: 17,
    assists_made: 2,
    sell_price: 17,
    team: {
      id: 10,
      name: "new team",
      owner: 4,
    },
  },
  {
    id: 14,
    name: "Billy Figueroa",
    preferred_position: "defender",
    skill: 25,
    matches_played: 102,
    goals_scored: 1,
    assists_made: 2,
    sell_price: 27,
    team: {
      id: 10,
      name: "new team",
      owner: 4,
    },
  },
  {
    id: 16,
    name: "William Lattimer",
    preferred_position: "attacker",
    skill: 23,
    matches_played: 102,
    goals_scored: 8,
    assists_made: 10,
    sell_price: 25,
    team: {
      id: 10,
      name: "new team",
      owner: 4,
    },
  },
  {
    id: 24,
    name: "Patrick Clark",
    preferred_position: "defender",
    skill: 14,
    matches_played: 102,
    goals_scored: 14,
    assists_made: 4,
    sell_price: 16,
    team: {
      id: 10,
      name: "new team",
      owner: 4,
    },
  },
  {
    id: 25,
    name: "Steven Zafar",
    preferred_position: "attacker",
    skill: 16,
    matches_played: 102,
    goals_scored: 7,
    assists_made: 12,
    sell_price: 18,
    team: {
      id: 10,
      name: "new team",
      owner: 4,
    },
  },
];

export const dummyMatchResults: MatchResult[] = [{
  "id": 94,
  "date": "2023-01-19 23:49:08",
  "player_goals": 4,
  "cpu_goals": 4,
  "player_team": {
    "id": 10,
    "name": "new team",
    "owner": 4
  },
  "cpu_team": {
    "id": 67,
    "name": "FC Rosschester",
    "owner": null
  }
},
  {
    "id": 95,
    "date": "2023-01-19 23:49:13",
    "player_goals": 3,
    "cpu_goals": 4,
    "player_team": {
      "id": 10,
      "name": "new team",
      "owner": 4
    },
    "cpu_team": {
      "id": 68,
      "name": "FC West Angiemouth",
      "owner": null
    }
  },
  {
    "id": 96,
    "date": "2023-01-19 23:49:19",
    "player_goals": 1,
    "cpu_goals": 0,
    "player_team": {
      "id": 10,
      "name": "new team",
      "owner": 4
    },
    "cpu_team": {
      "id": 69,
      "name": "FC Elliottland",
      "owner": null
    }
  },
  {
    "id": 97,
    "date": "2023-01-19 23:49:28",
    "player_goals": 2,
    "cpu_goals": 4,
    "player_team": {
      "id": 10,
      "name": "new team",
      "owner": 4
    },
    "cpu_team": {
      "id": 70,
      "name": "FC Juliefort",
      "owner": null
    }
  },
  {
    "id": 98,
    "date": "2023-01-19 23:49:30",
    "player_goals": 0,
    "cpu_goals": 0,
    "player_team": {
      "id": 10,
      "name": "new team",
      "owner": 4
    },
    "cpu_team": {
      "id": 71,
      "name": "FC South Taylor",
      "owner": null
    }
  },
  {
    "id": 99,
    "date": "2023-01-19 23:49:32",
    "player_goals": 5,
    "cpu_goals": 3,
    "player_team": {
      "id": 10,
      "name": "new team",
      "owner": 4
    },
    "cpu_team": {
      "id": 72,
      "name": "FC New Vicki",
      "owner": null
    }
  },
  {
    "id": 100,
    "date": "2023-01-19 23:51:17",
    "player_goals": 0,
    "cpu_goals": 1,
    "player_team": {
      "id": 10,
      "name": "new team",
      "owner": 4
    },
    "cpu_team": {
      "id": 73,
      "name": "FC South Josephbury",
      "owner": null
    }
  },
  {
    "id": 101,
    "date": "2023-01-19 23:51:18",
    "player_goals": 1,
    "cpu_goals": 0,
    "player_team": {
      "id": 10,
      "name": "new team",
      "owner": 4
    },
    "cpu_team": {
      "id": 74,
      "name": "FC Amandaburgh",
      "owner": null
    }
  },
  {
    "id": 102,
    "date": "2023-01-19 23:51:20",
    "player_goals": 3,
    "cpu_goals": 2,
    "player_team": {
      "id": 10,
      "name": "new team",
      "owner": 4
    },
    "cpu_team": {
      "id": 75,
      "name": "FC Lake Sherry",
      "owner": null
    }
  },
  {
    "id": 103,
    "date": "2023-01-19 23:51:21",
    "player_goals": 1,
    "cpu_goals": 0,
    "player_team": {
      "id": 10,
      "name": "new team",
      "owner": 4
    },
    "cpu_team": {
      "id": 76,
      "name": "FC North Carlos",
      "owner": null
    }
  },
  {
    "id": 104,
    "date": "2023-01-19 23:51:29",
    "player_goals": 2,
    "cpu_goals": 6,
    "player_team": {
      "id": 10,
      "name": "new team",
      "owner": 4
    },
    "cpu_team": {
      "id": 77,
      "name": "FC New Elizabethtown",
      "owner": null
    }
  },
  {
    "id": 105,
    "date": "2023-01-19 23:51:31",
    "player_goals": 6,
    "cpu_goals": 2,
    "player_team": {
      "id": 10,
      "name": "new team",
      "owner": 4
    },
    "cpu_team": {
      "id": 78,
      "name": "FC South Johnfort",
      "owner": null
    }
  },
  {
    "id": 106,
    "date": "2023-01-19 23:51:48",
    "player_goals": 1,
    "cpu_goals": 5,
    "player_team": {
      "id": 10,
      "name": "new team",
      "owner": 4
    },
    "cpu_team": {
      "id": 79,
      "name": "FC Tonyville",
      "owner": null
    }
  },
  {
    "id": 107,
    "date": "2023-01-19 23:52:12",
    "player_goals": 0,
    "cpu_goals": 0,
    "player_team": {
      "id": 10,
      "name": "new team",
      "owner": 4
    },
    "cpu_team": {
      "id": 80,
      "name": "FC Kennethland",
      "owner": null
    }
  },
  {
    "id": 108,
    "date": "2023-01-19 23:52:14",
    "player_goals": 4,
    "cpu_goals": 3,
    "player_team": {
      "id": 10,
      "name": "new team",
      "owner": 4
    },
    "cpu_team": {
      "id": 81,
      "name": "FC Daltonshire",
      "owner": null
    }
  },
  {
    "id": 110,
    "date": "2023-01-20 00:02:18",
    "player_goals": 1,
    "cpu_goals": 4,
    "player_team": {
      "id": 10,
      "name": "new team",
      "owner": 4
    },
    "cpu_team": {
      "id": 84,
      "name": "FC Woodsshire",
      "owner": null
    }
  },
  {
    "id": 112,
    "date": "2023-01-20 00:12:27",
    "player_goals": 2,
    "cpu_goals": 5,
    "player_team": {
      "id": 10,
      "name": "new team",
      "owner": 4
    },
    "cpu_team": {
      "id": 86,
      "name": "FC Port Karen",
      "owner": null
    }
  },
  {
    "id": 113,
    "date": "2023-01-20 00:19:35",
    "player_goals": 1,
    "cpu_goals": 1,
    "player_team": {
      "id": 10,
      "name": "new team",
      "owner": 4
    },
    "cpu_team": {
      "id": 87,
      "name": "FC New Donna",
      "owner": null
    }
  },
  {
    "id": 114,
    "date": "2023-01-20 00:19:49",
    "player_goals": 7,
    "cpu_goals": 4,
    "player_team": {
      "id": 10,
      "name": "new team",
      "owner": 4
    },
    "cpu_team": {
      "id": 88,
      "name": "FC West Stephanie",
      "owner": null
    }
  },
  {
    "id": 116,
    "date": "2023-01-20 00:37:07",
    "player_goals": 0,
    "cpu_goals": 0,
    "player_team": {
      "id": 10,
      "name": "new team",
      "owner": 4
    },
    "cpu_team": {
      "id": 90,
      "name": "FC Port Peterborough",
      "owner": null
    }
  },
  {
    "id": 117,
    "date": "2023-01-20 00:37:22",
    "player_goals": 0,
    "cpu_goals": 9,
    "player_team": {
      "id": 10,
      "name": "new team",
      "owner": 4
    },
    "cpu_team": {
      "id": 91,
      "name": "FC Monicaville",
      "owner": null
    }
  },
  {
    "id": 118,
    "date": "2023-01-20 11:38:01",
    "player_goals": 1,
    "cpu_goals": 6,
    "player_team": {
      "id": 10,
      "name": "new team",
      "owner": 4
    },
    "cpu_team": {
      "id": 92,
      "name": "FC East Stephenview",
      "owner": null
    }
  },
  {
    "id": 119,
    "date": "2023-01-20 11:47:56",
    "player_goals": 0,
    "cpu_goals": 0,
    "player_team": {
      "id": 10,
      "name": "new team",
      "owner": 4
    },
    "cpu_team": {
      "id": 93,
      "name": "FC Bartlettberg",
      "owner": null
    }
  },
  {
    "id": 120,
    "date": "2023-01-20 11:48:09",
    "player_goals": 4,
    "cpu_goals": 6,
    "player_team": {
      "id": 10,
      "name": "new team",
      "owner": 4
    },
    "cpu_team": {
      "id": 94,
      "name": "FC North Erin",
      "owner": null
    }
  },
  {
    "id": 121,
    "date": "2023-01-20 21:41:09",
    "player_goals": 2,
    "cpu_goals": 6,
    "player_team": {
      "id": 10,
      "name": "new team",
      "owner": 4
    },
    "cpu_team": {
      "id": 95,
      "name": "FC Harmonfort",
      "owner": null
    }
  },
  {
    "id": 122,
    "date": "2023-01-20 21:42:44",
    "player_goals": 2,
    "cpu_goals": 3,
    "player_team": {
      "id": 10,
      "name": "new team",
      "owner": 4
    },
    "cpu_team": {
      "id": 95,
      "name": "FC Harmonfort",
      "owner": null
    }
  },
  {
    "id": 123,
    "date": "2023-01-20 21:42:47",
    "player_goals": 0,
    "cpu_goals": 0,
    "player_team": {
      "id": 10,
      "name": "new team",
      "owner": 4
    },
    "cpu_team": {
      "id": 95,
      "name": "FC Harmonfort",
      "owner": null
    }
  },
  {
    "id": 124,
    "date": "2023-01-20 21:42:55",
    "player_goals": 3,
    "cpu_goals": 6,
    "player_team": {
      "id": 10,
      "name": "new team",
      "owner": 4
    },
    "cpu_team": {
      "id": 95,
      "name": "FC Harmonfort",
      "owner": null
    }
  },
  {
    "id": 125,
    "date": "2023-01-20 21:49:26",
    "player_goals": 1,
    "cpu_goals": 8,
    "player_team": {
      "id": 10,
      "name": "new team",
      "owner": 4
    },
    "cpu_team": {
      "id": 95,
      "name": "FC Harmonfort",
      "owner": null
    }
  },
  {
    "id": 126,
    "date": "2023-01-20 21:54:16",
    "player_goals": 0,
    "cpu_goals": 0,
    "player_team": {
      "id": 10,
      "name": "new team",
      "owner": 4
    },
    "cpu_team": {
      "id": 95,
      "name": "FC Harmonfort",
      "owner": null
    }
  }
]