import { Typography } from "antd";

export default function About() {
  const { Title, Text } = Typography;

  return (
    <div>
      <Title>Quem não ama doguinhos?</Title>
    <div style={{display: "flex"}}>
      <div style={{ width: "70%" }}>
        <div style={{ marginBottom: "1rem" }}>
          <Text style={{ fontSize: "1.3rem" }}>
            Esse site foi feito para praticar conceitos básicos de
            desenvolvimento web em React e agradecer por cachorros existirem :)
          </Text>
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <Text style={{ fontSize: "1.3rem" }}>
            Aproveite esta oportunidade e ajude um animal{" "}
            <a
              href="https://www.petlove.com.br/doacoes?campanha=dsa-todas-paginas-search&gad_source=1&gclid=Cj0KCQiAj9m7BhD1ARIsANsIIvB4rpuviyuywY3lcZ2hbzhHm5xi0SMYmaEzbnncCLb5r4J2xMAIo1EaAmNKEALw_wcB"
              target="_blank"
              rel="noreferrer"
            >
              aqui
            </a>
            !
          </Text>
        </div>
      </div>
      <div style={{width: '30%'}}>
      <iframe src="https://giphy.com/embed/Fu3OjBQiCs3s0ZuLY3" width="270" height="480"  frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/moodman-reaction-Fu3OjBQiCs3s0ZuLY3">via GIPHY</a></p>
      </div>
      </div>
    </div>
  );
}
