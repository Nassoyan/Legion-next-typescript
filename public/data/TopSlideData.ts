import abstract from "../images/topsliderImages/abstract.png"
import videoImg from "../images/video/image 11.png"
import img1 from "../images/TradingCart/BitBasel_Logo.png"
import img2 from "../images/TradingCart/PARTNERS.png"
import img3 from "../images/TradingCart/SC-MC-logo 1.png"
import img4 from "../images/TradingCart/glg copy.png"
import img5 from "../images/TradingCart/image 29 (1).png"
import img6 from "../images/TradingCart/image 30.png"

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

export interface TradingBlog {
    id:number;
    url:any;
}

type TradingCartProps = TradingBlog[]
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

export const tradingCartData:TradingCartProps = [
    {
        id:0,
        url:img1,
    },
    {
        id:1,
        url:img2,
    },
    {
        id:2,
        url:img3,
    },
    {
        id:3,
        url:img4,
    },
    {
        id:4,
        url:img5,
    },
    {
        id:5,
        url:img6,
    }
]