import React, { useState, useMemo } from "react";
import { BsGithub } from "react-icons/bs";
import { HiOutlineExternalLink } from "react-icons/hi";

const PREVIEW_LEN = 140;

const ProjectCard = (props) => {
  const [expanded, setExpanded] = useState(false);

  const { needsToggle, previewText } = useMemo(() => {
    const desc = props?.desc || "";
    if (desc.length <= PREVIEW_LEN) {
      return { needsToggle: false, previewText: desc };
    }
    return {
      needsToggle: true,
      previewText: `${desc.slice(0, PREVIEW_LEN).trim()}…`,
    };
  }, [props?.desc]);

  return (
    <article className="project-card-view">
      <div className="project-media">
        <img
          src={props.imgPath}
          alt={`${props.title} project preview`}
          className="project-media-img"
          loading="lazy"
        />
      </div>

      <div className="project-card-body">
        <h2 className="project-card-title">{props.title}</h2>

        <ul className="project-tech" aria-label="Technologies">
          {props?.tech?.map((name, idx) => (
            <li key={`${props.title}-${name}-${idx}`} className="project-tech-item">
              {name}
            </li>
          ))}
        </ul>

        <div className="project-desc-wrap">
          {expanded || !needsToggle ? (
            <p className="project-desc">{props.desc}</p>
          ) : (
            <p className="project-desc">{previewText}</p>
          )}
          {needsToggle && (
            <button
              type="button"
              className="project-toggle"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}
        </div>

        <div className="project-actions">
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link project-link--ghost"
          >
            <BsGithub aria-hidden className="project-link-icon" />
            <span>Code</span>
          </a>
          <a
            href={props.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link project-link--primary"
          >
            <HiOutlineExternalLink aria-hidden className="project-link-icon" />
            <span>Live demo</span>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
