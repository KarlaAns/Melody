"use client";
import React from "react";
import "../styles/style.module.css";

interface NftListProps {
  buttonClassName?: string;
  buttonClassNameOverride?: string;
  className?: string;
  divClassName?: string;
  divClassName1?: string;
  divClassName2?: string;
  divClassNameOverride?: string;
  groupClassName?: string;
  groupClassNameOverride?: string;
  heartSolClassName?: string;
  img?: string;
  overlapClassName?: string;
  overlapGroupClassName?: string;
  play?: string;
  playClassName?: string;
  rectangle?: string;
  rectangleClassName?: string;
  rectangleClassNameOverride?: string;
  text?: string;
  vector?: string;
  vectorClassName?: string;
}

export const NftList = ({
  buttonClassName,
  buttonClassNameOverride,
  className,
  divClassName,
  divClassName1,
  divClassName2,
  divClassNameOverride,
  groupClassName,
  groupClassNameOverride,
  heartSolClassName,
  img,
  overlapClassName,
  overlapGroupClassName,
  play,
  playClassName,
  rectangle,
  rectangleClassName,
  rectangleClassNameOverride,
  text,
  vector,
  vectorClassName,
}: NftListProps): JSX.Element => {
  return (
    <div className={`NFT-list ${className}`}>
      <div className={overlapClassName}>
        <div className={`group ${groupClassName} ${groupClassNameOverride}`}>
          <div className={`overlap-group ${overlapGroupClassName}`}>
            <div className={heartSolClassName}>Heart &amp; Sol</div>
            <img className={rectangleClassName} alt="Rectangle" src={rectangle} />
            <div className={divClassName}>
              <div className={divClassName1}>0.3234</div>
              <div className={divClassName2}>16 tokens</div>
              <img className={vectorClassName} alt="Vector" src={vector} />
            </div>
            <img className={img} alt="Rectangle" src={img} />
          </div>
        </div>
        <button className={`button ${buttonClassName} ${buttonClassNameOverride}`}>
          <div className="text-wrapper-3">{text}</div>
          <img className={playClassName} alt="Play" src={play} />
        </button>
        <button className="div-wrapper">
          <div className="text-wrapper-4">BUY NFT</div>
        </button>
      </div>
    </div>
  );
};
