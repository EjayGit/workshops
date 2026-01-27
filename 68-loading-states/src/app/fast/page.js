import { SlowComponent } from "@/component/SlowComponent";
import {Suspense} from 'react';
import Spinner from '@/component/Spinner'

export default function FastPage(){
    return(
        <>
            <h2>FastPage</h2>
            <Suspense fallback={<Spinner/>}>
                <SlowComponent/>
            </Suspense>
        </>
    )
}