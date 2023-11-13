/* eslint-disable jsx-a11y/anchor-is-valid */
import { BtCate } from "../components/ui/buttons";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/recommend.css";
import "../styles/common.css";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { InnerArea, SectionTag } from "./layout/layout";

function Recommend() {
  // js 코드 자리
  // JSX 의 요소를 React 에서 참조
  // 1. swiper 슬라이드 태그를 참조한다.
  const swiperRef = useRef();
  // JSON 데이터 저장해 두고, 자료가 바뀌면 화면을 변경할 리액트 변수를 생성
  const [htmlTag, setHtmlTag] = useState([]);

  // 외부 데이터 연동하기 ( axios 이용 )
  const axiosJsonData = function () {
    axios
      .get(
        "https://port-0-interpark-server-3yl7k2blopix4pf.sel5.cloudtype.app/recommend"
      )
      .then(function (res) {
        console.log(res.data);

        const result = res.data;
        let arr = [];
        for (let i = 0; i < result.total; i++) {
          const obj = result["good_" + (i + 1)];
          arr[i] = obj;
        }
        console.log(arr);
        setHtmlTag(arr);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

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
        const dmObj = {
          total: 12,
          good_1: {
            image: "images/r1.jpg",
            discount: 47,
            price: 6090,
            desc: "[오쎈특가 쿠폰최종가 소형 5,070원]  [2024년 달력 얼리버드] 어린왕자, 앤, 곰돌이푸, 애드워드호퍼, 모네, 고흐, 윤동주 등",
            url: "a.html",
          },
          good_2: {
            image: "images/r2.jpg",
            discount: 0,
            price: 12900,
            desc: "유혜광 통등심돈까스 10장 (총 5팩)",
            url: "a.html",
          },
          good_3: {
            image: "images/r3.jpg",
            discount: 42,
            price: 12900,
            desc: "[10/31 단하루/한정수량] 매일 어메이징 오트 언스위트 190ml 24팩 + 오리지널 6팩 증정",
            url: "a.html",
          },
          good_4: {
            image: "images/r4.png",
            discount: 2,
            price: 8240,
            desc: "단하루! 베베숲 센시티브 20매 휴대 캡 12팩 외 휴대용 아기 물티슈 모음 / 외출 필수품",
            url: "a.html",
          },
          good_5: {
            image: "images/r5.jpg",
            discount: 22,
            price: 3900,
            desc: "★10월 마지막!★ 베어파우 키즈 방한 패딩 양털 부츠 베이비 남아 여아 아기 어린이 유아",
            url: "a.html",
          },
          good_6: {
            image: "images/r6.jpg",
            discount: 29,
            price: 34900,
            desc: "[스포츠파크]  뉴발란스 남성 UNI 에센셜 스몰로고 맨투맨 4종택1",
            url: "a.html",
          },
          good_7: {
            image: "images/r7.jpg",
            discount: 2,
            price: 22220,
            desc: "[더쎈위크]  롯데빼빼로 3종 x 20갑 (오리지널/아몬드/초코필드) 골라담기",
            url: "a.html",
          },
          good_8: {
            image: "images/r8.jpg",
            discount: 35,
            price: 26900,
            desc: "[한정수량특가]  한양식품 국내산 꽃보다오징어 오리지날 260g+260g",
            url: "a.html",
          },
          good_9: {
            image: "images/r9.jpg",
            discount: 14,
            price: 18260,
            desc: "샤오미 미지아 가습기2/미지아 스마트 살균가습기2/MJJSQ06DY/관부가세포함",
            url: "a.html",
          },
          good_10: {
            image: "images/r10.jpg",
            discount: 18,
            price: 2930,
            desc: "[쇼핑앱특가2400원] 아이팝 무라벨 먹는샘물 생수 2L*6펫 / 하이트진로",
            url: "a.html",
          },
          good_11: {
            image: "images/r11.jpg",
            discount: 25,
            price: 10410,
            desc: "제주 삼다수 2L 12병 (유/무라벨 랜덤발송) ",
            url: "a.html",
          },
          good_12: {
            url: "go.html",
          },
        };
        let arr = [];
        for (let i = 0; i < dmObj.total; i++) {
          const obj = dmObj["good_" + (i + 1)];
          arr[i] = obj;
        }
        setHtmlTag(arr);
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
    // getJsonData();
    axiosJsonData();
  }, []);

  return (
    <SectionTag pt={80} pb={90}>
      <InnerArea>
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
                <BtCate active={true}>쎈딜</BtCate>
              </li>
              <li>
                <BtCate>베스트</BtCate>
              </li>
              <li>
                <BtCate>블프데이</BtCate>
              </li>
              <li>
                <BtCate>디지털프라자</BtCate>
              </li>
              <li>
                <a href="#">소담상회</a>
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
      </InnerArea>
    </SectionTag>
  );
}

export default Recommend;
