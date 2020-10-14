radio.onReceivedNumberDeprecated(function (receivedNumber) {
    item = receivedNumber
    if (item == 0) {
        maqueen.motorStop(maqueen.aMotors.M1)
        maqueen.motorStop(maqueen.aMotors.M2)
    }
    if (item == 1) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 200)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 200)
    }
    if (item == 2) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 200)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 200)
    }
    if (item == 3) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 200)
    }
    if (item == 4) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 200)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
    }
    if (item == 5) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 32)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 32)
    }
    if (item == 6) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CCW, 32)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CCW, 32)
    }
    if (item == 7) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 32)
    }
    if (item == 8) {
        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 32)
        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
    }
})
let item = 0
radio.setGroup(1)
