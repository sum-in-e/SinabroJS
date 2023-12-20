import { describe, it, expect } from "vitest";
import { posts } from "./data";

describe("filter method - simple", () => {
  it("gets positive numbers", () => {
    const numbers = [1, -2, 3, -4, 5];

    const positiveNumbers = numbers.filter((num) => num > 0);
    expect(positiveNumbers).toEqual([1, 3, 5]);
  });

  it("gets employees in Sales department", () => {
    const employees = [
      { name: "John", age: 30, department: "Sales" },
      { name: "Jane", age: 35, department: "Development" },
      { name: "Jim", age: 40, department: "Sales" },
    ];

    const salesEmployees = employees.filter(
      (employee) => employee.department === "Sales"
    );
    expect(salesEmployees).toEqual([
      { name: "John", age: 30, department: "Sales" },
      { name: "Jim", age: 40, department: "Sales" },
    ]);
  });

  it("gets employees over 35 in Marketing department", () => {
    const employees = [
      { name: "John", age: 30, department: "Sales" },
      { name: "Jane", age: 35, department: "Development" },
      { name: "Jim", age: 40, department: "Marketing" },
    ];

    const salesEmployeesOver35 = employees.filter(
      (employee) => employee.age > 35 && employee.department === "Marketing"
    );
    expect(salesEmployeesOver35).toEqual([
      { name: "Jim", age: 40, department: "Marketing" },
    ]);
  });

  it("gets employees in Sales or Development department", () => {
    const employees = [
      { name: "John", age: 30, department: "Sales" },
      { name: "Jane", age: 35, department: "Development" },
      { name: "Jim", age: 40, department: "Marketing" },
    ];

    const targetDepartments = ["Sales", "Development"];

    const salesOrDevEmployees = employees.filter((employee) =>
      targetDepartments.includes(employee.department)
    );

    // * Set 자료구조 사용
    // const targetDepartmentsSet = new Set(targetDepartments);
    // const salesOrDevEmployees = employees.filter(
    //   targetDepartmentsSet.has(employee.department)
    // );
    expect(salesOrDevEmployees).toEqual([
      { name: "John", age: 30, department: "Sales" },
      { name: "Jane", age: 35, department: "Development" },
    ]);
  });
});

describe("filter method - real world", () => {
  it("gets posts from this year", () => {
    const postsThisYear = posts.filter(
      (post) =>
        new Date(post.meta.created_at).getFullYear() ===
        new Date().getFullYear()
    );
    expect(postsThisYear.length).toBe(10);
  });

  it('gets posts with "culture" tag', () => {
    const postsWithCultureTag = posts.filter((post) =>
      post.meta.tags.includes("culture")
    );
    expect(postsWithCultureTag.length).toBe(16);
  });

  it.only("gets tweets posted after 10pm", () => {
    // hint:
    // new Date('2023-02-03T21:10:00.000Z').toLocaleString('fr-FR')
    //
    // * new Date로 날짜 포멧을 변형하면 로컬의 타임존에 맞추져서 포멧이 바뀐다. toLocalString으로 국가를 설정해도 마찬가지. 그래서 Date를 다루는 게 까다롭기 때문에 moment.js 등을 사용한다.
    // const tweetsPostedAfter10pm = posts.filter((post) => {
    //   const koTimeStamp = new Date(post.meta.created_at).toLocaleString(
    //     "ko-KR"
    //   );
    //   return new Date(koTimeStamp).getHours() >= 22;
    // });
    expect(tweetsPostedAfter10pm.length).toBe(5);
  });
});
