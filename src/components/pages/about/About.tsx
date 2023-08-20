import "./About.scss";
import { TextCreator } from "../../textCreator/TextCreator";
import Button from "../../button/Button";
import ImageFlipper from "../../imageflipper/ImageFlipper";
import { useRef, useState, useEffect } from "react";

//add random word cycler into span

function About(props:any) {
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
      name: "Hudl video",
      href: "https://www.hudl.com/video/3/107133/5721aabddfe23b2d68752a71",
    },
  ];

  const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const visiblePercentage = entry.intersectionRatio * 100;

        // Determine if the element should be visible based on your threshold
        const isVisibleThreshold = visiblePercentage >= 50; // Adjust threshold percentage

        setIsVisible(isVisibleThreshold);
      },
      { threshold: [0, 0.5, 1] } // Intersection ratios to observe (0%, 50%, 100%)
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <>
      <div id="about" className={`page ${isVisible ? 'visible-comp': 'invisible-comp'}`} ref={contentRef}>
        <h1 className="about-title">
          <TextCreator text="A Wild Dev Appeared!" speed={100} />
        </h1>
        <ImageFlipper />
        <p>
          <TextCreator
            text="I'm Karl, an aspiring web dev. Formerly a project coordinator. Graduate of University of Minnesota Duluth. Defensive End of the UMD Bulldogs Football Team. Current resident of Denver, CO. Dog Daddy. Reading enthusiast. Interested in longevity, education, learning processes, sports, cybersecurity, and game development."
            speed={10}
          />
        </p>
        <br />
        <h3> Learn more here</h3>
        <ul className="link-list">
          {links.map((link, index: any) => (
            <li key={index} className="add-link">
              <Button text={link.name} href={link.href} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default About;
