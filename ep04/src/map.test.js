import { describe, it, expect } from "vitest";

describe("map method", () => {
  it("squares the elements", () => {
    const numbers = [1, 2, 3, 4, 5];
    const squares = numbers.map((num) => num * num);
    expect(squares).toEqual([1, 4, 9, 16, 25]);
  });

  it("makes strings uppercase", () => {
    const words = ["hello", "world"];
    const uppercasedWords = words.map((word) => word.toUpperCase());
    expect(uppercasedWords).toEqual(["HELLO", "WORLD"]);
  });

  it("extracts user id", () => {
    const users = [
      {
        id: 1,
        name: "a",
      },
      {
        id: 2,
        name: "b",
      },
      {
        id: 3,
        name: "c",
      },
    ];
    const userIds = users.map((user) => user.id);
    expect(userIds).toEqual([1, 2, 3]);
  });

  it("extracts title and year", () => {
    const movies = [
      {
        title: "Rent",
        year: 2005,
        genres: ["Musical", "Drama"],
      },
      {
        title: "Tick, Tick... Boom!",
        year: 2021,
        genres: ["Drama", "Biography"],
      },
    ];
    const titlesAndYears = movies.map(({ title, year }) => {
      return { title, year };
    });
    expect(titlesAndYears).toEqual([
      {
        title: "Rent",
        year: 2005,
      },
      {
        title: "Tick, Tick... Boom!",
        year: 2021,
      },
    ]);
  });

  it("adds genre property without mutating the source data", () => {
    const movies = [
      {
        title: "Rent",
        year: 2005,
        genres: ["Musical", "Drama"],
      },
      {
        title: "Tick, Tick... Boom!",
        year: 2021,
        genres: ["Drama", "Biography"],
      },
    ];

    const movies2 = movies.map((movie) => {
      return { ...movie, genre: movie.genres.join(" / ") };
    });
    expect(movies2).toEqual([
      {
        title: "Rent",
        year: 2005,
        genres: ["Musical", "Drama"],
        genre: "Musical / Drama",
      },
      {
        title: "Tick, Tick... Boom!",
        year: 2021,
        genres: ["Drama", "Biography"],
        genre: "Drama / Biography",
      },
    ]);

    expect(movies[0]).not.toHaveProperty("genre");
  });
});
