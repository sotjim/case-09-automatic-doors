basic.forever(function () {
    if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P0) <= 8) {
        basic.showIcon(IconNames.Yes)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
        basic.pause(10000)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 276)
    } else if (sonarbit.sonarbit_distance(Distance_Unit.Distance_Unit_cm, DigitalPin.P0) > 8) {
        basic.showIcon(IconNames.No)
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 276)
        basic.pause(500)
    }
})
