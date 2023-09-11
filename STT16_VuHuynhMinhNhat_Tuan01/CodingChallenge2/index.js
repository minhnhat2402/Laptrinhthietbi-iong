function BMI(mass, height) {
    return mass / (height * height)
}
var mMass = 95
var mHeight = 1.88
var jMass = 85
var jHeight = 1.76
var m_BMI = BMI(mMass, mHeight)
var j_BMI = BMI(jMass, jHeight)
var markHigherBMI = m_BMI > j_BMI;
if (markHigherBMI)
    console.log(`Mark's BMI(${m_BMI.toFixed(2)}) higher than John's(${j_BMI.toFixed(2)})!`);
else
    console.log(`John's BMI(${j_BMI.toFixed(2)}) higher than Mark's(${m_BMI.toFixed(2)})!`);