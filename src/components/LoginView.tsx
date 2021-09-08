import { css } from '@emotion/react'
import axios from 'axios'
import { BASE_URL, KAKAO_AUTH_URL } from 'config'
import { ButtonDefault, FlexColCenter } from 'styles/GlobalStyles'

const LoginView: React.FC = () => {
  const handleKakaoLoginButton = () => {
    window.location.assign(KAKAO_AUTH_URL)
  }

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${BASE_URL}/login`, {
        username: 'user1',
        email: 'email@example.com',
        password: 'password',
      })
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div css={Container}>
      <button onClick={handleLogin}>그냥 로그인</button>
      <button css={ButtonDefault} onClick={handleKakaoLoginButton}>
        <img
          css={KakaoLoginImg}
          src="assets/kakao_login_large_narrow.png"
          alt="카카오 로그인"
        />
      </button>
    </div>
  )
}

export default LoginView

const Container = css`
  ${FlexColCenter}
  width: 100vw;
  height: 100vh;
  max-width: 768px;
`
const KakaoLoginImg = css`
  width: 200px;
`
