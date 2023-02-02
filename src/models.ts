export interface TeamShortDetail {
  id: number;
  name: string;
  owner: number | null;
}

export interface Team {
  id: number;
  name: string;
  wins: number;
  draws: number;
  loses: number;
  coins: number;
  player_amount: number;
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

export class PlayerInLineup {
  id: number | string;
  player: Player | null;
  playingPosition: PlayingPosition;

  constructor(player: Player | null, playingPosition: PlayingPosition) {
    this.player = player;
    this.id = playingPosition + (player ? player.id : "Empty");
    this.playingPosition = playingPosition;
  }
}

export interface MatchResult {
  id: number;
  date: string;
  player_goals: number;
  cpu_goals: number;
  player_team: TeamShortDetail;
  cpu_team: TeamShortDetail;
}

export interface GoalMoment {
  minute: number;
  goal_scorer: Player;
  assister: Player | null;
}

export interface MatchData {
  id: number;
  date: string;
  player_goals: number;
  cpu_goals: number;
  player_team: TeamShortDetail;
  cpu_team: TeamShortDetail;
  coins_reward: number;
  goal_moments: GoalMoment[];
}

export type PackType = "Bronze" | "Silver" | "Gold";

export interface User {
  id: number;
  email: string;
  is_admin: boolean;
  active_team: Team;
  email_verified: boolean;
}

export type BeError = {message: string, extra: {fields: any[]}}