let element = document.createElement("h1");
element.innerHTML = "";
document.body.append(element);

let callback = (i) => {
  element.innerHTML = i;
  setTimeout(() => {
    callback1(i - 1);
  }, 1000);
};
let callback1 = (i) => {
  if (i === 0) {
    element.innerHTML = "Happy Independence Day";
  } else {
    element.innerHTML = i;
    setTimeout(() => {
      callback2(i - 1);
    }, 1000);
  }
};
let callback2 = (i) => {
  element.innerHTML = i;
  setTimeout(() => {
    callback(i - 1);
  }, 1000);
};
callback(10);
