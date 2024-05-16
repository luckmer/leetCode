function toggle(...values) {
  let index = -1;

  return () => {
    index = (index + 1) % values.length;
    return values[index];
  };
}

var hello = toggle("hello");
var onOff = toggle("on", "off");
var speed = toggle("slow", "medium", "fast");

console.log(onOff()); // "on"
console.log(onOff()); // "off"
console.log(onOff()); // "on"
