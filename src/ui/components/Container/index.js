import PropTypes from "prop-types";
import useStyles from "./styles";

export default function Container({ children }) {
  const { container } = useStyles();
  return <div className={container}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
