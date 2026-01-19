import { parseAppSegmentConfig } from "next/dist/build/segment-config/app/app-segment-config";
import { Noto_Sans_Telugu } from "next/font/google";

export default async function CommentPage({params}){
    const slug = await params;
    console.log(slug);
    
    return(
        <>
            <h1>Post page ID: {slug.id}, comment ID: {slug.commentID}</h1>
        </>
    )
}