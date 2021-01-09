import Logo from '@/components/Logo'
import Copyright from '@/components/Copyright'

const HomePage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ marginTop: "64px", marginBottom: "32px" }}>
        <Logo />
      </div>

      <main>
        <h1 style={{ color: "red", fontSize: "1.5rem" }}>ラドウェンのラボ</h1>

        <p style={{ marginBottom: "32px" }}>
          どっかでみたことある？<br />
          そうじゃよ。ワシはあのサイトのファンなのじゃよ。
        </p>
        <a href="https://bbs.jpnkn.com/raduwen/" target="_blank">掲示板</a><br/>
        <strike>
          <a target="_blank">スタンプキャスト</a><br/>
        </strike>
        <span>
          <a href="https://www.twitch.tv/raduwen" target="_blank">Twitch</a><br/>
        </span>
        <span>
          <a href="https://www.youtube.com/channel/UC9qkQ8wBNtykTaLrNHh_IJQ/" target="_blank">YouTube</a>(特に何もないかも)<br/>
        </span>
      </main>

      <footer style={{ marginTop: "64px" }}>
        <Copyright />
      </footer>
    </div>
  )
}

export default HomePage
