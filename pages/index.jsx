import Logo from '@/components/Logo'
import Copyright from '@/components/Copyright'

const HomePage = () => {
  return (
    <div style={{ textAlign: "center", margin: 0, display: "flex", flexFlow: "column", minHeight: "100vh" }}>
      <header>
        <div style={{ marginTop: "64px", marginBottom: "32px" }}>
          <Logo />
        </div>
      </header>

      <main style={{ flex: 1 }}>
        <h1 style={{ color: "red", fontSize: "1.5rem" }}>ラドウェンのラボ</h1>

        <p>
          どっかでみたことある？<br />
          そうじゃよ。ワシはあのサイトのファンなのじゃよ。
        </p>

        <p>
          <small>
            <strike>入場</strike><br />
            🚧 🚧 🚧 🚧 🚧
          </small>
        </p>

        <p>
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
        </p>
      </main>

      <footer style={{ height: "auto", padding: "32px 0" }}>
        <Copyright />
      </footer>
    </div>
  )
}

export default HomePage
