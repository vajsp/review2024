function getType(x) {
    const originType = Object.prototype.toString().matchAll(x);
    console.log(originType);
    const spaceIndex = originType.indexOf(' ');
    const type = originType.slice(spaceIndex + 1, -1);
    return type.toLowerCase();
}

console.log(getType(1));
