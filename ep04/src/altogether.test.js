import { describe, it, expect } from "vitest";

describe("altogether", () => {
  it("extracts items", () => {
    const users = [
      {
        id: 1,
        username: "a",
      },
      {
        id: 2,
        username: "b",
      },
      {
        id: 3,
        username: "c",
      },
      {
        id: 4,
        username: "d",
      },
    ];
    // const idsToExtract = [1, 2, 5];
    const idsToExtractSet = new Set([1, 2, 5]);

    const extractedUsers = users.filter(({ id }) =>
      // idsToExtract.includes(id)
      idsToExtractSet.has(id)
    );
    expect(extractedUsers).toEqual([
      {
        id: 1,
        username: "a",
      },
      {
        id: 2,
        username: "b",
      },
    ]);
  });

  it("filters out duplicates", () => {
    const users = [
      {
        id: 1,
        username: "a",
      },
      {
        id: 2,
        username: "b",
      },
      {
        id: 3,
        username: "c",
      },
      {
        id: 1,
        username: "a",
      },
      {
        id: 3,
        username: "c",
      },
    ];

    const uniqueUsers = users.reduce((result, user) => {
      const find = result.find((item) => item.id === user.id);
      if (!find) result.push(user);
      return result;
    }, []);

    expect(uniqueUsers).toEqual([
      {
        id: 1,
        username: "a",
      },
      {
        id: 2,
        username: "b",
      },
      {
        id: 3,
        username: "c",
      },
    ]);
  });

  it.only('gets movie titles before 2020 that starts with "A"', () => {
    const movies = [
      {
        title: "Frozen",
        actors: ["Kristen Bell", "Idina Menzel", "Josh Gad"],
        year: 2013,
      },
      {
        title: "A Quiet Place",
        actors: [
          "Emily Blunt",
          "John Krasinski",
          "Millicent Simmonds",
          "Noah Jupe",
        ],
        year: 2018,
      },
      {
        title: "Enola Holmes",
        actors: ["Millie Bobby Brown", "Henry Cavill"],
        year: 2020,
      },
    ];

    const movieTitles = movies
      .filter((movie) => movie.title.startsWith("A") && movie.year < 2020)
      .map((movie) => movie.title);
    expect(movieTitles).toEqual(["A Quiet Place"]);
  });
});
