import "./About.scss";
import { TextCreator } from "../../textCreator/TextCreator";
import Button from "../../button/Button";
import ImageFlipper from "../../imageflipper/ImageFlipper";
import { useRef, useState, useEffect } from "react";

//add random word cycler into span


function About(_props: any) {
const lolEmoji = String.fromCodePoint(0x1F923)

  const links = [
    {
      name: "UMD Roster",
      href: "https://umdbulldogs.com/sports/football/roster/karl-finkel/2601",
    },
    {
      name: "DNT Article",
      href: "https://www.duluthnewstribune.com/sports/college-football-bulldogs-finkel-doesnt-lack-bite",
    },
    {
      name: `HighSchool Video ${lolEmoji}`,
      href: "https://www.hudl.com/video/3/107133/5721aabddfe23b2d68752a71",
    },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;

      const element = elementRef.current;
      const rect = element.getBoundingClientRect();

      if (
        rect.bottom >= window.innerHeight / 2 &&
        rect.top <= window.innerHeight / 2
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        id="about"
        className={`page ${isVisible ? "visible-comp" : "invisible-comp"}`}
        ref={elementRef}
      >
        <h1 className="about-title">
          <TextCreator text="A  Wild Dev Appeared!" speed={100} />
        </h1>
        <ImageFlipper />
        <p>
          
            I'm Karl, an aspiring web developer. Formerly a project coordinator.Graduduate of the University of Texas Austin Full stack bootcamp and Graduate of the University of Minnesota Duluth. Defensive End for the UMD Bulldogs Football Team. Current resident of Denver, CO. Dog Daddy. Reading enthusiast. Interested in longevity, education, learning techniques, sports, cybersecurity, and game development.
        </p>
        <br />
        <h3> Learn more here</h3>
        <details>
          <summary>links</summary>
          <ul className="link-list">
          {links.map((link, index: any) => (
            <li key={index} className="add-link">
              <Button text={link.name} href={link.href} />
            </li>
          ))}
        </ul>
        </details>
        
        
      </div>
    </>
  );
}

export default About;
