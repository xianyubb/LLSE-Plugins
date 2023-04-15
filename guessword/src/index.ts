// LiteLoader-AIDS automatic generated
/// <reference path="c:\Users\Administrator\.vscode/dts/HelperLib-master/src/index.d.ts"/>
require("./conf&coin");
import { isIP } from "net";
import { format } from "path";
import { isPromise } from "util/types";

import {
  PLUGIN_DESCRIPTION,
  PLUGIN_EXTRA,
  PLUGIN_NAME,
  PLUGIN_VERSION,
} from "./const";
import { main } from "./forms";

logger.setTitle(PLUGIN_NAME + "已加载");

ll.registerPlugin(
  PLUGIN_NAME,
  PLUGIN_DESCRIPTION,
  PLUGIN_VERSION,
  PLUGIN_EXTRA
);

mc.listen("onServerStarted", () => {
  const gw = mc.newCommand("gwessword", "猜词表单", PermType.Any, 0x80);
  gw.setAlias("gw");
  gw.setEnum("action", ["main", "cs"]);
  gw.mandatory("main", ParamType.Enum, "action");
  gw.overload(["main"]);
  gw.setCallback((_cmd, _ori, out, res) => {
    switch (res.main) {
      case "main":
        main(_ori.player);
        break;
      case "cs":
        if (_ori.player?.isOP() === true) {
        }
        break;
    }
  });
  gw.setup();
});

export let Qu = "hhh",
  coins = 666;
