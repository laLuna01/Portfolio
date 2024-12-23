"use client";

import { useEffect, useState  } from "react";
import CountUp from "react-countup";

const stats = [
    {
        num: 2,
        text: "Anos de experiência"
    },
    {
        num: 30,
        text: "Repositórios publicados"
    },
    {
        num: 6,
        text: "Linguagens de programação"
    },
    {
        num: 100,
        text: "Commits feitos"
    },
]

const Stats = () => {
    const [stats, setStats] = useState([
        {
            num: new Date().getFullYear() - 2022,
            text: "Anos de experiência"
        },
        {
            num: 30,
            text: "Repositórios publicados"
        },
        {
            num: 6,
            text: "Linguagens de programação"
        },
        {
            num: 100,
            text: "Commits feitos"
        },
    ]);

    useEffect(() => {
        fetch('https://api.github.com/users/laLuna01')
          .then(response => response.json())
          .then(data => {
            setStats(prevStats =>
              prevStats.map(stat =>
                stat.text === "Repositórios publicados"
                  ? { ...stat, num: data.public_repos }
                  : stat
              )
            );
          })
          .catch(error => console.error('Erro ao buscar os repositórios:', error));
    
        fetch('https://api.github.com/search/commits?q=author:laLuna01')
          .then(response => response.json())
          .then(data => {
            setStats(prevStats =>
              prevStats.map(stat =>
                stat.text === "Commits feitos"
                  ? { ...stat, num: data.total_count }
                  : stat
              )
            );
          })
          .catch(error => console.error('Erro ao buscar os commits:', error));
      }, []);

  return <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
    <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
            {stats.map((item, index) => {
                return <div key={index} className="flex-1 flex gap-4 items-center justify-center xl:justify-start">
                    <CountUp end={item.num} duration={5} delay={2} className="text-4xl xl:text-6xl font-extrabold" />
                    <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
                </div>
            })}
        </div>
    </div>
  </section>;
}

export default Stats;