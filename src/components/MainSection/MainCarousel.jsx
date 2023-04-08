import { BearSlideItem, elClassName } from "bear-react-carousel";
import BearCarousel from "bear-react-carousel";
import React from "react";
import { styles } from "../../styles";
import styled from "styled-components";
import TopBar from "../TopBar";
styles;
const TextCard = ({
  imageUrl,
  hashTagText,
  discountText,
  subtext,
  position = "left",
}) => {
  return (
    <>
      <BearSlideItem as="image" imageUrl={imageUrl} className="bg-slate-500  top-0 right-0">
        <AnimationsBox>
  
          <section className=" bg-cover">
            <div className=" relative  z-[1000]">
              <h3 className={styles.hashTagText}>{hashTagText}</h3>
              <h1 className={styles.discountText}>{discountText}</h1>
              <div className="w-[65%]">
                <p className={styles.subtext}>{subtext}</p>
              </div>

              <div className="flex flex-col pt-[30px] xs:pt-2 gap-2 font-lato">
                <button
                  className="bg-[#2b2d41] w-[293px] h-[54px] rounded-[8px]
                    text-white font-medium text-[18px] z-[1001] leading-[21.6px]"
                >
                  Check this out
                </button>
              </div>
            </div>
            {/* <div className="absolute top-[0px] h-[110.5vh] w-full bg-gradient-to-b from-[transparent] to-[#0000009a] z-[50]"></div> */}
          </section>
        </AnimationsBox>
      </BearSlideItem>
    </>
  );
};

export const MainCarousel = ({ data = [] }) => {
  const slideItemData = data.map((row) => {
    return {
      key: row.id,
      children: <TextCard {...row} />,
    };
  });
  return (
    <MainSectionRoot >
      <BearCarousel
        data={slideItemData}
        slidesPerView={1}
        className="absolute top-0"
        staticHeight="50vh"
        renderNavButton={true}
        isEnablePagination
        isEnableAutoPlay
        isEnableLoop
        isEnableNavButton={false}
        autoPlayTime={5000}
        moveTime={900}
      />
    </MainSectionRoot>
  );
};

const AnimationsBox = styled.div`
  width: 100%;
  max-width: 100%;

  align-items: flex-start;
  justify-content: center;
  height: 100%;
  opacity: 0;
  transition: opacity 2s ease 0.7s, transform 2s ease 0.7s;
  ${(props) => css`
    ${media.md`
            ${
              props.position === "left" &&
              css`
                margin-left: 10%;
                margin-right: auto;
              `
            }
            ${
              props.position === "right" &&
              css`
                margin-left: auto;
                margin-right: 10%;
              `
            }
        `}
  `}
`;

const MainSectionRoot = styled.div`
  --primary-color: #c4a265;

  .${elClassName.slideItem} {
    ${AnimationsBox} {
      transform: translateY(80px);
    }
    &[data-active="true"] {
      ${AnimationsBox} {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
`;
