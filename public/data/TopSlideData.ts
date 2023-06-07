import abstract from "../images/topsliderImages/abstract.png"
import videoImg from "../images/video/image 11.png"

export interface Product {
    id:number;
    url:any;
    title:"";
    text:"";
}

export interface VideoBlog {
    id:number;
    url:any;
    text:string;
}

type VideoContentProps  = VideoBlog[]
type TopSlideDataProps  = Product[]

export const topSLideData:TopSlideDataProps = [
    {
        id:0,
        url:abstract,
        title:"",
        text:""
    },
    {
        id:1,
        url:abstract,
        title:"",
        text:""
    },
    {
        id:2,
        url:abstract,
        title:"",
        text:""
    },
    {
        id:3,
        url:abstract,
        title:"",
        text:""
    },
    {
        id:4,
        url:abstract,
        title:"",
        text:""
    },
    {
        id:5,
        url:abstract,
        title:"",
        text:""
    },
]

export const videoContentData:VideoContentProps = [
    {
        id:0,
        url:videoImg,
        text:"Legion 5 Pack",
    },
    {
        id:1,
        url:videoImg,
        text:"Legion 25 Pack",
    },
    {
        id:2,
        url:videoImg,
        text:"Legion 50 Pack",
    },
    {
        id:3,
        url:videoImg,
        text:"Legion 100 Pack",
    },
]