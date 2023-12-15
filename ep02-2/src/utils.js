export function findElement(startingElement, selector) {
  let currentElement = startingElement;

  // while -> 조건문이 참일때 실행되는 반복문
  while (currentElement) {
    if (currentElement.matches(selector)) {
      return currentElement;
    }
    currentElement = currentElement.parentElement;
  }

  return null;
}
