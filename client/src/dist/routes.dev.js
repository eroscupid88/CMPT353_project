"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Dashboard = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/dashboard/Dashboard'));
  });
});

var Colors = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/theme/colors/Colors'));
  });
});

var Typography = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/theme/typography/Typography'));
  });
}); // Base


var Accordion = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/base/accordion/Accordion'));
  });
});

var Breadcrumbs = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/base/breadcrumbs/Breadcrumbs'));
  });
});

var Cards = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/base/cards/Cards'));
  });
});

var Carousels = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/base/carousels/Carousels'));
  });
});

var Collapses = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/base/collapses/Collapses'));
  });
});

var ListGroups = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/base/list-groups/ListGroups'));
  });
});

var Navs = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/base/navs/Navs'));
  });
});

var Paginations = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/base/paginations/Paginations'));
  });
});

var Popovers = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/base/popovers/Popovers'));
  });
});

var Progress = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/base/progress/Progress'));
  });
});

var Spinners = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/base/spinners/Spinners'));
  });
});

var Tables = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/base/tables/Tables'));
  });
});

var Tooltips = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/base/tooltips/Tooltips'));
  });
}); // Buttons


var Buttons = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/buttons/buttons/Buttons'));
  });
});

var ButtonGroups = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/buttons/button-groups/ButtonGroups'));
  });
});

var Dropdowns = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/buttons/dropdowns/Dropdowns'));
  });
}); //Forms


var ChecksRadios = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/forms/checks-radios/ChecksRadios'));
  });
});

var FloatingLabels = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/forms/floating-labels/FloatingLabels'));
  });
});

var FormControl = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/forms/form-control/FormControl'));
  });
});

var InputGroup = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/forms/input-group/InputGroup'));
  });
});

var Layout = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/forms/layout/Layout'));
  });
});

var Range = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/forms/range/Range'));
  });
});

var Select = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/forms/select/Select'));
  });
});

var Validation = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/forms/validation/Validation'));
  });
});

var Charts = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/charts/Charts'));
  });
}); // Icons


var CoreUIIcons = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/icons/coreui-icons/CoreUIIcons'));
  });
});

var Flags = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/icons/flags/Flags'));
  });
});

var Brands = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/icons/brands/Brands'));
  });
}); // Notifications


var Alerts = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/notifications/alerts/Alerts'));
  });
});

var Badges = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/notifications/badges/Badges'));
  });
});

var Modals = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/notifications/modals/Modals'));
  });
});

var Toasts = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/notifications/toasts/Toasts'));
  });
});

var Widgets = _react["default"].lazy(function () {
  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./views/widgets/Widgets'));
  });
});

var routes = [{
  path: '/',
  exact: true,
  name: 'Home'
}, {
  path: '/dashboard',
  name: 'Dashboard',
  component: Dashboard
}, {
  path: '/theme',
  name: 'Theme',
  component: Colors,
  exact: true
}, {
  path: '/theme/colors',
  name: 'Colors',
  component: Colors
}, {
  path: '/theme/typography',
  name: 'Typography',
  component: Typography
}, {
  path: '/base',
  name: 'Base',
  component: Cards,
  exact: true
}, {
  path: '/base/accordion',
  name: 'Accordion',
  component: Accordion
}, {
  path: '/base/breadcrumbs',
  name: 'Breadcrumbs',
  component: Breadcrumbs
}, {
  path: '/base/cards',
  name: 'Cards',
  component: Cards
}, {
  path: '/base/carousels',
  name: 'Carousel',
  component: Carousels
}, {
  path: '/base/collapses',
  name: 'Collapse',
  component: Collapses
}, {
  path: '/base/list-groups',
  name: 'List Groups',
  component: ListGroups
}, {
  path: '/base/navs',
  name: 'Navs',
  component: Navs
}, {
  path: '/base/paginations',
  name: 'Paginations',
  component: Paginations
}, {
  path: '/base/popovers',
  name: 'Popovers',
  component: Popovers
}, {
  path: '/base/progress',
  name: 'Progress',
  component: Progress
}, {
  path: '/base/spinners',
  name: 'Spinners',
  component: Spinners
}, {
  path: '/base/tables',
  name: 'Tables',
  component: Tables
}, {
  path: '/base/tooltips',
  name: 'Tooltips',
  component: Tooltips
}, {
  path: '/buttons',
  name: 'Buttons',
  component: Buttons,
  exact: true
}, {
  path: '/buttons/buttons',
  name: 'Buttons',
  component: Buttons
}, {
  path: '/buttons/dropdowns',
  name: 'Dropdowns',
  component: Dropdowns
}, {
  path: '/buttons/button-groups',
  name: 'Button Groups',
  component: ButtonGroups
}, {
  path: '/charts',
  name: 'Charts',
  component: Charts
}, {
  path: '/forms',
  name: 'Forms',
  component: FormControl,
  exact: true
}, {
  path: '/forms/form-control',
  name: 'Form Control',
  component: FormControl
}, {
  path: '/forms/select',
  name: 'Select',
  component: Select
}, {
  path: '/forms/checks-radios',
  name: 'Checks & Radios',
  component: ChecksRadios
}, {
  path: '/forms/range',
  name: 'Range',
  component: Range
}, {
  path: '/forms/input-group',
  name: 'Input Group',
  component: InputGroup
}, {
  path: '/forms/floating-labels',
  name: 'Floating Labels',
  component: FloatingLabels
}, {
  path: '/forms/layout',
  name: 'Layout',
  component: Layout
}, {
  path: '/forms/validation',
  name: 'Validation',
  component: Validation
}, {
  path: '/icons',
  exact: true,
  name: 'Icons',
  component: CoreUIIcons
}, {
  path: '/icons/coreui-icons',
  name: 'CoreUI Icons',
  component: CoreUIIcons
}, {
  path: '/icons/flags',
  name: 'Flags',
  component: Flags
}, {
  path: '/icons/brands',
  name: 'Brands',
  component: Brands
}, {
  path: '/notifications',
  name: 'Notifications',
  component: Alerts,
  exact: true
}, {
  path: '/notifications/alerts',
  name: 'Alerts',
  component: Alerts
}, {
  path: '/notifications/badges',
  name: 'Badges',
  component: Badges
}, {
  path: '/notifications/modals',
  name: 'Modals',
  component: Modals
}, {
  path: '/notifications/toasts',
  name: 'Toasts',
  component: Toasts
}, {
  path: '/widgets',
  name: 'Widgets',
  component: Widgets
}];
var _default = routes;
exports["default"] = _default;