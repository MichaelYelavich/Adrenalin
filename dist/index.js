(function (React) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

    let webpackCache = {};
    let hasWebpack5 = false;
    if (window.webpackJsonp && !window.webpackJsonp.deckyShimmed) {
        // Webpack 4, currently on stable
        const wpRequire = window.webpackJsonp.push([
            [],
            { get_require: (mod, _exports, wpRequire) => (mod.exports = wpRequire) },
            [['get_require']],
        ]);
        delete wpRequire.m.get_require;
        delete wpRequire.c.get_require;
        webpackCache = wpRequire.c;
    }
    else {
        // Webpack 5, currently on beta
        hasWebpack5 = true;
        const id = Math.random();
        let initReq;
        window.webpackChunksteamui.push([
            [id],
            {},
            (r) => {
                initReq = r;
            },
        ]);
        for (let i of Object.keys(initReq.m)) {
            webpackCache[i] = initReq(i);
        }
    }
    const allModules = hasWebpack5
        ? Object.values(webpackCache).filter((x) => x)
        : Object.keys(webpackCache)
            .map((x) => webpackCache[x].exports)
            .filter((x) => x);
    const findModule = (filter) => {
        for (const m of allModules) {
            if (m.default && filter(m.default))
                return m.default;
            if (filter(m))
                return m;
        }
    };
    const findModuleChild = (filter) => {
        for (const m of allModules) {
            for (const mod of [m.default, m]) {
                const filterRes = filter(mod);
                if (filterRes) {
                    return filterRes;
                }
                else {
                    continue;
                }
            }
        }
    };
    const CommonUIModule = allModules.find((m) => {
        if (typeof m !== 'object')
            return false;
        for (let prop in m) {
            if (m[prop]?.contextType?._currentValue && Object.keys(m).length > 60)
                return true;
        }
        return false;
    });
    findModule((m) => {
        if (typeof m !== 'object')
            return false;
        for (let prop in m) {
            if (m[prop]?.toString && /Spinner\)}\),.\.createElement\(\"path\",{d:\"M18 /.test(m[prop].toString()))
                return true;
        }
        return false;
    });
    allModules.find((m) => {
        if (typeof m !== 'object')
            return undefined;
        for (let prop in m) {
            if (m[prop]?.computeRootMatch)
                return true;
        }
        return false;
    });

    const CommonDialogDivs = Object.values(CommonUIModule).filter((m) => typeof m === 'object' && m?.render?.toString().includes('"div",Object.assign({},'));
    const MappedDialogDivs = new Map(Object.values(CommonDialogDivs).map((m) => {
        const renderedDiv = m.render({});
        // Take only the first class name segment as it identifies the element we want
        return [renderedDiv.props.className.split(' ')[0], m];
    }));
    MappedDialogDivs.get('DialogHeader');
    MappedDialogDivs.get('DialogSubHeader');
    MappedDialogDivs.get('DialogFooter');
    MappedDialogDivs.get('DialogLabel');
    MappedDialogDivs.get('DialogBodyText');
    MappedDialogDivs.get('DialogBody');
    MappedDialogDivs.get('DialogControlsSection');
    MappedDialogDivs.get('DialogControlsSectionHeader');
    Object.values(CommonUIModule).find((mod) => mod?.render?.toString()?.includes('DialogButton') && mod?.render?.toString()?.includes('Primary'));
    const DialogButtonSecondary = Object.values(CommonUIModule).find((mod) => mod?.render?.toString()?.includes('Object.assign({type:"button"') &&
        mod?.render?.toString()?.includes('DialogButton') &&
        mod?.render?.toString()?.includes('Secondary'));
    // This is the "main" button. The Primary can act as a submit button,
    // therefore secondary is chosen (also for backwards comp. reasons)
    const DialogButton = DialogButtonSecondary;

    const ButtonItem = Object.values(CommonUIModule).find((mod) => mod?.render?.toString()?.includes('"highlightOnFocus","childrenContainerWidth"') ||
        mod?.render?.toString()?.includes('childrenContainerWidth:"min"'));

    function fakeRenderComponent(fun, customHooks = {}) {
        const hooks = window.SP_REACT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher
            .current;
        // TODO: add more hooks
        let oldHooks = {
            useContext: hooks.useContext,
            useCallback: hooks.useCallback,
            useLayoutEffect: hooks.useLayoutEffect,
            useEffect: hooks.useEffect,
            useMemo: hooks.useMemo,
            useRef: hooks.useRef,
            useState: hooks.useState,
        };
        hooks.useCallback = (cb) => cb;
        hooks.useContext = (cb) => cb._currentValue;
        hooks.useLayoutEffect = (_) => { }; //cb();
        hooks.useMemo = (cb, _) => cb;
        hooks.useEffect = (_) => { }; //cb();
        hooks.useRef = (val) => ({ current: val || {} });
        hooks.useState = (v) => {
            let val = v;
            return [val, (n) => (val = n)];
        };
        Object.assign(hooks, customHooks);
        const res = fun(hooks);
        Object.assign(hooks, oldHooks);
        return res;
    }

    function sleep(ms) {
        return new Promise((res) => setTimeout(res, ms));
    }

    const showContextMenu = findModuleChild((m) => {
        if (typeof m !== 'object')
            return undefined;
        for (let prop in m) {
            if (typeof m[prop] === 'function' && m[prop].toString().includes('stopPropagation))')) {
                return m[prop];
            }
        }
    });
    const Menu = findModuleChild((m) => {
        if (typeof m !== 'object')
            return undefined;
        for (let prop in m) {
            if (m[prop]?.prototype?.HideIfSubmenu && m[prop]?.prototype?.HideMenu) {
                return m[prop];
            }
        }
    });
    findModuleChild((m) => {
        if (typeof m !== 'object')
            return undefined;
        for (let prop in m) {
            if ((m[prop]?.toString()?.includes('bInGamepadUI:') &&
                fakeRenderComponent(() => m[prop]())?.type?.prototype?.RenderSubMenu) ||
                (m[prop]?.prototype?.RenderSubMenu && m[prop]?.prototype?.ShowSubMenu)) {
                return m[prop];
            }
        }
    });
    const MenuItem = findModuleChild((m) => {
        if (typeof m !== 'object')
            return undefined;
        for (let prop in m) {
            if (m[prop]?.render?.toString()?.includes('bPlayAudio:') ||
                (m[prop]?.prototype?.OnOKButton && m[prop]?.prototype?.OnMouseEnter)) {
                return m[prop];
            }
        }
    });
    /*
    all().map(m => {
    if (typeof m !== "object") return undefined;
    for (let prop in m) { if (m[prop]?.prototype?.OK && m[prop]?.prototype?.Cancel && m[prop]?.prototype?.render) return m[prop]}
    }).find(x => x)
    */

    const [panelSection, mod] = findModuleChild((mod) => {
        for (let prop in mod) {
            if (mod[prop]?.toString()?.includes('.PanelSection')) {
                return [mod[prop], mod];
            }
        }
        return null;
    });
    const PanelSection = panelSection;
    const PanelSectionRow = Object.values(mod).filter((exp) => !exp?.toString()?.includes('.PanelSection'))[0];

    var SideMenu;
    (function (SideMenu) {
        SideMenu[SideMenu["None"] = 0] = "None";
        SideMenu[SideMenu["Main"] = 1] = "Main";
        SideMenu[SideMenu["QuickAccess"] = 2] = "QuickAccess";
    })(SideMenu || (SideMenu = {}));
    var QuickAccessTab;
    (function (QuickAccessTab) {
        QuickAccessTab[QuickAccessTab["Notifications"] = 0] = "Notifications";
        QuickAccessTab[QuickAccessTab["RemotePlayTogetherControls"] = 1] = "RemotePlayTogetherControls";
        QuickAccessTab[QuickAccessTab["VoiceChat"] = 2] = "VoiceChat";
        QuickAccessTab[QuickAccessTab["Friends"] = 3] = "Friends";
        QuickAccessTab[QuickAccessTab["Settings"] = 4] = "Settings";
        QuickAccessTab[QuickAccessTab["Perf"] = 5] = "Perf";
        QuickAccessTab[QuickAccessTab["Help"] = 6] = "Help";
        QuickAccessTab[QuickAccessTab["Decky"] = 7] = "Decky";
    })(QuickAccessTab || (QuickAccessTab = {}));
    var DisplayStatus;
    (function (DisplayStatus) {
        DisplayStatus[DisplayStatus["Invalid"] = 0] = "Invalid";
        DisplayStatus[DisplayStatus["Launching"] = 1] = "Launching";
        DisplayStatus[DisplayStatus["Uninstalling"] = 2] = "Uninstalling";
        DisplayStatus[DisplayStatus["Installing"] = 3] = "Installing";
        DisplayStatus[DisplayStatus["Running"] = 4] = "Running";
        DisplayStatus[DisplayStatus["Validating"] = 5] = "Validating";
        DisplayStatus[DisplayStatus["Updating"] = 6] = "Updating";
        DisplayStatus[DisplayStatus["Downloading"] = 7] = "Downloading";
        DisplayStatus[DisplayStatus["Synchronizing"] = 8] = "Synchronizing";
        DisplayStatus[DisplayStatus["ReadyToInstall"] = 9] = "ReadyToInstall";
        DisplayStatus[DisplayStatus["ReadyToPreload"] = 10] = "ReadyToPreload";
        DisplayStatus[DisplayStatus["ReadyToLaunch"] = 11] = "ReadyToLaunch";
        DisplayStatus[DisplayStatus["RegionRestricted"] = 12] = "RegionRestricted";
        DisplayStatus[DisplayStatus["PresaleOnly"] = 13] = "PresaleOnly";
        DisplayStatus[DisplayStatus["InvalidPlatform"] = 14] = "InvalidPlatform";
        DisplayStatus[DisplayStatus["PreloadComplete"] = 16] = "PreloadComplete";
        DisplayStatus[DisplayStatus["BorrowerLocked"] = 17] = "BorrowerLocked";
        DisplayStatus[DisplayStatus["UpdatePaused"] = 18] = "UpdatePaused";
        DisplayStatus[DisplayStatus["UpdateQueued"] = 19] = "UpdateQueued";
        DisplayStatus[DisplayStatus["UpdateRequired"] = 20] = "UpdateRequired";
        DisplayStatus[DisplayStatus["UpdateDisabled"] = 21] = "UpdateDisabled";
        DisplayStatus[DisplayStatus["DownloadPaused"] = 22] = "DownloadPaused";
        DisplayStatus[DisplayStatus["DownloadQueued"] = 23] = "DownloadQueued";
        DisplayStatus[DisplayStatus["DownloadRequired"] = 24] = "DownloadRequired";
        DisplayStatus[DisplayStatus["DownloadDisabled"] = 25] = "DownloadDisabled";
        DisplayStatus[DisplayStatus["LicensePending"] = 26] = "LicensePending";
        DisplayStatus[DisplayStatus["LicenseExpired"] = 27] = "LicenseExpired";
        DisplayStatus[DisplayStatus["AvailForFree"] = 28] = "AvailForFree";
        DisplayStatus[DisplayStatus["AvailToBorrow"] = 29] = "AvailToBorrow";
        DisplayStatus[DisplayStatus["AvailGuestPass"] = 30] = "AvailGuestPass";
        DisplayStatus[DisplayStatus["Purchase"] = 31] = "Purchase";
        DisplayStatus[DisplayStatus["Unavailable"] = 32] = "Unavailable";
        DisplayStatus[DisplayStatus["NotLaunchable"] = 33] = "NotLaunchable";
        DisplayStatus[DisplayStatus["CloudError"] = 34] = "CloudError";
        DisplayStatus[DisplayStatus["CloudOutOfDate"] = 35] = "CloudOutOfDate";
        DisplayStatus[DisplayStatus["Terminating"] = 36] = "Terminating";
    })(DisplayStatus || (DisplayStatus = {}));
    const Router = findModuleChild((m) => {
        if (typeof m !== 'object')
            return undefined;
        for (let prop in m) {
            if (m[prop]?.Navigate && m[prop]?.NavigationManager)
                return m[prop];
        }
    });
    let Navigation = {};
    try {
        (async () => {
            let InternalNavigators = {};
            if (!Router.NavigateToAppProperties || Router.deckyShim) {
                function initInternalNavigators() {
                    try {
                        InternalNavigators = findModuleChild((m) => {
                            if (typeof m !== 'object')
                                return undefined;
                            for (let prop in m) {
                                if (m[prop]?.GetNavigator) {
                                    return m[prop];
                                }
                            }
                        })?.GetNavigator();
                    }
                    catch (e) {
                        console.error('[DFL:Router]: Failed to init internal navigators, trying again');
                    }
                }
                initInternalNavigators();
                while (!InternalNavigators?.AppProperties) {
                    console.log('[DFL:Router]: Trying to init internal navigators again');
                    await sleep(100);
                    initInternalNavigators();
                }
            }
            const newNavigation = {
                Navigate: Router.Navigate.bind(Router),
                NavigateBack: Router.WindowStore?.GamepadUIMainWindowInstance?.NavigateBack.bind(Router.WindowStore.GamepadUIMainWindowInstance),
                NavigateToAppProperties: InternalNavigators?.AppProperties || Router.NavigateToAppProperties.bind(Router),
                NavigateToExternalWeb: Router.NavigateToExternalWeb.bind(Router),
                NavigateToInvites: InternalNavigators?.Invites || Router.NavigateToInvites.bind(Router),
                NavigateToChat: Router.NavigateToChat.bind(Router),
                NavigateToLibraryTab: InternalNavigators?.LibraryTab || Router.NavigateToLibraryTab.bind(Router),
                NavigateToLayoutPreview: Router.NavigateToLayoutPreview.bind(Router),
                NavigateToSteamWeb: Router.WindowStore?.GamepadUIMainWindowInstance?.NavigateToSteamWeb.bind(Router.WindowStore.GamepadUIMainWindowInstance),
                NavigateToWebRoute: Router.WindowStore?.GamepadUIMainWindowInstance?.NavigateToWebRoute.bind(Router.WindowStore.GamepadUIMainWindowInstance),
                OpenSideMenu: Router.WindowStore?.GamepadUIMainWindowInstance?.MenuStore.OpenSideMenu.bind(Router.WindowStore.GamepadUIMainWindowInstance.MenuStore),
                OpenQuickAccessMenu: Router.WindowStore?.GamepadUIMainWindowInstance?.MenuStore.OpenQuickAccessMenu.bind(Router.WindowStore.GamepadUIMainWindowInstance.MenuStore),
                OpenMainMenu: Router.WindowStore?.GamepadUIMainWindowInstance?.MenuStore.OpenMainMenu.bind(Router.WindowStore.GamepadUIMainWindowInstance.MenuStore),
                CloseSideMenus: Router.CloseSideMenus.bind(Router),
                OpenPowerMenu: Router.OpenPowerMenu.bind(Router),
            };
            Object.assign(Navigation, newNavigation);
        })();
    }
    catch (e) {
        console.error('[DFL:Router]: Error initializing Navigation interface', e);
    }

    const quickAccessMenuClasses = findModule((mod) => typeof mod === 'object' && mod?.Title?.includes('quickaccessmenu'));
    /**
     * @depreciated please use quickAccessMenuClasses instead
     */
    const staticClasses = quickAccessMenuClasses;
    findModule((mod) => typeof mod === 'object' && mod?.ScrollPanel?.includes('scrollpanel'));
    findModule((mod) => typeof mod === 'object' && mod?.GamepadDialogContent?.includes('gamepaddialog'));
    findModule((mod) => typeof mod === 'object' && mod?.PanelSection?.includes('quickaccesscontrols'));
    findModule((mod) => typeof mod === 'object' && mod?.OOBEUpdateStatusContainer?.includes('updaterfield'));
    findModule((mod) => typeof mod === 'object' && mod?.Container?.includes('appdetailsplaysection'));
    findModule((mod) => typeof mod === 'object' && mod?.SliderControlPanelGroup?.includes('gamepadslider'));
    findModule((mod) => typeof mod === 'object' && mod?.TopCapsule?.includes('sharedappdetailsheader'));
    findModule((mod) => typeof mod === 'object' && mod?.HeaderLoaded?.includes('appdetails_'));

    // TypeScript helper function
    const definePlugin = (fn) => {
        return (...args) => {
            // TODO: Maybe wrap this
            return fn(...args);
        };
    };

    var DefaultContext = {
      color: undefined,
      size: undefined,
      className: undefined,
      style: undefined,
      attr: undefined
    };
    var IconContext = React__default["default"].createContext && React__default["default"].createContext(DefaultContext);

    var __assign = window && window.__assign || function () {
      __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return __assign.apply(this, arguments);
    };

    var __rest = window && window.__rest || function (s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    };

    function Tree2Element(tree) {
      return tree && tree.map(function (node, i) {
        return React__default["default"].createElement(node.tag, __assign({
          key: i
        }, node.attr), Tree2Element(node.child));
      });
    }

    function GenIcon(data) {
      return function (props) {
        return React__default["default"].createElement(IconBase, __assign({
          attr: __assign({}, data.attr)
        }, props), Tree2Element(data.child));
      };
    }
    function IconBase(props) {
      var elem = function (conf) {
        var attr = props.attr,
            size = props.size,
            title = props.title,
            svgProps = __rest(props, ["attr", "size", "title"]);

        var computedSize = size || conf.size || "1em";
        var className;
        if (conf.className) className = conf.className;
        if (props.className) className = (className ? className + ' ' : '') + props.className;
        return React__default["default"].createElement("svg", __assign({
          stroke: "currentColor",
          fill: "currentColor",
          strokeWidth: "0"
        }, conf.attr, attr, svgProps, {
          className: className,
          style: __assign(__assign({
            color: props.color || conf.color
          }, conf.style), props.style),
          height: computedSize,
          width: computedSize,
          xmlns: "http://www.w3.org/2000/svg"
        }), title && React__default["default"].createElement("title", null, title), props.children);
      };

      return IconContext !== undefined ? React__default["default"].createElement(IconContext.Consumer, null, function (conf) {
        return elem(conf);
      }) : elem(DefaultContext);
    }

    // THIS FILE IS AUTO GENERATED
    function FaShip (props) {
      return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 640 512"},"child":[{"tag":"path","attr":{"d":"M496.616 372.639l70.012-70.012c16.899-16.9 9.942-45.771-12.836-53.092L512 236.102V96c0-17.673-14.327-32-32-32h-64V24c0-13.255-10.745-24-24-24H248c-13.255 0-24 10.745-24 24v40h-64c-17.673 0-32 14.327-32 32v140.102l-41.792 13.433c-22.753 7.313-29.754 36.173-12.836 53.092l70.012 70.012C125.828 416.287 85.587 448 24 448c-13.255 0-24 10.745-24 24v16c0 13.255 10.745 24 24 24 61.023 0 107.499-20.61 143.258-59.396C181.677 487.432 216.021 512 256 512h128c39.979 0 74.323-24.568 88.742-59.396C508.495 491.384 554.968 512 616 512c13.255 0 24-10.745 24-24v-16c0-13.255-10.745-24-24-24-60.817 0-101.542-31.001-119.384-75.361zM192 128h256v87.531l-118.208-37.995a31.995 31.995 0 0 0-19.584 0L192 215.531V128z"}}]})(props);
    }

    var logo = 'http://127.0.0.1:1337/plugins/ADRENALIN/assets/logo-676a1e03.png';

    // interface AddMethodArgs {
    //   left: number;
    //   right: number;
    // }
    const Content = ({}) => {
        // const [result, setResult] = useState<number | undefined>();
        // const onClick = async () => {
        //   const result = await serverAPI.callPluginMethod<AddMethodArgs, number>(
        //     "add",
        //     {
        //       left: 2,
        //       right: 2,
        //     }
        //   );
        //   if (result.success) {
        //     setResult(result.result);
        //   }
        // };
        return (window.SP_REACT.createElement(PanelSection, { title: "Panel Section" },
            window.SP_REACT.createElement(PanelSectionRow, null,
                window.SP_REACT.createElement(ButtonItem, { layout: "below", onClick: (e) => showContextMenu(window.SP_REACT.createElement(Menu, { label: "Menu", cancelText: "CAAAANCEL", onCancel: () => { } },
                        window.SP_REACT.createElement(MenuItem, { onSelected: () => { } }, "Item #1"),
                        window.SP_REACT.createElement(MenuItem, { onSelected: () => { } }, "Item #2"),
                        window.SP_REACT.createElement(MenuItem, { onSelected: () => { } }, "Item #3")), e.currentTarget ?? window) }, "Server says yolo")),
            window.SP_REACT.createElement(PanelSectionRow, null,
                window.SP_REACT.createElement("div", { style: { display: "flex", justifyContent: "center" } },
                    window.SP_REACT.createElement("img", { src: logo }))),
            window.SP_REACT.createElement(PanelSectionRow, null,
                window.SP_REACT.createElement(ButtonItem, { layout: "below", onClick: () => {
                        Router.CloseSideMenus();
                        Router.Navigate("/decky-plugin-test");
                    } }, "Router"))));
    };
    const DeckyPluginRouterTest = () => {
        return (window.SP_REACT.createElement("div", { style: { marginTop: "50px", color: "white" } },
            "Hello World!",
            window.SP_REACT.createElement(DialogButton, { onClick: () => Navigation.NavigateToLibraryTab() }, "  //replaced router with nav fuck you npm Go to Library")));
    };
    var index = definePlugin((serverApi) => {
        serverApi.routerHook.addRoute("/decky-plugin-test", DeckyPluginRouterTest, {
            exact: true,
        });
        return {
            title: window.SP_REACT.createElement("div", { className: staticClasses.Title }, "Example Plugin"),
            content: window.SP_REACT.createElement(Content, { serverAPI: serverApi }),
            icon: window.SP_REACT.createElement(FaShip, null),
            onDismount() {
                serverApi.routerHook.removeRoute("/decky-plugin-test");
            },
        };
    });

    return index;

})(SP_REACT);
