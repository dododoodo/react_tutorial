import React from 'react';
import s from '../test.module.scss';

function Css() {
  return (
    <dl>
      <dt>Css, Scss, Module</dt>
      <dd>1. 모듈설치(npm i sass)</dd>
      <dd>2. 해당 페이지에 (import "style.scss")</dd>
      <dd className='test'>3. 태그에 속성을 className으로 작성</dd>
      
      <dt>MODULE</dt>
      <dd className={s.test}>1. 파일명 규칙 => 파일명.module.css</dd>
      <dd>2. 파일 가져오기 (import 별칭 from '파일명.module.scss';)</dd>
      <dd>3. 적용 (className = 별칭.클래스 명)</dd>
    </dl>
  )
}

export default Css