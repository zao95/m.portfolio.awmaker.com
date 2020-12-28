import React from 'react'
import "../styles/Mobile.sass"

const Mobile = () => {
	return (
		<>
            <div id="mobileContainer">
                <div className="logo" />
                <div className="message">
                    <p>
                        죄송합니다. 모바일은 지원하지 않습니다.
                    </p>
                    <p>
                        PC로 접속 부탁드립니다.
                    </p>
                    <p>
                        프론트엔드 개발자 이정우
                    </p>
                </div>
            </div>
		</>
    )
}

export default Mobile