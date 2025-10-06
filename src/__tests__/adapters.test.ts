import { fetchAthletes, fetchWods } from "../data/supabaseAdapters";

jest.mock("../lib/supabaseClient", () => {
  const rows = {
    wods: [
      {
        id: "1",
        name: "W1",
        description: "d",
        scoring_type: "time",
        cap_seconds: 600,
      },
    ],
    athletes: [{ id: "a1", name: "Ana", category: "RX", team_id: null }],
  } as any;
  return {
    supabase: {
      from: (table: string) => ({
        select: () => ({ data: rows[table], error: null }),
      }),
    },
  };
});

test("adapters: fetchWods maps fields", async () => {
  const w = await fetchWods();
  expect(w[0].id).toBe("1");
  expect(w[0].name).toBe("W1");
});

test("adapters: fetchAthletes maps fields", async () => {
  const a = await fetchAthletes();
  expect(a[0].name).toBe("Ana");
  expect(a[0].category).toBe("RX");
});
