"use client";
import Link from 'next/link';

export default function ErrorPage({error}){
    return(
        <>
            <h1>OOOps, rolloercoaster off the rails. You will get a refund. Don&apos;t worry.</h1>

            <p>{error.message}</p>
            <Link href={'/'}>Go Home</Link>
        </>
    );
}