import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import ChatGptIcon from "@/assets/icons/chatgpt.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import EclipseIcon from "@/assets/icons/eclipse.svg";
import GfgIcon from "@/assets/icons/geeksforgeeks.svg";
import GithubIcon from "@/assets/icons/github.svg";
import GithubIcon2 from "@/assets/icons/github2.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import JavaIcon from "@/assets/icons/java.svg";
import LeetcodeIcon from "@/assets/icons/leetcode.svg";
import MySqlIcon from "@/assets/icons/mysql.svg";
import PostgreSqlIcon from "@/assets/icons/postgresql.svg";
import PostManIcon from "@/assets/icons/postman.svg";
import ReactIcon from "@/assets/icons/react.svg";
import SpringBootIcon from "@/assets/icons/spring-boot.svg";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import VsCodeIcon from "@/assets/icons/vscode.svg";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { ToolboxItems } from "@/components/ToolboxItems";


const toolboxItems = [
    {
        title: 'Java',
        icon: JavaIcon,
    },
    {
        title: 'Spring Boot',
        icon: SpringBootIcon,
    },
    {
        title: 'Html5',
        icon: HtmlIcon,
    },
    {
        title: 'CSS3',
        icon: CSSIcon,
    },
    {
        title: 'Javascript',
        icon: JavascriptIcon,
    },
    {
        title: 'React',
        icon: ReactIcon,
    },
    {
        title: 'MySql',
        icon: MySqlIcon,
    },
    {
        title: 'PostgreSql',
        icon: PostgreSqlIcon,
    },
    {
        title: 'Eclipse',
        icon: EclipseIcon,
    },
    {
        title: 'VS Code',
        icon: VsCodeIcon,
    },
    {
        title: 'PostMan',
        icon: PostManIcon,
    },
    {
        title: 'ChatGPT',
        icon: ChatGptIcon,
    },
    {
        title: 'Chrome',
        icon: ChromeIcon,
    },
    {
        title: 'Github',
        icon: GithubIcon,
    },
];

const hobbies = [
    {
        title: 'Anime',
        emoji: '👒⚔🏴‍☠️🌊',
        left: "10%",
        top: "10%",
    },
    {
        title: 'Problem Solving',
        emoji: '💻',
        left: "50%",
        top: "0%",
    },
    {
        title: 'Volley Ball',
        emoji: '🏐',
        left: "10%",
        top: "50%",
    },
    {
        title: 'Mobile Gaming',
        emoji: '🎮',
        left: "50%",
        top: "30%",
    },
    {
        title: 'Just Exploring',
        emoji: '🌍',
        left: "50%",
        top: "70%",
    },
];

export const AboutSection = () => {
    return (
        <div id="about" className="py-20 px-4 md:px-6 lg:px-20">
            <SectionHeader description="Learn more about who I am, what I do and what inspires me." eyebrow="About Me" title="A Glimpse into My World" />
            <div className="mt-20 flex flex-col gap-6">
                <Card className="h-[320px] overflow-hidden">
                    <CardHeader className="px-6 pt-6" description="Explore the technologies and tools I use to craft exceptional web apps" title="My Tools" />
                    <ToolboxItems items={toolboxItems} className="mt-6" itemClassName="animate-move-left" />
                </Card>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    <Card className="h-[320px] overflow-y-hidden md:col-span-2">
                        <CardHeader description="Track my journey through logic, code, and consistency." title="Coding Profiles" />
                        <div className="relative flex-1">
                            <div className="animate-bounce-long absolute inline-flex gap-3 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5" style={{
                                left: "10%",
                                top: "10%",
                            }}>
                                <a href={"https://leetcode.com/u/Syed_Anwar_leetcode/"} target="_blank" rel="noopener noreferrer">
                                    <div className="flex flex-row gap-2 items-center justify-center">
                                        <LeetcodeIcon className="size-10" />
                                        <ArrowUpRightIcon className="size-8 text-gray-900" />
                                    </div>
                                </a>
                            </div>
                            <div className="animate-bounce-long absolute inline-flex gap-3 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5" style={{
                                left: "50%",
                                top: "30%",
                            }}>
                                <a href={"https://www.geeksforgeeks.org/user/001syed69hk/"} target="_blank" rel="noopener noreferrer">
                                    <div className="flex flex-row gap-2 items-center justify-center">
                                        <GfgIcon className="size-10" />
                                        <ArrowUpRightIcon className="size-8 text-gray-900" />
                                    </div>
                                </a>
                            </div>
                            <div className="animate-bounce-long absolute inline-flex gap-3 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5" style={{
                                left: "10%",
                                top: "60%",
                            }}>
                                <a href={"https://github.com/001-syed-anwar/"} target="_blank" rel="noopener noreferrer">
                                    <div className="flex flex-row gap-2 items-center justify-center">
                                        <GithubIcon2 className="size-10" />
                                        <ArrowUpRightIcon className="size-8 text-gray-900" />
                                    </div>
                                </a>
                            </div>                            
                        </div>
                    </Card>
                    <Card className="h-[320px] p-0 overflow-x-hidden md:col-span-3">
                        <CardHeader description="I enjoy a blend of logic, leisure, and adventure through coding, anime, volleyball, gaming, and exploring the world." title="Passions & Pastimes" className="px-6 py-6" />
                        <div className="relative flex-1">
                            {hobbies.map((item) => (
                                <div key={item.title} className="animate-bounce-long absolute inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5" style={{
                                    left: item.left,
                                    top: item.top,
                                }}>
                                    <span className="font-medium text-gray-950">{item.title}</span>
                                    <span>{item.emoji}</span>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div >
        </div >
    );
};