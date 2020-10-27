import React from "react";
import { Link } from "react-router-dom";

const CharacterSingle = ({
    id,
    name,
    description,
    thumbnail,
    comics,
    events,
    urls,
}) => (
    <div className="charcter-single grid-figure">
        <Link to="/characters">
            <img
                src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`}
                alt={name}
                className="single-photo"
            />
        </Link>
        <h2 className="character-name">{name}</h2>
        <p className="description">
            {description === ""
                ? "No description listed for this character. To find more information please go to the official Marvel Wiki Using the Detail link below"
                : description}
        </p>
        <h2>Comics</h2>
        {comics.items.map((comic, key) => (
            <div key={key}>
                <h3>
                    {comic.name === ""
                        ? "No comics listed for this character"
                        : comic.name}
                </h3>
            </div>
        ))}
        <br />
        <h2>Events</h2>
        {events.items.map((characterEvent, key) => (
            <div key={key}>
                <h3>
                    {characterEvent.name === ""
                        ? `${name} events have not been listed`
                        : characterEvent.name}
                </h3>
            </div>
        ))}
        <div>
            <br />
            {urls.map((link, key) => (
                <div>
                    <h3 style={{ marginTop: "5px" }}>{link.type}</h3>
                    <a
                        key={key}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={link.url}
                    >
                        Read More
                    </a>
                </div>
            ))}
        </div>
    </div>
);

export default CharacterSingle;
