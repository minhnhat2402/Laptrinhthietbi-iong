function BMI(mass, height) {
    return mass / (height * height)
}
var mMass = 95
var mHeight = 1.88
var jMass = 85
var jHeight = 1.76
var m_BMI = BMI(mMass, mHeight)
var j_BMI = BMI(jMass, jHeight)
var markHigherBMI = false;
if (m_BMI > j_BMI)
    markHigherBMI = true
console.log('Mark higher BMI: ' + markHigherBMI);