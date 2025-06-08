import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg"
import Image from "next/image";
import headFirst from '@/assets/images/headfirst.jpg';
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";


const toolboxItems = [
  {
    title: 'Javascript',
    icon: JavascriptIcon,
  },
  {
    title: 'Html5',
    icon: HtmlIcon,
  },
  {
    title: 'React',
    icon: ReactIcon,
  },
  {
    title: 'Chrome',
    icon: ChromeIcon,
  },
  {
    title: 'CSS3',
    icon: CSSIcon,
  },
  {
    title: 'Github',
    icon: GithubIcon,
  },
  {
    title: 'Java',
    icon: GithubIcon,
  },
];

const hobbies = [
  {
    title: 'Watch Anime',
    emoji: '👒⚔🏴‍☠️🌊',
    left: "10%",
    top: "10%",
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
          <CardHeader className="px-6 pt-6" description="Explore the technologies and tools used to craft exceptional web apps" title="My Tools" />
          <ToolboxItems items={toolboxItems} className="mt-6" itemClassName="animate-move-left" />
        </Card>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <Card className="h-[320px] overflow-y-hidden md:col-span-2 p-6">
            <CardHeader description="Explore the books shaping my perspectives" title="My Reads" />
            <div className="w-40 mx-auto mt-2 md:mt-0">
              <Image
                alt="Book"
                src={headFirst}
              />
            </div>
          </Card>
          <Card className="h-[320px] p-0 overflow-x-hidden md:col-span-3">
            <CardHeader description="Explore my interest" title="Beyond the code" className="px-6 py-6" />
            <div className="relative flex-1">
              {hobbies.map((item) => (
                <div key={item.title} className="animate-bounce [animation-duration:4s] absolute inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5" style={{
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
