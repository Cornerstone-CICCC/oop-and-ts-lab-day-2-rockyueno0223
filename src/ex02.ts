// Create an interface `Team` that contains a readonly `name` and `members` array.
// - Use `Partial` to allow updates to the `members`.
// - Return type: `Team` after applying partial updates.

interface Team {
  readonly name: string;
  members: { name: string; role: string }[];
}

function updateTeam(team: Team, updates: Partial<Team>): Team {
  if (updates.members) {
    team.members = updates.members
  }
  return team
}

// Expected output:
const team = { name: "Dev Team", members: [{ name: "Alice", role: "Developer" }] };
console.log(updateTeam(team, { members: [{ name: "Bob", role: "Designer" }] }))
// { name: "Dev Team", members: [{ name: "Bob", role: "Designer" }] }
