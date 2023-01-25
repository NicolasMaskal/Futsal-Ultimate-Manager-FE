export interface TeamShortDetail{
  id: number;
  name: string;
  owner: number | null;
}


export interface Player {
  id: number;
  name: string;
  matches_played: number;
  goals_scored: number;
  assists_made: number;
  preferred_position: "attacker" | "defender" | "goalkeeper";
  skill: number;
  sell_price: number;
  team: TeamShortDetail;
}


export interface MatchResult {
  id: number,
  date: string,
  player_goals: number,
  cpu_goals: number,
  player_team: TeamShortDetail
  cpu_team: TeamShortDetail
}