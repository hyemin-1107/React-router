import { useEffect, useRef } from "react";


const Observation = (setActiveId) => {
    const contentRef = useRef({});

    useEffect(() => {
        const callback = (observedContent) => {
            observedContent.forEach((content) => {
                contentRef.current[content.target.id] = content;
            });

            const visibleContent = Object.values(contentRef.current).filter(
                (content) => content.isIntersecting
            );

            setActiveId(visibleContent[0]?.target.id);
        };

        const observer = new IntersectionObserver(callback, {
            rootMargin: `60px 0px 80% 0px`,
            threshold: [0, 0.5, 1]
        });

        const contents = [...document.querySelectorAll(".content")];

        contents.forEach((content) => observer.observe(content));

        return () => observer.disconnect();
    }, [setActiveId]);
};

export default Observation;
