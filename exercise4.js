const box = document.querySelector(".box");

box.addEventListener("click", (event) => {

  // Arrow functions do not have their own "this".
  // Therefore "this" does not refer to the clicked element.

  event.currentTarget.classList.add("active");

  // event.currentTarget returns the element the listener is attached to.
  // It replaces what "this" would normally be.
});

