function ErrorPage() {
  return (
<div className="main_wrapper relative z-50">
  <div className="main ">
    <div className="grid text-[#63594f]  error-text -z-10 place-content-center place-items-center lg:text-[450px] text-[300px]  lg:top-10 top-32  absolute">
        404
    </div>
    <div className="antenna">
      <div className="antenna_shadow"></div>
      <div className="a1"></div>
      <div className="a1d"></div>
      <div className="a2"></div>
      <div className="a2d"></div>
      <div className="a_base"></div>
    </div>
    <div className="tv">
      <div className="cruve">
        <svg
          className="curve_svg"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          // eslint-disable-next-line react/no-unknown-property
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 189.929 189.929"
          // eslint-disable-next-line react/no-unknown-property
          xml:space="preserve"
        >
          <path
            d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
        C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
          ></path>
        </svg>
      </div>
      <div className="display_div">
        <div className="screen_out">
          <div className="screen_out1">
            <div className="screen">
              <span className="notfound_text p-1">NOT FOUND :(</span>
            </div>
          </div>
        </div>
      </div>
      <div className="lines">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className="buttons_div">
        <div className="b1"><div></div></div>
        <div className="b2"></div>
        <div className="speakers">
          <div className="g1">
            <div className="g11"></div>
            <div className="g12"></div>
            <div className="g13"></div>
          </div>
          <div className="g"></div>
          <div className="g"></div>
        </div>
      </div>
    </div>
    <div className="bottom">
      <div className="base1"></div>
      <div className="base2"></div>
      <div className="base3"></div>
    </div>
  </div>
</div>

  )
}

export default ErrorPage