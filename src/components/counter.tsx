import {putPistolValue, usePistolValue} from "@scottburch/pistol";

export const Counter: React.FC = () => {
    const count = usePistolValue<number>('demo-app.counter');

    const doCount = () => putPistolValue('demo-app.counter', (count || 0) + 1).subscribe();

    return (
        <>
            <div style={{marginBottom: 10}}>Count: <span id="count">{count || 0}</span></div>
            <div><button onClick={doCount}>Press me</button></div>
        </>
    )
}