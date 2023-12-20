import { describe, it, expect } from "vitest";
import { shows } from "./data";

describe("reduce method", () => {
  it("calculates the total of an array", () => {
    const numbers = [1, 2, 3, 4, 5];

    const sum = numbers.reduce((result, num) => result + num, 0);
    expect(sum).toBe(15);
  });

  it("groups by genre", () => {
    const groupedShows = shows.reduce((result, show) => {
      if (!result[show.genre]) result[show.genre] = [];
      result[show.genre].push(show.title);
      return result;
    }, {});
    expect(groupedShows).toEqual({
      Comedy: ["Don't Look Up"],
      Drama: ["Stranger Things", "Our Blues", "Inventing Anna"],
      Mistery: ["Dirk Gently's Holistic Detective Agency"],
      Mystery: ["Little Women"],
    });
  });

  it("groups by key (2)", () => {
    const groupedShows = shows.reduce((result, show) => {
      const existingindex = result.findIndex(
        (item) => item.genre === show.genre
      );

      if (existingindex !== -1) {
        result[existingindex].titles.push(show.title);
      } else {
        result.push({ genre: show.genre, titles: [show.title] });
      }

      return result;
    }, []);
    expect(groupedShows).toEqual([
      {
        genre: "Drama",
        titles: ["Stranger Things", "Our Blues", "Inventing Anna"],
      },
      {
        genre: "Mystery",
        titles: ["Little Women"],
      },
      {
        genre: "Comedy",
        titles: ["Don't Look Up"],
      },
      {
        genre: "Mistery",
        titles: ["Dirk Gently's Holistic Detective Agency"],
      },
    ]);
  });

  it("flattens array", () => {
    const nestedArray = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];

    const flatArray = nestedArray.reduce(
      (acc, arrayOfNumber) => [...acc, ...arrayOfNumber],
      []
    );
    expect(flatArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it("extracts writer names", () => {
    const writerNames = shows.reduce(
      (prev, curr) => [...prev, ...curr.writers],
      []
    );
    expect(writerNames).toEqual([
      "Matt Duffer",
      "Ross Duffer",
      "Jessie Nickson-Lopez",
      "Kate Trefry",
      "Justin Doble",
      "Alison Tatlock",
      "Paul Dichter",
      "Jessica Mecklenburg",
      "Seo-Gyeong Jeong",
      "Hee-kyung Noh",
      "Shonda Rhimes",
      "Carolyn Ingber",
      "Jessica Pressler",
      "Nicholas Nardini",
      "Adam McKay",
      "Max Landis",
      "Douglas Adams",
    ]);
  });
});
