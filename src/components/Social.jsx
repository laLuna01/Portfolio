import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/laLuna01"
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/luana-sousa-matos-a00462232/"
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/lua.matos01/"
  },
  {
    icon: <FaTiktok />,
    path: "/"
  },
]

const Social = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map((item, index) => {
      return <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
    })}
  </div>;
}

export default Social;