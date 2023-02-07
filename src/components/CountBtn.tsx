import {putPistolValue, usePistolValue} from "@scottburch/pistol";

export const CountBtn: React.FC = () => {
    const count = usePistolValue<number>('demo-app.counter');

    const doCount = () => putPistolValue('demo-app.counter', (count || 0) + 1).subscribe();

    return (
        <button onClick={doCount}>Press me</button>
    )

}