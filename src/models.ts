export interface TeamShortDetail {
  id: number;
  name: string;
  owner: number | null;
}

export type Position = "attacker" | "defender" | "goalkeeper";

export type PlayingPosition =
  | "Not Playing"
  | "Goalkeeper"
  | "Defender Left"
  | "Defender Right"
  | "Attacker Left"
  | "Attacker Right";

export interface Player {
  id: number;
  name: string;
  matches_played: number;
  goals_scored: number;
  assists_made: number;
  preferred_position: Position;
  skill: number;
  sell_price: number;
  team: TeamShortDetail;
}

export interface PlayerInLineup extends Player {
  playingPos: PlayingPosition;
}

export interface MatchResult {
  id: number;
  date: string;
  player_goals: number;
  cpu_goals: number;
  player_team: TeamShortDetail;
  cpu_team: TeamShortDetail;
}
