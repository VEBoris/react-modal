function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function Modal(_ref) {
  var closeModal = _ref.closeModal,
    text = _ref.text,
    styleModalBody = _ref.styleModalBody,
    styleButton = _ref.styleButton,
    styleText = _ref.styleText;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/React.createElement("div", {
    style: styleModalBody,
    className: "modal-body"
  }, /*#__PURE__*/React.createElement("button", {
    style: styleButton,
    className: "modal-button",
    onClick: closeModal
  }, "X"), /*#__PURE__*/React.createElement("p", {
    style: styleText,
    className: "modal-text"
  }, text)));
}

export default Modal;
//# sourceMappingURL=index.js.map