import React from 'react'

function Router() {
    const t1 = "import { BrowserRouter, Route, NavLink, Routes} from 'react-router-dom'"
    const t2 = `<BrowserRouter>
      <header>
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/css">CSS</NavLink>
        <NavLink to="/router">Router</NavLink>
        <NavLink to="/stateprops">State&Props</NavLink>
        <NavLink to="/deploy">Deploy</NavLink>
      </header>
      <main>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/css" element={<Css/>} />
          <Route path="/router" element={<Router/>} />
          <Route path="/stateprops" element={<StateProps/>} />
          <Route path="/deploy" element={<Deploy/>} />

        </Routes>

      </main>
      <footer></footer>
      </BrowserRouter>`;

    return (
        <dl>
            <dt>Router</dt>
            <dd>1. 모듈 설치(npm i react-router-dom)</dd>
            <dd>2. App.js 모듈 가져오기({t1}) <br/>
                자동완성(imrr)
            </dd>
            <dd>3. 작업방법
                NavLink 컴포넌트를 a태그처럼 사용하면 된다.
                메뉴 클릭 시 다른 컴포넌트로 교체 <br/>
                브라우저 주소 값과 path값이 일치할 때 컨포넌트가 화면에 출력 <br/>
                <textarea cols="100" rows="25">{t2}</textarea>
            </dd>
        </dl>
    )
}

export default Router