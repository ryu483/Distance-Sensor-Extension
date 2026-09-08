//% color="#2c3e50" icon="\uf06e" block="きょりセンサー"
namespace distanceSensor {

    //% block="まえに しょうがいぶつがある"
    export function isObstacle(): boolean {
        return pins.analogReadPin(AnalogReadWritePin.P2) >= 500;
    }

    //% block="しょうがいぶつとの距離"
    export function getDistance(): number {
        return pins.analogReadPin(AnalogReadWritePin.P2);
    }
}