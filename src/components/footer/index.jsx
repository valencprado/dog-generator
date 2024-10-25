import { Typography } from "antd";

const { Text } = Typography;
export default function CustomFooter() {
  return (
    <div style={{ textAlign: "center" }}>
      <Text style={{ fontSize: "1rem" }}>
        Feito por{" "}
        <a
          href="http://github.com/valencprado"
          target="_blank"
          rel="noopener noreferrer"
        >
          Valentina Prado.
        </a>
      </Text>
    </div>
  );
}
