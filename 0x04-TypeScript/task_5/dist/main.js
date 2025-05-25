function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        _majorBrand: 'major'
    };
}
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        _minorBrand: 'minor'
    };
}
var major1 = { credits: 3, _majorBrand: 'major' };
var major2 = { credits: 4, _majorBrand: 'major' };
var minor1 = { credits: 2, _minorBrand: 'minor' };
var minor2 = { credits: 1, _minorBrand: 'minor' };
console.log(sumMajorCredits(major1, major2)); // { credits: 7, _majorBrand: 'major' }
console.log(sumMinorCredits(minor1, minor2));
//# sourceMappingURL=main.js.map