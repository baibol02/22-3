let tags = ['li', 'span', 'div', 'span', 'h3', 'a', 'div', 'span', 'a', 'li', 'div', 'div']
let tagCount = {}
for (let i = 0; i < tags.length; i++) {
    if (tagCount[tags[i]]) {
        tagCount[tags[i]]++;
    } else {
        tagCount[tags[i]] = 1;
    }
}
console.log(tagCount)
let sortedTags = Object.entries(tagCount).sort((a, b) => b[1] - a[1])
console.log(sortedTags)