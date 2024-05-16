function toggle(...values) {
  let index = 0;

  return () => {
    const el = values[index];
    index = (index + 1) % values.length;
    return el;
  };
}

var hello = toggle("hello");
var onOff = toggle("on", "off");
var speed = toggle("slow", "medium", "fast");

console.log(onOff()); // "on"
console.log(onOff()); // "off"
console.log(onOff()); // "on"
