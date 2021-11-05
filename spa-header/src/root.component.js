

export default function Root(props) {
  const linkStyle = {
    padding: "12px"
  }
  return (
      <div>
        <a href="/home" style={linkStyle}>home</a>
        <a href="/test" style={linkStyle}>test</a>
      </div>
  );
}