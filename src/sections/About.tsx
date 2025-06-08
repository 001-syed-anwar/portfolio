import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg"
import Image from "next/image";
import grainImage from '@/assets/images/grain.jpg';
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HtmlIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import { TechIcon } from "@/components/TechIcon";
import slackClone2 from "@/assets/images/slack-clone-2.png";
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
  },
  {
    title: 'Mobile Gaming',
    emoji: '🎮',
  },
  {
    title: 'Volley Ball',
    emoji: '🏐',
  },
  {
    title: 'Just Exploring',
    emoji: '🌍',
  },
];

export const AboutSection = () => {
  return (
    <div id="about" className="py-20 px-4 md:px-6 lg:px-20">
      <SectionHeader description="Learn more about who I am, what I do and what inspires me." eyebrow="About Me" title="A Glimpse into My World" />
      <div className="mt-20 flex flex-col gap-6">
        <Card className="h-[320px]">
          <CardHeader description="Explore the books shaping my perspectives" title="My Reads" />
          <Image
            alt="Book"
            src={grainImage}
            style={{ width: "100%", height: "auto" }}
            className="rounded-2xl object-contain"
          />
        </Card>
        <Card className="h-[320px] p-0 overflow-x-hidden">
          <CardHeader className="px-6 pt-6" description="Explore the technologies and tools used to craft exceptional web apps" title="My Tools" />
          <ToolboxItems items={toolboxItems} className="mt-6"/>
          <ToolboxItems items={toolboxItems} className="mt-6" itemClassName="-translate-x-1/2"/>
        </Card>
        <Card className="">
          <CardHeader description="Explore my interest" title="Beyond the code" />
          <div className="">
            {hobbies.map((item) => (
              <div key={item.title} className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5">
                <span className="font-medium text-gray-950">{item.title}</span>
                <span>{item.emoji}</span>
              </div>
            ))}
          </div>
        </Card>
      </div >
    </div >
  );
};
