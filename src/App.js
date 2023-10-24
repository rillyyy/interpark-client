import Header from "./components/Header";

export default function App() {
  return (
    <div className="wrap">
      {/* <!-- 상단 영역 --> */}
      <Header />
      {/* <!-- 메인 영역 --> */}
      <div className="main"></div>
      {/* <!-- 하단 영역 --> */}
      <footer className="footer"></footer>
    </div>
  );
}
