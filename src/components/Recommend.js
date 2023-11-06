/* eslint-disable jsx-a11y/anchor-is-valid */
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/recommend.css";
import "../styles/common.css";
import { useEffect, useRef, useState } from "react";

function Recommend() {
  // js 코드 자리
  // JSX 의 요소를 React 에서 참조
  // 1. swiper 슬라이드 태그를 참조한다.
  const swiperRef = useRef();
  // JSON 데이터 저장해 두고, 자료가 바뀌면 화면을 변경할 리액트 변수를 생성
  const [htmlTag, setHtmlTag] = useState([]);

  // 외부 데이터 연동하기 (fetch 이용)
  const getJsonData = () => {
    // 외부 데이터 연동하기 (fetch)
    fetch("recommend.json")
      .then((response) => {
        console.log("response : ", response);
        // 데이터가 불러들여졌을 때
        return response.json();
      })
      .then((result) => {
        console.log("result : ", result);
        // 자료를 원하는 대로 처리하겠다.
        // result를 화면에 출력하겠다.
        // 자료가 바뀌면 화면을 변경하는 기능을 생성하겠다.

        let arr = [];
        for (let i = 0; i < result.total; i++) {
          const obj = result["good_" + (i + 1)];
          arr[i] = obj;
        }
        console.log(arr);
        setHtmlTag(arr);
      })
      .catch((error) => {
        console.log("error : ", error);
        // 에러가 발생했을 때.
      });
  };

  // html 이 준비가 되면, json을 불러들이겠다.
  // 1. 외부데이터 부르기 좋은 자리
  // 2. html 태그 참조(useRef 할 때)
  // 3. window 참조할 때
  // 4. window.addEventListner("scroll"...)
  // 5. cleanUp 할 때 : 컴포넌트 화면에서 사라질 때 실행할 함수
  // 6. 타이머 만들고, 제거할 때.
  // 컴포넌트가 화면에 보여질 때 실행할 내용 기재 장소
  // use 는 Hook 이라고 합니다.
  // 원하는 시점을 감시하고 실행할 함수
  useEffect(() => {
    // 렌더링 될 때
    // visual.json 데이터 불러들이기 기능실행
    getJsonData();
  }, []);

  return (
    <section className="recommend">
      <div className="recommend-inner">
        <div className="recommend-header">
          <h2 className="recommend-title">쇼핑추천</h2>
          <span className="recommend-txt">
            할인이 쎄다! 지금, 특가 상품을 확인하세요.
          </span>
        </div>
        <div className="recommend-main">
          <div className="recommend-main-category">
            <ul className="recommend-main-category-list">
              <li>
                <button className="recommend-main-category-list-button recommend-main-category-list-button-active">
                  쎈딜
                </button>
              </li>
              <li>
                <button className="recommend-main-category-list-button recommend-main-category-list-button-active">
                  베스트
                </button>
              </li>
              <li>
                <button className="recommend-main-category-list-button recommend-main-category-list-button-active">
                  블프데이
                </button>
              </li>
              <li>
                <button className="recommend-main-category-list-button recommend-main-category-list-button-active">
                  디지털프라자
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="recommend-main-category-list-button recommend-main-category-list-button-active"
                >
                  소담상회
                </a>
              </li>
            </ul>
          </div>
          <div className="recommend-main-slide-wrap">
            <Swiper
              slidesPerView={4}
              spaceBetween={27}
              slidesPerGroup={4}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation]}
              navigation={{
                prevEl: ".recommend-main-slide-wrap .slide-prev-button",
                nextEl: ".recommend-main-slide-wrap .slide-next-button",
              }}
              classNameName="recommend-main-slide"
            >
              {htmlTag.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    {index === htmlTag.length - 1 ? (
                      <a href={item.url}>바로가기</a>
                    ) : (
                      <div className="recommend-slide-item">
                        <a href={item.url} className="recommend-link">
                          <div className="recommend-img">
                            <img src={item.image} alt={item.desc} />
                          </div>
                          <div className="recommend-info">
                            <ul className="recommend-good-list">
                              <li>
                                <span className="recommend-good-info-price">
                                  <b>{item.discount}</b>
                                  <em>{item.price}</em>원
                                </span>
                              </li>
                              <li>
                                <p className="recommend-good-info-desc">
                                  {item.desc}
                                </p>
                              </li>
                            </ul>
                          </div>
                        </a>
                      </div>
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <button className="slide-prev-button">
              <img src="images/slider_arrow.svg" alt="" />
            </button>
            <button className="slide-next-button">
              <img src="images/slider_arrow.svg" alt="" />
            </button>
          </div>
        </div>

        <div className="recommend-footer">
          <a href="#">쇼핑 홈 바로가기</a>
        </div>
      </div>
    </section>
  );
}

export default Recommend;
