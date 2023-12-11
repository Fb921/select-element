import React, { useState } from 'react';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".select_container{position:relative}.selected_element{background:#fff;border:none;border-radius:3px;box-sizing:border-box;cursor:pointer;height:35px;padding:1px 2px}.list-element_container{background:#fff;border:none;border-top:1px solid #ededed;box-shadow:0 2px 5px #00000010;max-height:200px;overflow-y:scroll;position:absolute;width:100%;z-index:10}.list-element_container::-webkit-scrollbar{position:absolute;width:5px}.list-element_container::-webkit-scrollbar-thumb{background:#e0e0e0;border-radius:20px;width:5px}[data-display=true]{display:block}[data-display=false]{display:none}.list_element{cursor:pointer;padding:5px 2px}.list_element:hover{background:#def}";
styleInject(css_248z);

function SelectElement({
  id,
  name,
  list,
  setter
}) {
  const [collapse, setCollapse] = useState(false);
  const [selection, setSelection] = useState(list[0]);
  const [selectionValue, setSelectionValue] = useState(list[0]);
  let listContainer = list.map((e, i) => {
    return /*#__PURE__*/React.createElement("div", {
      key: 'list_e_' + id + "_" + i,
      className: "list_element",
      "data-value": e,
      onClick: el => {
        setter(el.target.dataset.value);
        setSelection(e);
        setSelectionValue(el.target.dataset.value);
        setCollapse(false);
      }
    }, e);
  });
  function display_selectionList() {
    setCollapse(!collapse);
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "select_container"
  }, /*#__PURE__*/React.createElement("input", {
    id: id + "_selected_element",
    name: name,
    value: selectionValue,
    onClick: display_selectionList,
    type: "hidden"
  }), /*#__PURE__*/React.createElement("div", {
    className: "selected_element",
    onClick: display_selectionList
  }, selection), /*#__PURE__*/React.createElement("div", {
    className: "list-element_container",
    "data-display": collapse
  }, listContainer));
}

export { SelectElement as default };
