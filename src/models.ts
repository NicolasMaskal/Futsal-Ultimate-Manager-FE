export interface Player {
  id: number;
  name: string;
  matches_played: number;
  goals_scored: number;
  assists_made: number;
  preferred_position: "attacker" | "defender" | "goalkeeper";
  skill: number;
  sell_price: number;
  team: {
    id: number;
    name: string;
    owner: number;
  };
}