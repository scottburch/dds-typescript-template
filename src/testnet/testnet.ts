import {dialPeer, floodRouter, newMemoryStore, startPistol} from "@scottburch/pistol";
import {merge, tap, bufferCount, switchMap} from 'rxjs'

merge(
    startPistol({extensions: [floodRouter()], port: 11110, store: newMemoryStore()}),
    startPistol({extensions: [floodRouter()], port: 11111, store: newMemoryStore()}),
).pipe(
    bufferCount(2),
    switchMap(pistols => dialPeer(pistols[0], 'ws://localhost:11111')),
    tap(() => console.log('testnet running'))
).subscribe()
