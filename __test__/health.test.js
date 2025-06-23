import healthIndicator from "../src/health";

test("health > 50 returns healthy", () => {
  expect(healthIndicator({ name: "Маг", health: 90 })).toBe("healthy");
});

test("health 50-15 returns wounded", () => {
  expect(healthIndicator({ name: "Лучник", health: 30 })).toBe("wounded");
  expect(healthIndicator({ name: "Воин", health: 15 })).toBe("wounded");
});

test("health < 15 returns critical", () => {
  expect(healthIndicator({ name: "Демон", health: 5 })).toBe("critical");
});
